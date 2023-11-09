"use client";
import React, { useState, useEffect } from "react";

const GetTeams = (props) => {
  const [teams, setTeams] = useState([]);

  const refreshList = () => {
    props.client.getTeams().then((response) => {
      console.log(response.data);
      setTeams(response.data);
    });
  };

  useEffect(() => {
    refreshList();
  }, []);

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
            {teams?.map((team) => {
              return (
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div id="team" className="font-bold">
                          {team.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td id="manager">{team.manager}</td>
                  <td className="text-center">
                    <button
                      className="btn text-sm"
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                    >
                      {team.members.length}
                    </button>
                    <dialog id="my_modal_2" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">{team.name}</h3>
                        <p className="py-4">{team.manager}</p>
                        {team.members?.map((member) => {
                      return (
                        <ul id="members" className="py-2">
                          <li>{member}</li>
                        </ul>
                      );
                    })}
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </td>
                  <th id="status">
                    <input
                      type="checkbox"
                      className="scale-75 toggle checked:bg-green-500"
                      defaultChecked={team.active ? true : false}
                    />
                  </th>
                  <th>
                    <button className="btn btn-ghost btn-xs">Edit</button>
                  </th>
                  <th>
                    <button className="btn btn-ghost btn-xs">Delete</button>
                  </th>
                </tr>
              );
            })}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default GetTeams;
