import { GET_PROFILE, PROFILE_ERROR } from '../actions/types';

const initialState = {
    profileData: null,
    profiles: [],
    loading: true,
    error: {}
};

export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_PROFILE:
        return {
          ...state,
          profileData: payload,
          loading: false
        };
      case PROFILE_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
      default:
        return state;
    }
  }
  