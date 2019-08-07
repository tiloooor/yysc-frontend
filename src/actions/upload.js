import axios from 'axios';

import { UPLOAD_RESOURCE, UPLOAD_ERROR } from './types';

// Upload resource
export const uploadResource = (formData) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    console.log("in here..");
  
    try {
      const res = await axios.post(
        'http://localhost:5000/api/upload',
        formData,
        config
      );
      console.log('res: ', res);
  
      dispatch({
        type: UPLOAD_RESOURCE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: UPLOAD_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };