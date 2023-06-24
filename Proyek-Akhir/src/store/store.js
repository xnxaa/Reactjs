import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from './authReducers';
import contactReducer from './contactReducer';
import regisFormReducer from './RegisFormSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  contact: contactReducer,
  regisForm: regisFormReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
  