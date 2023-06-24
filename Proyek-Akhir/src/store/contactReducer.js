import { UPDATE_CONTACT_INFO } from './actions';

const initialState = {
  email: 'https://www.google.com/intl/id/gmail/about/',
  instagram: 'https://www.instagram.com/instagram/',
  phone: '+1234567890',
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CONTACT_INFO:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default contactReducer;
