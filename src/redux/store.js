import { createStore, applyMiddleware } from 'redux'; // Import createStore and applyMiddleware from Redux
import rootReducer from './reducers'; // Import root reducer
import thunk from 'redux-thunk'; // Import Redux Thunk middleware

// Create store with root reducer and apply middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store; // Export the store
