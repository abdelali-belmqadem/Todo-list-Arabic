import './App.css';
import TodoList from './component/todo-list';
import { TodoProvider } from './context/todocontext';

function App() {
  return (
<>
 <TodoProvider >
<div style={{direction:"rtl"}}>
      <TodoList />

</div>

</TodoProvider>
</>
  );
}

export default App;
