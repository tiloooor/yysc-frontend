import {
  ADD_MESSAGE,
  ADD_CHANNEL,
  GET_CHANNELS,
  GET_CONVERSATION,
  MESSAGE_ERROR
} from '../actions/types';

const initialState = {
  messages: [],
  channel: {},
  channels: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, payload],
        loading: false
      };
    case GET_CHANNELS:
      return {
        ...state,
        channels: payload,
        loading: false
      };
    case GET_CONVERSATION:
      return {
        ...state,
        channel: payload.channel,
        messages: payload.messages,
        loading: false
      };
    case ADD_CHANNEL:
      return {
        ...state,
        channels: payload,
        loading: false
      };
    case MESSAGE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
