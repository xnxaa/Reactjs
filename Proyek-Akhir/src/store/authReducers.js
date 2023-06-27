  const initialState = {
    isAuthenticated: false,
  };

  const authReducers = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
        };
      default:
        return state;
    }
  };

  export default authReducers;