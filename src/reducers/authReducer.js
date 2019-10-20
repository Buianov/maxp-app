import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../constants/actionTypes';

export const initialState = { userName: '', error: '', isLogged: false };

const authReducer = (state = initialState, { type, username, error }) => {
  switch (type) {
    case LOGIN_FAIL:
      return {
        ...state,
        userName: '',
        error,
        isLogged: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        userName: username,
        error: '',
        isLogged: true,
      };
    case LOGOUT_SUCCESS:
      return { ...state, userName: '', isLogged: false };
    default:
      return state;
  }
};

export default authReducer;
