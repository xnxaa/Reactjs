import { combineReducers } from 'redux';

const initialState = {
    posts: [],
  };
  
  export const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CREATE_POST':
        return {
          ...state,
          posts: [...state.posts, action.payload],
        };
      default:
        return state;
    }
  };

  const rootReducer = combineReducers({
    post: postReducer,
});

export default rootReducer;
  