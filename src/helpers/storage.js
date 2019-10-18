export const readStorage = (key) => JSON.parse(localStorage.getItem(key));

export const setStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const removeFromStorage = (key) => {
  localStorage.removeItem(key);
};
