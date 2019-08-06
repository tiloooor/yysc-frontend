import { combineReducers } from 'redux';
import auth from './auth';
import profile from './profile';
import post from './post';
import resource from './resource';

export default combineReducers({
    auth,
    profile, 
    post, 
    resource
});