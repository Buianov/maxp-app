import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../constants/actionTypes';

const initialState = { userName: '', error: '' };

const authReducer = (state = initialState, { type, login, error }) => {
  switch (type) {
    case LOGIN_FAIL:
      return { ...state, userName: '', error };
    case LOGIN_SUCCESS:
      return { ...state, userName: login, error: '' };
    case LOGOUT_SUCCESS:
      return { ...state, userName: '' };
    default:
      return state;
  }
};

export default authReducer;
