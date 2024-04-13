// Import action types
import { ADD_TASK, DELETE_TASK } from './actions';

// Initial state
const initialState = {
  tasks: [], // Array to hold tasks
};

// Reducer function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      // Add a new task to the tasks array
      return {
        ...state, // Copy current state
        tasks: [...state.tasks, action.payload], // Add new task to tasks array
      };
    case DELETE_TASK:
      // Remove a task from the tasks array
      return {
        ...state, // Copy current state
        tasks: state.tasks.filter(task => task.id !== action.payload), // Filter out the task with the specified ID
      };
    default:
      // Return current state for unrecognized actions
      return state;
  }
};

export default rootReducer;
