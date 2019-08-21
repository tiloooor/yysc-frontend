import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import profile from './profile';
import post from './post';
import resource from './resource';
import message from './message';

export default combineReducers({
    auth,
    profile, 
    post, 
    resource,
    message,
    user
});