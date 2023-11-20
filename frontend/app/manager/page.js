"use client";
import Register from "@/components/Register";
import React, { useState } from "react";
import { ApiClient } from "@/apiClient";
import GetTeams from "@/components/GetTeams";
import GetUsers from "@/components/GetUsers";

const page = () => {
const [token, changeToken] = useState(window.localStorage.getItem("token"));
const client = new ApiClient(
  () => token,
  () => logout()
);

const login = (token) => {
  window.localStorage.setItem("token", token);
  changeToken(token);
};
const logout = () => {
  window.localStorage.removeItem("token");
  changeToken(undefined);
};

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-20">
      Manager Page
      <div>

      </div>
    </main>
  );
};

export default page;
