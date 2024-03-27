import React, { useEffect, useState } from 'react'
import ListTodos from './ListTodos.jsx';
import AddTodos from './AddTodos.jsx';
import { getData } from '../services/todosService.js';
import SortTodos from './SortTodos.jsx';


const TodosApp = () => {
const[todos, setTodos] = useState(JSON.parse(localStorage.getItem("todoKey") || "[]"))

useEffect(() => {
  localStorage.setItem("todoKey", JSON.stringify(todos))
},[todos])

useEffect(() => {
if (todos.length > 0) return;

const displayData = async () => {
    try {
      const data = await getData();
      setTodos(data);
    } catch (error) {
      throw new Error(error);
    }
  };
  displayData();
});  

const deleteTodo = (id) => {
setTodos(todos.filter(item => item.id !== id))
} 

const addNewTodo = (task) => {
  const idNewTodos = Date.now() 
  setTodos([...todos, {id: idNewTodos, task, done: false} ])
} 

 const handleCheckboxUpdate = (id) => {
  const taskChecked = todos.map(todo => {
    if(todo.id === id) {
      return{...todo, done: !todo.done};
    }

    return todo
  })
  setTodos(taskChecked);
} 

const sortTodos = () => {
  const sortTodosAlphabetically = [...todos].sort((a,b) => a.task.localeCompare(b.task));
  setTodos(sortTodosAlphabetically)
}
  return (
    <>
      <div className='wrapper'>
        <div className="container">
          <h1>Todo List</h1>
          <AddTodos addNewTodo={addNewTodo} />
          < SortTodos sortTodos={sortTodos} />
          <ListTodos
            todos={todos}
            deleteTodo={deleteTodo}
            handleCheckboxUpdate={handleCheckboxUpdate}
          />
        </div>
      </div>
    </>
  );
}

export default TodosApp;