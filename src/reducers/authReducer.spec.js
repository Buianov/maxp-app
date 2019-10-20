import authReducer, { initialState } from './authReducer';
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../constants/actionTypes';

describe('auth reducer', () => {
  it('LOGIN_SUCCESS', () => {
    const action = { type: LOGIN_SUCCESS, username: 'somename' };

    expect(authReducer(initialState, action)).toEqual({
      ...initialState,
      error: '',
      userName: 'somename',
      isLogged: true,
    });
  });

  it('LOGIN_FAIL', () => {
    const action = { type: LOGIN_FAIL, error: 'error' };
    expect(authReducer(initialState, action)).toEqual({
      ...initialState,
      error: 'error',
      isLogged: false,
      userName: '',
    });
  });

  it('LOGOUT_SUCCESS', () => {
    const action = { type: LOGOUT_SUCCESS };

    expect(authReducer(initialState, action)).toEqual({
      ...initialState,
      error: '',
      isLogged: false,
      userName: '',
    });
  });
});
