import { LOGIN_INIT, LOGIN_FAIL, LOGIN_SUCCESS } from '../constants/actionTypes';

const initialState = { userName: '' };

const authReducer = (state = initialState, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default authReducer;
