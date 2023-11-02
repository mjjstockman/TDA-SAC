"use client";
import { React, useState, useEffect } from "react";
import dayjs from "dayjs";

const Calendar = () => {
  const [dates, setDates] = useState([]);
  const [days, setDays] = useState([]);

  const startDate = dayjs().date(-1).format("DD");
  const endDate = dayjs().date(40).format("DD");

  const month = dayjs().format("MMMM");
  const year = dayjs().format("YYYY");

  const generateDay = () => {
    const dayArray = [];
    for (let i = 1; i <= 7; i++) {
      dayArray.push(dayjs().day(i).format("dd"));
    }
    setDays(dayArray);
  };

  const generateDates = () => {
    const dateArray = [];

    for (let i = -1; i < 41; i++) {
      dateArray.push(dayjs().date(i).format("DD"));
    }
    setDates(dateArray);
    // console.log(dateArray);
  };

  console.log(dates);

  useEffect(() => {
    generateDates();
  }, []);

  useEffect(() => {
    generateDay();
  }, []);

  const notes = "my note here";

  return (
    <div>
      <div className="w-full">
        <div className="grid grid-cols-7 grid-rows-10 border-2 gap-2 text-center p-2">
          <div className="col-span-7 p-2 flex gap-2">
            <div className="">{month}</div>
            <div className="">{year}</div>
          </div>
          {days.map((day, index) => (
            <div key={index} className="btn btn-ghost btn-lg">
              {day}
            </div>
          ))}
          {dates.map((date, index) => (
            <div>
              <button
                key={index}
                onClick={() => document.getElementById("modal").showModal()}
                className="btn btn-ghost btn-lg"
              >
                {date}
              </button>
              <dialog id="modal" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">{date}</h3>
                  <p className="py-4">{notes}</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button id="closeButton"></button>
                </form>
              </dialog>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
