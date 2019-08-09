import {
  ADD_TASK,
  GET_TASKS,
  RESOURCE_ERROR,
  ADD_RESOURCE,
  GET_RESOURCES
} from '../actions/types';

const initialState = {
  tasks: [],
  task: null,
  resources: [],
  resource: null,
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
    case ADD_RESOURCE:
      return {
        ...state,
        resources: payload,
        loading: false
      };
    case GET_RESOURCES:
      return {
        ...state,
        resources: payload,
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
