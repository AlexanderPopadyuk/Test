import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

export default createStore(rootReducer, applyMiddleware(thunkMiddleware));
