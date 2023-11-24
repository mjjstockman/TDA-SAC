"use client"
import CalendarUI from "@/components/Calendar";
import Navigation from "@/components/Navigation";
import React, { useState } from "react";
import { ApiClient } from "@/apiClient";
import CreateCourse from "@/components/CreateCourse";

const CourseManagerDash = () => {

  const [token, changeToken] = useState(localStorage.getItem("token"));
  const client = new ApiClient(
    () => token,
    () => logout()
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
    <div>
      <div  className='fixed top-0 right-0 p-8'>
        <Navigation client={client}/>
      </div>
      <div className="text-2xl flex justify-between">
        <CreateCourse client={client}/>
      </div>
      <div className="px-20 py-10">
        
      </div>
      <div className="text-2xl">
        Upcoming . . .
        <div>
          <CalendarUI />
        </div>
      </div>
    </div>
  );
};

export default CourseManagerDash;
