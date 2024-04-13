// // App.js
import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  // State to manage tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
    };
    setTasks([...tasks, newTask]);
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
