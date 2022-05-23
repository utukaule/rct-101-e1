import React from "react";
import Counter from "../Counter/Counter";
import styles from "./tasks.module.css";

const Tasks = ({title,status}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {`${title}`} {<Counter/>} 
        
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
