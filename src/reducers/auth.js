import initialState from '../store/initialState';
import {
    EMAIL_AUTH_SUCCESS,
    EMAIL_AUTH_STARTED,
    EMAIL_AUTH_ERROR,
} from '../actionTypes';


const authReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case EMAIL_AUTH_STARTED:
            return {
                ...state,
                loading: true
            }
        case EMAIL_AUTH_SUCCESS:
            return {
                ...state,
                user: payload,
                loading: false,
                error: false,
                loggedIn: true,
            }
        case EMAIL_AUTH_ERROR:
            return {
                ...state,
                loading: false,
                error: payload,
                loggedIn: false,
            }
        default:
            return state;
    }
};

export default authReducer;
