import React from 'react';
import './TaskItem.css';

// TaskItem component receives task object and deleteTask function as props
const TaskItem = ({ task, deleteTask }) => {
  return (
    <li>
      {/* Display task name */}
      {task.name}

      {/* Delete button with onClick event handler */}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;

