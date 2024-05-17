export const getFromLocalStorage = (item) => {
  return JSON.parse(localStorage.getItem(item));
};

export const setToLocalStorage = (item, value) => {
  return localStorage.setItem(item, JSON.stringify(value));
};
