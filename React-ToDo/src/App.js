import { useEffect, useReducer, useState } from 'react';
import ListItem from './ListItem';
import './App.css';


const reducer = (todo,action) => {
      
  switch(action.type){
      case ACTIONS.ADD_TODO : return action.payload.name !== '' ? [...todo,newToDo(action.payload.name)] : todo;

      case ACTIONS.COMPLETE_TODO : 
          return todo.map(todo => {
            return todo.id === action.payload.id ? {...todo, completed : !todo.completed} : todo;
          })

      case ACTIONS.REMOVE_TODO : 
          return todo.filter(todo => todo.id !== action.payload.id)
      default : return todo
  }
}
export const ACTIONS = {
  ADD_TODO : 'add-todo',
  COMPLETE_TODO : 'complete-todo',
  REMOVE_TODO : 'remove-todo',
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

             {todo.length > 0 && <div className="rem_label">
               <p>Remaining Tasks</p><hr />
              </div>}

            <div className="taksList">
              {
                todo.map(item => (
                  item.completed === false && <ListItem item={item} dispatch={dispatch} opacity={false}/>
                ))
              }
            </div>     

            {todo.length > 0 && <div className="rem_label">
               <p>Completed Tasks</p><hr />
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

