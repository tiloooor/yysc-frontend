import axios from 'axios';
import { LOG_EVENT, LOG_ERROR, GET_LOG_BY_ID } from './types';

// Log an event
export const logEvent = (category, action, payload) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const logData = {
    category: category, 
    action: action,
    payload: payload
  }

  try {
    const res = await axios.post(
      'http://localhost:5000/api/log/page-view',
      logData,
      config
    );

    dispatch({
      type: LOG_EVENT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: LOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Log an event
export const getLogs = () => async (dispatch) => {
  try {
    const res = await axios.get(
      'http://localhost:5000/api/log'
    );

    console.log(res);

    dispatch({
      type: LOG_EVENT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: LOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Log an event
export const getLogById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/log/${id}`
    );

    dispatch({
      type: GET_LOG_BY_ID,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: LOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};