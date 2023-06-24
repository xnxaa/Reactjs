//halaman home bagian contact
export const UPDATE_CONTACT_INFO = 'UPDATE_CONTACT_INFO';


export const updateContactInfo = (contactInfo) => ({
  type: UPDATE_CONTACT_INFO,
  payload: contactInfo,
});

//halaman login
export const login = () => {
  return (dispatch) => {
    dispatch(loginSuccess());
  };
};

export const loginSuccess = () => {
  return {
    type: 'LOGIN_SUCCESS',
  };
};

export const redirectToLogin = () => {
  return {
    type: 'REDIRECT_TO_LOGIN',
  };
};

//sinkronkan lagi dengan punya yang lain
export const logout = (navigate) => {
  // Menghapus kredensial dari penyimpanan lokal
  localStorage.removeItem('credential'); //login google
  localStorage.removeItem('credentials'); //admin

  navigate('/');
};