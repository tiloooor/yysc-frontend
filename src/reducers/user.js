import { GET_USERS, GET_LOG_BY_ID, USER_ERROR } from '../actions/types';

const initialState = {
  user: '',
  users: [],
  loading: true,
  logs: [],
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false
      };
    case GET_LOG_BY_ID:
      return {
        ...state,
        logs: payload,
        loading: false
      };
    case USER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
