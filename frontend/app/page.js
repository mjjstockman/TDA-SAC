"use client";
import Login from "@/pages/Login";
import { ApiClient } from "@/apiClient";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [token, changeToken] = useState(undefined);

  const client = new ApiClient(
    () => localStorage.getItem("token"),
    () => {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
  );
  const login = (token) => {
    localStorage.setItem("token", token);
    changeToken(token);
  };
  const logout = () => {
    localStorage.removeItem("token");
    changeToken(undefined);
  };
  return (
    <main className="flex bg-white min-h-screen items-center my-auto justify-center scale-150">
      <Login loggedIn={(token) => login(token)} client={client} />
    </main>
  );
}
