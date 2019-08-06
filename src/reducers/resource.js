import { ADD_TASK, GET_TASKS, RESOURCE_ERROR } from '../actions/types';

const initialState = {
  tasks: [],
  task: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        loading: false
      };
    case GET_TASKS:
      return {
        ...state,
        tasks: payload,
        loading: false
      };
    case RESOURCE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
