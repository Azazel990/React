import { legacy_createStore as createStore, legacy_createStore} from 'redux'
import reducer from './reducer'

const store =  createStore(reducer)

export default store