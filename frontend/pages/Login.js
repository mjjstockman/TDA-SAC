"use client";
import React from "react";
import { useState } from "react";

const Login = (props) => {
  const [disabled, setDisabled] = useState(false);

  const submitHandler = (e) => {
    setDisabled(true);
    e.preventDefault();

    props.client
      .login(e.target.email.value, e.target.password.value)
      .then((response) => {
        console.log(response);
        setDisabled(false);
        props.loggedIn(response.data.token);
      })
      .catch((error) => {
        console.log(error);
        setDisabled(false);
        alert("Login failed");
      });
  };

  return (
    <div>
      <form
        className="space-y-4 flex flex-col"
        onSubmit={(e) => submitHandler(e)}
      >
        <input
          id="email"
          type="text"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs"
          disabled={disabled}
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs"
          disabled={disabled}
        />
        <button className="btn btn-outline btn-primary" disabled={disabled}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
