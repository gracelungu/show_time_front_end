import axios from 'axios';
import { base_url } from '../constants';
import { GET_PROFILE_ERROR, GET_PROFILE_SUCCESS, GET_PROFILE_STARTED, LOGOUT } from '../actionTypes';

export const getProfile = (username) => async dispatch => {
    dispatch(getProfileStarted());

    try {
        const res = await axios.get(
            `${base_url}/api/user/${username}`,
            null,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        dispatch(getProfileSuccess(res.data.user));
        return res;
    } catch (e) {
        if (e.response) {
            dispatch(getProfileError(e.response.data.message));
            return e.response;
        }
        // Dispatch a connection error message
        return e;
    }

};

export const logout = () => {
    localStorage.setItem('token', null);
    localStorage.setItem('username', null);
    return {
        type: LOGOUT
    }
}

export const getProfileStarted = () => ({
    type: GET_PROFILE_STARTED,
});

export const getProfileSuccess = (user) => ({
    type: GET_PROFILE_SUCCESS,
    payload: user,
});

export const getProfileError = (error) => ({
    type: GET_PROFILE_ERROR,
    payload: error
});

export const updateProfile = ({ picture, username }) => async dispatch => {

    dispatch(updateProfileStarted());

    try {
        const token = await localStorage.getItem('token');

        const res = await axios.put(
            `${base_url}/api/user`,
            {
                username,
                picture
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }
        );

        //Update the username in the localstorage
        localStorage.setItem('username', res.data.user.username);

        dispatch(updateProfileSuccess(res.data.user));
        return res;
    } catch (e) {
        if (e.response) {
            dispatch(updateProfileError(e.response.data.message));
            return e.response;
        }
        // Dispatch a connection error message
        return e;
    }

};

export const updateProfileStarted = () => ({
    type: GET_PROFILE_STARTED,
});

export const updateProfileSuccess = (user) => ({
    type: GET_PROFILE_SUCCESS,
    payload: user,
});

export const updateProfileError = (error) => ({
    type: GET_PROFILE_ERROR,
    payload: error
});
