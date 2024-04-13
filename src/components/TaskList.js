import React from 'react';
import TaskItem from './TaskItem'; // Import TaskItem component
import './TaskList.css';

// TaskList component receives tasks array and deleteTask function as props
const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul>
      {/* Map through tasks array to render each task */}
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} /> // Pass task object and deleteTask function to TaskItem component
      ))}
    </ul>
  );
};

export default TaskList;

