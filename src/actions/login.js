import axios from 'axios';
import { base_url } from '../constants';
import { EMAIL_LOGIN_ERROR, EMAIL_LOGIN_SUCCESS, EMAIL_LOGIN_STARTED } from '../actionTypes';

export const emailLogin = ({ email, password }) => async dispatch => {
    dispatch(emailLoginStarted());

    try {
        const res = await axios.post(
            `${base_url}/api/auth/login`,
            {
                email,
                password,
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        dispatch(emailLoginhSuccess(res.data.user));
        return res;
    } catch (e) {
        if (e.response) {
            dispatch(emailLoginError(e.response.data.message));
            return e.response;
        }
        // Dispatch a connection error message
        return e;
    }

};

export const emailLoginStarted = () => ({
    type: EMAIL_LOGIN_STARTED,
});

export const emailLoginhSuccess = (user) => ({
    type: EMAIL_LOGIN_SUCCESS,
    payload: user,
});

export const emailLoginError = (error) => ({
    type: EMAIL_LOGIN_ERROR,
    payload: error
});
