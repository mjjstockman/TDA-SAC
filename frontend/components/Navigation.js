"use client";
import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";

const Navigation = (props) => {
  const [modalOneOpen, setModalOneOpen] = useState(false);

  const openModalOne = () => {
    setModalOneOpen(true);
  };

  const closeModalOne = () => {
    setModalOneOpen(false);
  };
  const [modalTwoOpen, setModalTwoOpen] = useState(false);

  const openModalTwo = () => {
    setModalTwoOpen(true);
  };

  const closeModalTwo = () => {
    setModalTwoOpen(false);
  };

  const submitSickLeaveHandler = async (e) => {
    e.preventDefault();

    // title: String,
    // userid: String,
    // email: String,
    // startDate: String,
    // endDate: String,
    // totalDays: Number,
    // colour: String,
    // note: String,

    const title = e.target.reason.value;
    const userid = "6554d0c1e8e867d732f10eeb";
    const email = "userOne";
    const note = e.target.doctorNote.value;
    const colour = "#FFA500";

    props.client.addSickLeave(title, userid, email, colour, note);

    e.target.reset();
  };

  return (
    <div>
      <div className="gap-8">
        <button className="btn btn-ghost btn-md">Tab 1</button>
        <button className="btn btn-ghost btn-md">Tab 2</button>
        <div className="dropdown dropdown-hover dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-md ">
            Add
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit"
          >
            <li>
              <button
                className="btn btn-ghost btn-md text-center"
                onClick={openModalOne}
              >
                Sick Leave
              </button>
            </li>
            <li>
              <button
                className="btn btn-ghost btn-md text-center"
                onClick={openModalTwo}
              >
                Annual Leave
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Modal One */}
      <div
        className="modal fixed flex justify-center items-center"
        open={modalOneOpen}
        onKeyDown={(e) => e.key === "Escape" && closeModalOne()}
        onClick={(e) => e.target === e.currentTarget && closeModalOne()}
      >
        <div className="modal-box flex flex-col items-center">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closeModalOne}
          >
            <FaXmark />
          </button>
          <h3 className="font-bold text-lg">Add Sick Leave</h3>
          <form
            className="py-4 gap-4 flex flex-col items-center"
            onSubmit={submitSickLeaveHandler}
          >
            <input
              id="reason"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              id="doctorNote"
              type="file"
              className="file-input w-full max-w-xs"
            />
            <button className="btn btn-ghost btn-md text-center">Submit</button>
          </form>
        </div>
      </div>
      {/* Modal Two */}
      <div
        className="modal fixed flex justify-center items-center"
        open={modalTwoOpen}
        onKeyDown={(e) => e.key === "Escape" && closeModalTwo()}
        onClick={(e) => e.target === e.currentTarget && closeModalTwo()}
      >
        <div className="modal-box flex flex-col items-center">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closeModalTwo}
          >
            <FaXmark />
          </button>
          <h3 className="font-bold text-lg">Add Annual Leave</h3>
          <form className="py-4 gap-4 flex flex-col">
            <input
              id="title"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="flex flex-col">
              <lable className="text-sm">Start date</lable>
              <input
                id="startDate"
                type="date"
                className="bordered w-fit max-w-xs p-2"
              />
            </div>
            <div className="flex flex-col">
              <lable className="text-sm">End date</lable>
              <input
                id="endDate"
                type="date"
                className="bordered w-fit max-w-xs p-2"
              />
            </div>
            <input
              id="holidayNote"
              type="text"
              placeholder="Note"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn btn-ghost btn-md w-fit text-center absolute right-4 bottom-10">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
