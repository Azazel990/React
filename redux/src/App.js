import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { decrement, increment } from './functional/actions';

function App() {

  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  
  console.log(isLogged)
  return (
    <div>
      <h1>
        {counter}
      </h1>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
    </div>
  )
}

export default App;
