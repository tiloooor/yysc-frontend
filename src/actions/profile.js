import axios from 'axios';

import {
    GET_PROFILE,
    PROFILE_ERROR, 
    GET_PROFILES, 
    CLEAR_PROFILE
} from './types';

// Return the current user's profile.
export const getCurrentProfile = () => async (dispatch) => {
    try {
        const res = await axios.get('http://localhost:5000/api/profile/me');

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Get all profiles
export const getProfiles = () => async dispatch => {
  dispatch({ type: CLEAR_PROFILE });

  try {
    const res = await axios.get('http://localhost:5000/api/profile');

    dispatch({
      type: GET_PROFILES,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}


// Get all profile by ID
export const getProfileById = userId => async dispatch => {
    try {
      const res = await axios.get(`http://localhost:5000/api/profile/user/${userId}`);
  
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }