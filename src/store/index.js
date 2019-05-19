import { applyMiddleware, createStore } from 'redux';
import initialState from './initialState';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from '../reducers';

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
