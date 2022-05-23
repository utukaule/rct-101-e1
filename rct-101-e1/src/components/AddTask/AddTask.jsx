import React, { useState } from "react";
import Tasks from "../Tasks/Tasks";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [query, setQuery] = useState("")
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    const {value } = e.target;
    setQuery(value);
  }
  const handleAdd = () =>{
    const payload = {
      title : query,
      status : false,
    }
    let newTasks = [...tasks, payload];
    setTasks(newTasks)
  }
  

  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" placeholder="Add Task..." value={query} onChange={handleChange} type="text" />
      <button data-cy="add-task-button" onClick={handleAdd} >+</button>
      <div>
        {tasks.map((item)=>{
          return <Tasks {...item}/>
        })}
      </div>
    </div>
  );
};

export default AddTask;

