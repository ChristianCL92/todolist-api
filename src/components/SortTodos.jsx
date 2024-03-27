import React from 'react'
import styles from "../styles/sortTodos.module.css"

const SortTodos = ({sortTodos}) => {
  return (
    <>
      <div>
        <button
          className={styles.sortBtn}
          onClick={sortTodos}>
          Sort Alphabetically
        </button>
      </div>
    </>
  );
};

export default SortTodos