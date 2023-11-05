import React from "react";

const Admin = () => {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-20">
      Admin Page
      <div id="addUser">
        <form className="flex gap-4 items-center ">
          <input
            type="text"
            placeholder="Email"
            className="text-center input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Password"
            className="text-center input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Role"
            className="text-center input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Team"
            className="text-center input input-bordered w-full max-w-xs"
          />
          <button className="btn btn-ghost btn-xs">Add</button>
        </form>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Email</th>
                <th>Password</th>
                <th>Role</th>
                <th>Team</th>
                <th>Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">test@test.com</div>
                    </div>
                  </div>
                </td>
                <td>password</td>
                <td>Admin</td>
                <td>General</td>
                <th>
                  <input type="checkbox" className="scale-75 toggle"/>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">Edit</button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">Delete</button>
                </th>
              </tr>
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </main>
  );
};

export default Admin;
