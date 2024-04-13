// Import action types
import { ADD_TASK, DELETE_TASK } from './actions';

// Action creators

// Action creator for adding a task
export const addTask = (task) => ({
  type: ADD_TASK, // Action type to indicate adding a task
  payload: task, // Payload containing the task data
});

// Action creator for deleting a task
export const deleteTask = (taskId) => ({
  type: DELETE_TASK, // Action type to indicate deleting a task
  payload: taskId, // Payload containing the task ID
});

