import axios from 'axios';
import { base_url } from '../constants';
import { TOGGLE_NAV, EMAIL_AUTH_ERROR, EMAIL_AUTH_SUCCESS, EMAIL_AUTH_STARTED } from '../actionTypes';

export const emailAuth = ({ username, email, password }) => async dispatch => {
    dispatch(emailAuthStarted());

    try {
        const res = await axios.post(
            `${base_url}/api/auth/signup`,
            {
                username,
                email,
                password,
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        dispatch(emailAuthSuccess(res.data.user));
        return res;
    } catch (e) {
        if (e.response) {
            dispatch(emailAuthError(e.response.data.message));
            return e.response;
        }
        // Dispatch a connection error message
        return e;
    }

};

export const emailAuthStarted = () => ({
    type: EMAIL_AUTH_STARTED,
});

export const emailAuthSuccess = (user) => ({
    type: EMAIL_AUTH_SUCCESS,
    payload: user,
});

export const emailAuthError = (error) => ({
    type: EMAIL_AUTH_ERROR,
    payload: error
});

