import React from "react";

const GetTeams = (props) => {


  return (
    <div className=" flex justify-center">
      <div className="overflow-x-auto">
        <table className="table">
          {/* TABLE OF TEAMS */}
          <thead>
            <tr>
              <th>Team</th>
              <th>Manager</th>
              <th>Members</th>
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
                    <div id="team" className="font-bold">
                      Admins
                    </div>
                  </div>
                </div>
              </td>
              <td id="manager">ADMINONE</td>
              <td>
                <ul id="members">
                  <li>member1</li>
                  <li>member2</li>
                  <li>member3</li>
                </ul>
              </td>
              <th id="status">
                <input type="checkbox" className="scale-75 toggle checked:bg-green-500" />
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
  );
};

export default GetTeams;
