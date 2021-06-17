import { createStore, applyMiddleware } from 'redux';
import { mainReducer } from './reducer.js'

const store = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;