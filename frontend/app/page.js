"use client";
import Login from "@/pages/Login";
import { ApiClient } from "@/apiClient";

export default function Home() {
  const client = new ApiClient(
    () => localStorage.getItem("token"),
    () => {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
  );
  return (
    <main className="flex bg-white min-h-screen flex-col items-center justify-between p-24">
      <Login loggedIn={(token) => login(token)} client={client} />
    </main>
  );
}
