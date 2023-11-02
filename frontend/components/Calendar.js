"use client";
import { React, useState, useEffect } from "react";
import dayjs from "dayjs";

const Calendar = () => {
  const [dates, setDates] = useState([]);
  const [days, setDays] = useState([]);
  const [currentDate, setCurrentDate] = useState(null);
  const [currentDateNotes, setCurrentDateNotes] = useState(null);

  const month = dayjs().format("MMMM");
  const year = dayjs().format("YYYY");

  const generateDay = () => {
    const dayArray = [];
    for (let i = 1; i <= 7; i++) {
      dayArray.push(dayjs().day(i).format("dd"));
    }
    setDays(dayArray);
  };

  const generateDates = (selectedDate) => {
    const dateArray = [];

    for (let i = -1; i < 41; i++) {
      const formattedDate = dayjs().date(i).format("DD");
      dateArray.push(formattedDate);
      if (selectedDate && formattedDate === selectedDate) {
        setCurrentDate(formattedDate);
      }
    }
    setDates(dateArray);
  };

  useEffect(() => {
    generateDates();
    generateDay();
  }, []);

  const handleButtonClick = (date) => {
    setCurrentDate(date);
    const savedNotes = localStorage.getItem(`notes_${date}`);
    setCurrentDateNotes(savedNotes || "");
    document.getElementById("modal").showModal();
  };

  const handleSaveNotes = () => {
    localStorage.setItem(`notes_${currentDate}`, currentDateNotes);
    document.getElementById("modal").close();
  };

  const notes = "";

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
            <div key={index}>
              {currentDateNotes ? (
              <button
                onClick={() => handleButtonClick(date)}
                className="btn btn-ghost btn-lg bg-green-500"
              >
                {date}
              </button>
              ) : (
              <button
                onClick={() => handleButtonClick(date)}
                className="btn btn-ghost btn-lg"
              >
                {date}
              </button>
              )}              
              <dialog id="modal" className="modal">
                <div className="modal-box flex flex-col items-center gap-4">
                  <h3 className="font-bold text-lg">{currentDate}</h3>
                  {currentDateNotes ? (
                    <p className="py-4">{currentDateNotes}</p>
                  ) : (
                    <input
                      type="text"
                      value={currentDateNotes}
                      onChange={(e) => setCurrentDateNotes(e.target.value)}
                      placeholder="Add notes..."
                      className="p-2 border border-gray-300 rounded"
                    />
                  )}
                  <button onClick={handleSaveNotes} className="btn btn-primary w-1/4">
                    Save Notes
                  </button>
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

// const [startOfMonth, setStartOfMonth] = useState([]);
// const [endOfMonth, setEndOfMonth] = useState([]);
// const generatorCurrentMonth = (
//   month = dayjs().month(),
//   year = dayjs().year()
// ) => {
//   const startOfMonth = dayjs().year(year).month(month).startOf("month");
//   const endOfMonth = dayjs().year(year).month(month).endOf("month");
//   setStartOfMonth(startOfMonth);
//   setEndOfMonth(endOfMonth);
// };
// console.log(startOfMonth);
// console.log(endOfMonth);
//
// const endDate = dayjs().date(40).format("DD");
// useEffect(() => {
//   generatorCurrentMonth();
// }, []);

export default Calendar;
