export const getElement = () => {
  const dataSTR = localStorage.getItem('assignmentTask');
  if(dataSTR){
    const data = JSON.parse(dataSTR);
  return data;
  }
  else{
    return []
  }
};

const addElement = (newData) => {
  const previousData = getElement()
  previousData.push(newData)

  const convertedData = JSON.stringify(previousData)
  localStorage.setItem('assignmentTask', convertedData)
  
};

export {addElement}
