import axios from 'axios';

import { ADD_TASK, GET_TASKS, RESOURCE_ERROR, ADD_RESOURCE, GET_RESOURCES } from './types';

// Add Resource
export const addResource = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

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
