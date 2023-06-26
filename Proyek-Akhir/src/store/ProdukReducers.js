const initialState = {
  data: [],
  products: null,
  error: null,
  cart: [],
  orders: []
};

export const produkReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
      };

    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default produkReducer;

