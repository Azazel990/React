import store from "./store";

store.dispatch({
    type : 'bugAdded',
    payload : {
        description : 'Bug 1',
    }
})
store.dispatch({
    type : 'bugAdded',
    payload : {
        description : 'Bug 2',
    }
})


store.dispatch({
    type : 'bugResolved',
    payload : {
        id : 1
    }
})
// store.dispatch({
//     type : 'bugRemoved',
//     payload : {
//         id : 1
//     }
// })


console.log(store.getState())