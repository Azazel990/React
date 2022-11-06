import React from 'react'
import { legacy_createStore as createStore} from 'redux'

//actions
const increment = () => {
    return {
        type : 'INCREMENT'
    }
}

const decrement = () => {
    return {
        type : 'DECREMENT'
    }
}

//Reducer

const count = (state= 0,action) => {
    switch(action.type){
        case 'INCREMENT' :
            return state + 1
        case 'DECREMENT' : 
            return state - 1
    }
}

//Creating a store 
const store = createStore(count)


//Calling the action
store.dispatch(increment())

//Subscribe to store
store.subscribe(console.log(store.getState()));

