"use client";
import React, { useState, useEffect } from "react";

const ManagerRequests = (props) => {
  const [holidays, setHolidays] = useState([]);
  const token = window.localStorage.getItem("token");
  const [currentUser, setCurrentUser] = useState(null);
  
  const updateCurrentUser = async () => {
    const response = await props.client.getUserByToken(token);
    const userId = response.data._id;
    console.log("Current User ID:", userId);
    setCurrentUser(userId);
  };
  
  const refreshList = async () => {
    await updateCurrentUser();
    console.log("Before Refresh - Current User ID:", currentUser);
  
    const response = await props.client.getHolidays();
    const filteredHolidays = response.data.filter(
      (holiday) => !holiday.approved && holiday.userid !== currentUser
    );
  
    setHolidays(filteredHolidays);
    console.log("After Refresh - Current User ID:", currentUser);
    console.log("Filtered Holidays:", filteredHolidays);
  };

  const approveRequest = (id) => {
    props.client.approveRequest(id).then(() => refreshList());
  };

  const approvalNotification = (email, startDate) => {
    const message = `Holiday from ${startDate} Approved`;
    props.client.notification(email, message);
  };

  const denyRequest = (id) => {
    props.client.denyRequest(id).then(() => refreshList());
  };

  const denialNotification = (email, startDate) => {
    const message = `Holiday from ${startDate} Denied`;
    props.client.notification(email, message);
  };

  useEffect(() => {
    refreshList();
  }, [token, currentUser]);

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
                    <div className="font-bold">{holiday.email}</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="overflow-none">{holiday.title}</div>
                  </div>
                </td>
                <td>
                  {holiday.startDate} | {holiday.endDate}
                </td>
                <td className="text-center">{holiday.totalDays}</td>
                <th>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={async () => {
                      await approveRequest(holiday._id);
                      await approvalNotification(
                        holiday.email,
                        holiday.startDate
                      );
                    }}
                  >
                    APPROVE
                  </button>
                </th>
                <th>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={async () => {
                      await denyRequest(holiday._id);
                      await denialNotification(
                        holiday.email,
                        holiday.startDate
                      );
                    }}
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
