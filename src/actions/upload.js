import axios from 'axios';

import { UPLOAD_RESOURCE, UPLOAD_ERROR } from './types';

// Upload resource
export const uploadResource = (files) => async (dispatch) => {
  var data = new FormData();
  for (var i = 0; i < files.length; i++) {
    data.append('file', files[i]);
    data.append('filename', files[i].name);
  }

  try {
    const res = await axios.post('http://localhost:5000/api/upload', data);

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
