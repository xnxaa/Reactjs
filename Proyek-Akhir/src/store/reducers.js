  import { combineReducers } from 'redux';
  import authReducers from './authReducers';
  import contactReducer from './contactReducer';
  import produkReducer from './ProdukReducers';
  import cartReducer from './CartReducers';

  const rootReducer = combineReducers({
    auth: authReducers,
    contact: contactReducer,
    produk: produkReducer,
    cart: cartReducer,
  });

  export default rootReducer;
