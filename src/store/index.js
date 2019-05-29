import { applyMiddleware, createStore, combineReducers } from 'redux';
import initialState from './initialState';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer, authReducer } from '../reducers';

const store = createStore(
    combineReducers({ reducer, authReducer }),
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
