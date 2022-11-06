import React from 'react'
import ReactDOM  from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import { legacy_createStore as createStore} from 'redux'
import loggedReducer from './loggedReducer'
import counterReducer from './counterReducer'
import { combineReducers } from 'redux'
import { increment } from './functional/actions'
import { decrement } from './functional/actions'

   const allReducers = combineReducers({
        counter : counterReducer,
        isLogged : loggedReducer
    })

const store = createStore(allReducers)

console.log(store)

ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>,
document.getElementById('root')
);

