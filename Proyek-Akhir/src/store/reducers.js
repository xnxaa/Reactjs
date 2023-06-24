import { combineReducers } from 'redux';
import authReducer from './authReducers';
import contactReducer from './contactReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  contact: contactReducer,
});

export default rootReducer;
