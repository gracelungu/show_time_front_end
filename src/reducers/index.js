import { combineReducers } from 'redux';
import initialState from '../store/initialState';
import {
    TOGGLE_NAV,
} from '../actionTypes';

import auth from './auth';

const { index: global } = initialState;

const index = (state = global, { type, payload }) => {

    switch (type) {
        case TOGGLE_NAV:
            if (state.navToggle) {
                return {
                    ...state,
                    navToggle: false
                }
            }
            return {
                ...state,
                navToggle: true
            };
        default:
            return state;
    }
};

const reducers = combineReducers({ index, auth });

export default reducers;
