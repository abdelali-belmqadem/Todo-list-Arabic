import { createContext, useContext, useState } from "react";



 const TodoContext = createContext([]);




export const TodoProvider = ({children}) => {

  const [tasks, setTasks] = useState([]);
  const [idTasktoDellet, setIdTasktoDellet] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [mode, setMode] = useState("all");
  const [aresure, setAresure] = useState(false);



 function handleChange(ev) {
    setMode(ev);
  }


  return (
    <TodoContext.Provider
      value={{
        tasks,
        mode,
        setTaskToEdit,
        setTasks,
        taskToEdit,
        aresure,
        setAresure,
        idTasktoDellet,
        setIdTasktoDellet,
        handleChange,
      }}
    >
      {children}
    </TodoContext.Provider>
  );

};


export const useTodoContext = () => {return useContext(TodoContext)};

export function saveToLocalStorage(tasks) {
  localStorage.setItem("allTaskTodo", JSON.stringify(tasks));
}
