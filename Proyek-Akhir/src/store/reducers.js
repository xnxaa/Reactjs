import { combineReducers } from 'redux';
import authReducer from './authReducers';
import contactReducer from './contactReducer';
import produkReducer from './ProdukReducers';
import cartReducer from './CartReducers';

const rootReducer = combineReducers({
  auth: authReducer,
  contact: contactReducer,
  produk: produkReducer,
  cart: cartReducer,
});

export default rootReducer;
