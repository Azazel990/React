import React from "react";
import './App.css'
import { GrCheckmark } from "react-icons/gr";
import { FaTrash } from "react-icons/fa";
import { MdReplayCircleFilled } from "react-icons/md";
import {ACTIONS} from './App.js'
export default function ListItem(props) {
    const item = props.item
    const dispatch = props.dispatch
    const style = props.opacity ? 'listItem d-flex justify-space-between op w-100' : 'listItem d-flex justify-space-between w-100';
    return (
        <div className={style} >
            <div className="taskName">
                {item.name}
            </div>
            <div className='btnDone' >
                {!item.completed && <GrCheckmark title='Task Done' size='1.5em' className='m-3' onClick={()=> dispatch({type : ACTIONS.COMPLETE_TODO, payload : {id : item.id}})}/>} 
                 {item.completed && <MdReplayCircleFilled title='Undo Task' size='1.5em' className='m-3' onClick={()=> dispatch({type : ACTIONS.COMPLETE_TODO, payload : {id : item.id} })}/>} 
                <FaTrash title='Delete Task' size='1.5em' className='m-3' onClick={()=> dispatch({type : ACTIONS.REMOVE_TODO, payload : {id : item.id,name : item.name}})} />
            </div>
        </div>
    )
}