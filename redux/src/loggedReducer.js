
const loggedReducer = (state = false ,  action) => {
    switch(action.type){
        case 'login'  : 
        return !state
    }
    return state
}

export default loggedReducer;