import { readStorage, setStorage, removeFromStorage } from './storage';

export const isAuth = () => {
  if (readStorage('isLogged') === true) {
    return true;
  }
  return false;
};

export const setAuth = () => {
  setStorage('isLogged', true);
};

export const unsetAuth = () => {
  removeFromStorage('isLogged');
};
