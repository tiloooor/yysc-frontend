import axios from 'axios';
import {
  ADD_MESSAGE,
  ADD_CHANNEL,
  GET_CHANNELS,
  MESSAGE_ERROR,
  GET_CONVERSATION
} from './types';

// Add a conversation channel.
export const addChannel = (recipient) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.post(
      'http://localhost:5000/api/message/channel',
      recipient,
      config
    );

    dispatch({
      type: ADD_CHANNEL,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get all channels.
export const getChannels = (recipient) => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/api/message/channels');

    dispatch({
      type: GET_CHANNELS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get all conversations.
export const sendMessage = (messageData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
 
    console.log("About to send message: ", messageData);

    const res = await axios.post(
      'http://localhost:5000/api/message/conversation',
      messageData,
      config
    );

    dispatch({
      type: ADD_MESSAGE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get all conversations.
export const getConversation = (channel) => async (dispatch) => {
  try {
    console.log("in this:", channel);

    const res = await axios.get(
      'http://localhost:5000/api/message/conversation',
      {
        params: {
          channel: channel
        }
      }
    );

    console.log("data: ", res.data);

    dispatch({
      type: GET_CONVERSATION,
      payload: { messages: res.data, channel: channel }
    });
  } catch (err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
