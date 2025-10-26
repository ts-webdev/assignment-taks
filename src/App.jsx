import "./App.css";
import { getElement } from "./utilities/utilities";

function App() {
const handleAddTask = (e) =>{
  e.preventDefault()
  const data = getElement('task')
  console.log(data)
}
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
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Hello</td>

                <td>
                  <button className="btn bg-gray-300 min-w-30">
                    Delete Task
                  </button>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>
                  Hart Hagerty Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Quia, sed! Hart Hagerty Lorem ipsum dolor,
                  sit amet consectetur adipisicing elit. Quia, sed!Hart Hagerty
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quia, sed!Hart Hagerty Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Quia, sed!Hart Hagerty Lorem ipsum dolor,
                  sit amet consectetur adipisicing elit. Quia, sed!Hart Hagerty
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quia, sed!Hart Hagerty Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Quia, sed!Hart Hagerty Lorem ipsum dolor,
                  sit amet consectetur adipisicing elit. Quia, sed!Hart Hagerty
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quia, sed!
                </td>

                <td>
                  <button className="btn bg-gray-300 min-w-30 ">
                    Delete Task
                  </button>
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>

                <td>
                  <button className="btn bg-gray-300 min-w-30">
                    Delete Task
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Add Task */}
        <form className="bg-gray-200 mt-10 p-5 rounded-2xl w-1/2 mx-auto">
          <h1 className="text-center text-2xl font-semibold ">Add a Task</h1>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="text" className="input w-full" placeholder="Email" />
            <button onClick={handleAddTask} className="btn btn-neutral mt-4">Add Task</button>
          </fieldset>
        </form>
      </main>
    </>
  );
}

export default App;
