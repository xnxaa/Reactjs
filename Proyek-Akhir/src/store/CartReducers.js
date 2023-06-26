    // store/CartReducer.js
    const initialState = {
        cart: [],
        history: [],
      };
      
      const cartReducer = (state = initialState, action) => {
        switch (action.type) {
          case 'ADD_TO_CART':
            return {
              ...state,
              cart: [...state.cart, action.payload]
            };
          case 'REMOVE_FROM_CART':
            return {
              ...state,
              cart: state.cart.filter(item => item.id !== action.payload)
            };
          case 'CLEAR_CART':
            return {
              ...state,
              cart: []
            };
          case 'PLACE_ORDER':
          const order = action.payload;
          return {
            ...state,
            history: [...state.history, order],
          };

        default:
          return state;
      }
    };
      export default cartReducer;
      