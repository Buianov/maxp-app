import { LOGIN_INIT, LOGIN_FAIL, LOGIN_SUCCESS } from '../constants/actionTypes';

const check = (login, pass) => {
  if (login === 'Admin' && pass === '12345') {
    return true;
  }
  return false;
};

export const login = ({ login, pass }) => dispatch => {
  dispatch({ type: LOGIN_INIT });

  if (check(login, pass)) {
    dispatch({ type: LOGIN_SUCCESS, username: login });
  } else {
    dispatch({ type: LOGIN_FAIL, error: 'Имя пользователя или пароль введены не верно ' });
  }
};
