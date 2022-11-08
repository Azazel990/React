import React from "react";
import './App.css'
import { GrCheckmark } from "react-icons/gr";
import { FaTrash } from "react-icons/fa";
import {ACTIONS} from './App.js'

export default function ListItem(props) {
    const item = props.item
    const dispatch = props.dispatch

    return (
        <div className='listItem d-flex justify-space-between'>
            <div className="taskName">
                {item.name}
            </div>
            <div className='btnDone' >
                <GrCheckmark title='Task Done' size='1.5em' className='m-3' onClick={()=> dispatch({type : ACTIONS.COMPLETE_TODO, payload : {id : item.id} })}/> 
                <FaTrash title='Delete Task' size='1.5em' className='m-3' onClick={()=> dispatch({type : ACTIONS.REMOVE_TODO, payload : {id : item.id}})} />
            </div>
        </div>
    )
}