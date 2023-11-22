"use client";
import React, { useState, useEffect } from "react";

const ManagerRequests = (props) => {
  const [holidays, setHolidays] = useState([]);

  const refreshList = () => {
    props.client.getHolidays().then((response) => {
      setHolidays(response.data);
      console.log(response.data);
    });
  };

  // if holidays approved = true >> IGNORE
  // if holidays approved = false >> SHOW
  // when decline holiday >> delete request and send notification to user
  // when approved holiday >> set approved TRUE and send notification to user

  useEffect(() => {
    refreshList();
  }, []);

  return (
    <div>
      <h1 className="text-xl py-4"> LEAVE REQUESTS </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Email</th>
              <th>Reason</th>
              <th>Dates</th>
              <th>Days</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {holidays?.map((holiday) => (
              <tr key={holiday._id}>
                <td>
                  <div>
                    <div className="font-bold">{holiday.email}</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div>{holiday.title}</div>
                  </div>
                </td>
                <td>
                  {holiday.startDate} | {holiday.endDate}
                </td>
                <td>{holiday.totalDays}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">APPROVE</button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">DENY</button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default ManagerRequests;
