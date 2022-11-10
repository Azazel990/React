import { useEffect, useReducer, useState } from 'react';
import ListItem from './ListItem';
import './App.css';
// import { AnimateOnChange } from 'react-animation'
// import {bounceIn,bounceOut} from 'react-animation'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { myChoice } from './alerts';

export const MySwal = withReactContent(Swal)

const reducer =  (todo,action) => {
      
  switch(action.type){
      case ACTIONS.ADD_TODO : return action.payload.name !== '' ? [...todo,newToDo(action.payload.name)] : todo;

      case ACTIONS.COMPLETE_TODO : 
          return todo.map(todo => {
            return todo.id === action.payload.id ? {...todo, completed : !todo.completed} : todo;
          })

      case ACTIONS.REMOVE_TODO : 
          if(window.confirm(`Are you sure you want yo remove ${action.payload.name} ? `)){
            return todo.filter(todo => todo.id !== action.payload.id)
          }
          return todo

      case ACTIONS.ALL_DONE : 
          return todo.map(todo => todo.completed === false ? {...todo,completed : true}: todo);

      case ACTIONS.DELETE_ALL_REM : 
          if(window.confirm("Are you sure you want to delete all ? ")){
            return todo.filter(todo=> todo.completed !== false)
          }
          return todo;
        
      case ACTIONS.UNDO_ALL : 
          return todo.map(todo => todo.completed === true ? {...todo, completed : false} : todo)

      case ACTIONS.ALL_CLEAR : 
          if(window.confirm("Are you sure you want to clear all tasks ? ")){
            return todo.filter(todo => todo.completed !== true)
          }
          return todo;

      default : return todo
  }
}
export const ACTIONS = {
  ADD_TODO : 'add-todo',
  COMPLETE_TODO : 'complete-todo',
  REMOVE_TODO : 'remove-todo',
  ALL_DONE : 'all-done',
  DELETE_ALL_REM : 'delete-all',
  UNDO_ALL : 'undo-all',
  ALL_CLEAR : 'all-clear'
}

const newToDo = (name) => {
  return {
    id : Date.now(),
    name : name,
    completed : false
  }
}
export default function App() {
  
  const [todo,dispatch] = useReducer(reducer,JSON.parse(window.localStorage.getItem('list')) || []);
  const [name,setName] = useState('');

  const handleSubmit = () => {
    dispatch({
      type  : ACTIONS.ADD_TODO,
      payload : {
        name : name
      }
    })
    setName('')
  }

let input = ''
 setTimeout(() => {
    input = document.getElementById("myInput");
    input.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("myBtn").click();
      }
    });
 }, 1000);


useEffect(()=> {
    window.localStorage.setItem('list',JSON.stringify(todo))
},[todo])

  return (
    <div className="App d-flex justify-content-center">
          
         <section>
            <div className="inputBar">
                  <input type="text" name="" id="myInput"  value={name} onChange={e => setName(e.target.value)}/>
                  <button className='btn' id='myBtn' onClick={handleSubmit}>Add</button>
              </div>

             {todo.length > 0 && <div>
                <div className="rem_label d-flex justify-space-between align-center">
                    <p>Remaining Tasks</p>
                    <div className='d-flex '>
                        <button className='btn' onClick={()=> dispatch({type : ACTIONS.ALL_DONE})}>All Done</button>
                        <button className='btn' onClick={()=> dispatch({type : ACTIONS.DELETE_ALL_REM})}>Delete All</button>
                    </div>
              </div><hr />
             </div> }

            <div className="taksList">
              {
                todo.map(item => (
                  item.completed === false && <ListItem item={item} dispatch={dispatch} opacity={false}/>
                ))
              }
            </div>     

            {todo.length > 0 &&<div>
                <div className="rem_label d-flex justify-space-between align-center">
                    <p>Remaining Tasks</p>
                    <div className='d-flex '>
                        <button className='btn' onClick={()=> dispatch({type : ACTIONS.UNDO_ALL})}>Undo All</button>
                        <button className='btn' onClick={()=> dispatch({type : ACTIONS.ALL_CLEAR})}>All Clear</button>
                    </div>
              </div><hr />
             </div>}   

               <div className="taksList">
              {
                todo.map(item => (
                  item.completed === true && <ListItem item={item} dispatch={dispatch} opacity={true}/>
                ))
              }

              {todo.length === 0 && <p>No Tasks Found</p>}
            </div>          
         </section>


    </div>
  );
}

