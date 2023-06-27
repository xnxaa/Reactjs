import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducers from './authReducers';
import contactReducer from './contactReducer';
import regisFormReducer from './RegisFormSlice';
import { produkReducer } from './ProdukReducers'; 

const rootReducer = combineReducers({
  auth: authReducers,
  contact: contactReducer,
  regisForm: regisFormReducer,
  produk: produkReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
