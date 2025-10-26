import React from "react";
import { getElement, removeElement } from "./utilities/utilities";

const TableRow = ({data, no, setAllData}) => {
  const handleDeleteTask = (e)=>{
    const deletData = e.target.parentNode.parentNode.children[1].innerText;
    removeElement(deletData)

    const storedArray = getElement()
    setAllData(storedArray)
  }
  return (
    <tr>
      <th>{no + 1}</th>
      <td>
        {data}
      </td>

      <td>
        <button onClick={handleDeleteTask} className="btn bg-gray-300 min-w-30 ">Delete Task</button>
      </td>
    </tr>
  );
};

export default TableRow;
