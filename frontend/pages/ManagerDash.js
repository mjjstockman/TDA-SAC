"use client"
import CalendarUI from "@/components/Calendar";
import DaysRemaining from "@/components/DaysRemaining";
import Navigation from "@/components/Navigation";
import Table from "@/components/Table";
import React, { useState } from "react";
import { ApiClient } from "@/apiClient";
import ManagerRequests from "@/components/ManagerRequests";

const ManagerDash = () => {

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
    <div className="text-secondary">
      <div  className='fixed top-0 right-0 p-8 z-10'>
        <Navigation client={client}/>
      </div>
      <div className="text-2xl flex justify-between z-0">

      </div>
      <div className="px-20 py-10 z-0">
        <ManagerRequests client={client}/>
      </div>
      <div className="text-2xl">
        Upcoming . . .
        <div className="z-0">
          <CalendarUI />
        </div>
      </div>
    </div>
  );
};

export default ManagerDash;
