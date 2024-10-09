export const persistData = (symbol, data) => {
  localStorage.setItem(symbol, JSON.stringify(data));
  console.log(symbol);
};
export const getDataFromStorage = (symbol) => {
  const data = localStorage.getItem(symbol);
  return data ? JSON.parse(data) : [];
};
