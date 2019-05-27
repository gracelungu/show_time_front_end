import initialState from '../store/initialState';
import {
    TOGGLE_NAV,
    EMAIL_AUTH_SUCCESS,
    EMAIL_AUTH_STARTED,
    EMAIL_AUTH_ERROR,
} from '../actionTypes';


export const reducer = (state = initialState, { type, payload }) => {

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
