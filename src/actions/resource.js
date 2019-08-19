import axios from 'axios';

import {
  ADD_TASK,
  GET_TASKS,
  RESOURCE_ERROR,
  ADD_RESOURCE,
  GET_RESOURCES,
  GET_RESOURCE,
  UPDATE_RESOURCE_LIKES,
  GET_LIKED_RESOURCES
} from './types';

// Add Resource
export const addResource = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  console.log(formData);

  try {
    const res = await axios.post(
      'http://localhost:5000/api/resource',
      formData,
      config
    );
    console.log('res: ', res);

    dispatch({
      type: ADD_RESOURCE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: RESOURCE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get All Resources
export const getResources = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/api/resource');
    console.log('res: ', res);

    dispatch({
      type: GET_RESOURCES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: RESOURCE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get Resource by ID
export const getResource = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/resource/${id}`);
    console.log('res: ', res);

    dispatch({
      type: GET_RESOURCE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: RESOURCE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add Task
export const addTask = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(
      'http://localhost:5000/api/resource/task',
      formData,
      config
    );
    console.log('res: ', res);

    dispatch({
      type: ADD_TASK,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: RESOURCE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get tasks
export const getTasks = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/api/resource/task');

    dispatch({
      type: GET_TASKS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: RESOURCE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add Like
export const addLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(
      `http://localhost:5000/api/resource/like/${id}`
    );

    dispatch({
      type: UPDATE_RESOURCE_LIKES,
      payload: { id, likes: res.data }
    });
  } catch (err) {
    dispatch({
      type: RESOURCE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Retrieve Liked Resources
export const getLikedResources = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/resource/user/${id}`
    );

      console.log(res.data);

    dispatch({
      type: GET_LIKED_RESOURCES,
      payload: res.data 
    });
  } catch (err) {
    dispatch({
      type: RESOURCE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
