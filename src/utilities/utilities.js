export const getElement = (taskName) => {
  const dataSTR = localStorage.getItem(taskName);
  const data = JSON.stringify(dataSTR);
  return data
};


