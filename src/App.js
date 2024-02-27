import './App.css';
import Todos from './Components/todos';
import AddTodo from './Components/addTodo';
import {useSelector} from 'react-redux';

function App() {
  const todos=useSelector(state=>state.todos);

  return (
    <div className="App">
      <Todos/>
      <AddTodo/>

      <button onClick={()=>console.log(todos)}>Show Todos</button>
    </div>
  );
}

export default App;
