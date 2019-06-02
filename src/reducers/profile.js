import initialState from '../store/initialState';
import {
    GET_PROFILE_SUCCESS,
    GET_PROFILE_STARTED,
    GET_PROFILE_ERROR,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_STARTED,
    UPDATE_PROFILE_ERROR,
} from '../actionTypes';

const { profile } = initialState;

const profileReducer = (state = profile, { type, payload }) => {

    switch (type) {
        case GET_PROFILE_STARTED:
            return {
                ...state,
                loading: true
            }
        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                user: payload,
                loading: false,
                error: false,
            }
        case GET_PROFILE_ERROR:
            return {
                ...state,
                loading: false,
                error: payload,
            }
        case UPDATE_PROFILE_STARTED:
            return {
                ...state,
                loading: true
            }
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                user: payload,
                loading: false,
                error: false,
            }
        case UPDATE_PROFILE_ERROR:
            return {
                ...state,
                loading: false,
                error: payload,
            }
        default:
            return state;
    }
};

export default profileReducer;
