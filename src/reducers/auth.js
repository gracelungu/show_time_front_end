import initialState from '../store/initialState';
import {
    EMAIL_AUTH_SUCCESS,
    EMAIL_AUTH_STARTED,
    EMAIL_AUTH_ERROR,
    EMAIL_LOGIN_SUCCESS,
    EMAIL_LOGIN_STARTED,
    EMAIL_LOGIN_ERROR,
} from '../actionTypes';

const { auth } = initialState;

const authReducer = (state = auth, { type, payload }) => {

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
        case EMAIL_LOGIN_STARTED:
            return {
                ...state,
                loading: true
            }
        case EMAIL_LOGIN_SUCCESS:
            return {
                ...state,
                user: payload,
                loading: false,
                error: false,
                loggedIn: true,
            }
        case EMAIL_LOGIN_ERROR:
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
