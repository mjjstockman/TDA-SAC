"use client";
import React, { useState, useEffect } from "react";

const Register = (props) => {
  const [selectedRole, setSelectedRole] = useState(null);

  const existingTeams = async (id) => {
    return await props.client.existingTeams(id);
  }


  const handleRoleClick = async (roleName) => {
    setSelectedRole(roleName);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
  
    const email = e.target.email.value;
    const password = e.target.password.value;
    const team = e.target.team.value;
  
    const role = selectedRole;

    const teamExists = await existingTeams(team.id);
  
    if (role !== "Manager" && team !== teamExists) {
      props.client.register(email, password, role, team);

      const members = e.target.email.value
      props.client.updateTeam(members)
    } else {
      
      const manager = e.target.email.value

      props.client.register(email, password, role, team);
      props.client.registerTeam(team, manager);
    }
  
    e.target.reset();
  };

  const roles = [
    "Admin",
    "Director",
    "Manager",
    "Staff",
    "Instructor",
    "Course Manager",
    "Marketing",
    "Admissions",
  ];

  const refresh = () => {
    window.location.reload();
  };

  return (
    <div id="addUser">
      <form className="flex gap-4 items-center" onSubmit={submitHandler}>
        <input
          type="text"
          id="email"
          placeholder="Email"
          className="text-center input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          id="password"
          placeholder="Password"
          className="text-center input input-bordered w-full max-w-xs"
        />
        <div className="dropdown max-w-xs">
          <label tabIndex={0} className="btn m-1">
            {selectedRole ? selectedRole : "Role"}
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40"
          >
            {roles?.map((role) => (
              <li key={role}>
                <a onClick={() => handleRoleClick(role)}>{role}</a>
              </li>
            ))}
          </ul>
        </div>
        <input
          type="text"
          id="team"
          placeholder="Team Name"
          className="text-center input input-bordered w-full max-w-xs"
        />
        {/* <div className="dropdown max-w-xs">
          <label tabIndex={0} className="btn m-1">
            {selectedTeam ? selectedTeam : "Team"}
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {teams?.map((team) => (
              <li key={team.name}>
                <a onClick={() => handleTeamClick(team.name)}>{team.name}</a>
              </li>
            ))}
          </ul>
        </div> */}
        <button className="btn btn-ghost btn-xs" onClick={refresh}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Register;
