import { readStorage, setStorage } from './storage';

export const isAuth = () => {
  if (readStorage('isLogged') === true) {
    return true;
  }
  return false;
};

export const setAuth = () => {
  setStorage('isLogged', true);
};
