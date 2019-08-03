import axios from 'axios';

import { ADD_TASK, RESOURCE_ERROR } from './types';

// Add Post
export const addTask = (formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    try {
        const res = await axios.post('http://localhost:5000/api/resource/task', formData, config);
        console.log("res: ", res);

        dispatch({
            type: ADD_TASK,
            payload: res.data 
        });
    } catch(err) {
        dispatch({
            type: RESOURCE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}
