
const TodoList = () => {
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
       
        <th >Task Name</th>
        <th >Task Description</th>
        <th >Action</th>
        <th >Timing</th>

      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            
            <div>
              <div className="font-bold text-center ">Task One</div>
              <div className="badge badge-ghost badge-sm text-center">Most Important</div>
            </div>
          </div>
        </td>
        <td>
          Complete NextJs and Typscript
          <br/>
          <span ></span>
        </td>
        <td>Delete/Update</td>
        <th>
          <button className="btn btn-ghost btn-xs text-center">9 am - 10 am</button>
        </th>
      </tr>
    </tbody>
  </table>
</div>
  )
}

export default TodoList