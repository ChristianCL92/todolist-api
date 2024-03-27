import React from 'react'
import styles from "../styles/ListTodos.module.css"

const ListTodos = ({todos, deleteTodo, handleCheckboxUpdate}) => {
  return (
    <>
      <ul className={styles.listContainer}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              className={styles.todoCheckbox}
              type="checkbox"
              checked={todo.done}
              onChange={() => handleCheckboxUpdate(todo.id)}
            />
            <span className={todo.done ? styles.todoCompleted : ""}>
              {todo.task}
              </span>
            <button
              className={styles.deleteBtn}
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListTodos