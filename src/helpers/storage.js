export const readStorage = key => {
  return localStorage.getItem(key);
};

export const setStorage = (key, value) => {
  localStorage.setItem(key, value);
};
