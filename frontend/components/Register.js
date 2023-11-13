"use client";
import React, { useState, useEffect } from "react";

const Register = (props) => {
  const [manager, setManager] = useState();
  const [member, setMember] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    props.client
      .register(
        e.target.email.value,
        e.target.password.value,
        e.target.role.value,
        e.target.team.value
      )
      .then(() => {
        refreshList();
      });
    if (e.target.role.value === "manager") {
      setManager(e.target.email.value);
    } else {
      setMember(e.target.email.value);
    }
    props.client.createTeam(e.target.team.value, manager, member).then(() => {
      props.refreshList();
    });
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
        <input
          type="text"
          id="role"
          placeholder="Role"
          className="text-center input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          id="team"
          placeholder="Team"
          className="text-center input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-ghost btn-xs">Add</button>
      </form>
    </div>
  );
};

export default Register;
