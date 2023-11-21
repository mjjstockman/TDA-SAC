"use client";
import React, { useState, useEffect } from "react";

const ManagerRequests = (props) => {
  const [holidays, setHolidays] = useState([]);

  const refreshList = () => {
    props.client.getHolidays().then((response) => {
      setHolidays(response.data.filter((holiday) => !holiday.approved));
      console.log(response.data);
    });
  };

  const approveRequest = (id) => {
    props.client.approveRequest(id).then(() => refreshList());
    // props.client.sendNotification(email) 
    // Sends notification to user of approval
  };

  const denyRequest = (id) => {
    props.client.denyRequest(id).then(() => refreshList());
    // props.client.sendNotification(email)
    // Sends notification to user of denial
  };

  useEffect(() => {
    refreshList();
  }, []);

  return (
    <div>
      <div className="text-xl py-4 gap-3 flex">
        LEAVE REQUESTS <div>:</div>
        <div className=" font-bold text-xl">{holidays.length}</div>
      </div>

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
                    <div className="font-bold text-center">{holiday.email}</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="overflow-none">{holiday.title}</div>
                  </div>
                </td>
                <td className="text-center">
                  {holiday.startDate} | {holiday.endDate}
                </td>
                <td className="text-center">{holiday.totalDays}</td>
                <th>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => approveRequest(holiday._id)}
                  >
                    APPROVE
                  </button>
                </th>
                <th>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => denyRequest(holiday._id)}
                  >
                    DENY
                  </button>
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
