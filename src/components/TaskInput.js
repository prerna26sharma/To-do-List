import React, { useState } from 'react';
import './TaskInput.css'; // Import CSS file for styling

const TaskInput = ({ addTask }) => {
  // State to manage the input value
  const [taskName, setTaskName] = useState('');

  // Function to handle input change
  const handleInputChange = (event) => {
    // Update the taskName state with the input value
    setTaskName(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (taskName.trim() !== '') { // Check if input value is not empty
      addTask(taskName); // Call the addTask function passed from parent component
      setTaskName(''); // Clear the input field by resetting taskName state
    }
  };

  return (
    <form onSubmit={handleSubmit}> {/* Form element with onSubmit event handler */}
      <input
        type="text"
        placeholder="Enter task"
        value={taskName} // Bind input value to taskName state
        onChange={handleInputChange} // Call handleInputChange function on input change
      />
      <button type="submit">Add Task</button> {/* Button to submit the form */}
    </form>
  );
};

export default TaskInput;
