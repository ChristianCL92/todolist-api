import React, { useState } from 'react'
import addTodo from "../styles/AddTodos.module.css"
const AddTodos = ({addNewTodo}) => {

const[task, setTask] = useState("");
const addTask = () => {
  if (task.trim().length > 0) {
      addNewTodo(task);
      setTask('');
  } 
    
}
  return (
    <>
      <div className={addTodo.addContainer}>
        <input
        className={addTodo.addTaskInput}
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button className={addTodo.addTodoBtn} onClick={addTask}>Add</button>
      </div>
    </>
  );
}

export default AddTodos