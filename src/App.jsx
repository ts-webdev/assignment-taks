import { useEffect, useState } from "react";
import "./App.css";
import { addElement, getElement } from "./utilities/utilities";

function App() {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    const storedData = getElement();
    setAllData(storedData);
  }, []);

  console.log(allData);
  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = e.target.task.value;
    addElement(newTask);
    e.target.task.value = "";
  };
  return (
    <>
      <header className="flex justify-center py-5 bg-base-300">
        <h1 className="text-2xl font-bold">Assignment Tasks</h1>
      </header>
      <main className="container mx-auto">
        {/* Monitor */}
        <div className="flex justify-between my-7 bg-gray-600 rounded-2xl text-white p-5 items-center">
          <p>Total Tasks: 3</p>
          <p className="text-2xl font-bold">100% Incomplete</p>
          <p>Complete Task : 0</p>
        </div>
        {/* Table */}
        <div className="overflow-x-auto bg-base-200 mt-10 p-5 rounded-2xl">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Task Name</th>

                <th>Complete</th>
              </tr>
            </thead>
            <tbody>
              {
                
              }
            </tbody>
          </table>
        </div>
        {/* Add Task */}
        <div className="bg-gray-200 mt-10 p-5 rounded-2xl w-1/2 mx-auto">
          <h1 className="text-center text-2xl font-semibold ">Add a Task</h1>
          <fieldset className="fieldset">
            <form onSubmit={handleAddTask}>
              <label className="label">Task Details:</label>
              <input
                type="text"
                name="task"
                className="input w-full mt-2"
                placeholder="Add New Task"
              />
              <button className="btn btn-neutral mt-4">Add Task</button>
            </form>
          </fieldset>
        </div>
      </main>
    </>
  );
}

export default App;
