"use client"
import dayjs from "dayjs";
import React from "react";
import { useState } from "react";

const Calendar = (month = dayjs().month(), year = dayjs().year()) => {


    const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
    const lastDateOfMonth = dayjs().year(year).month(month).startOf("month");

    const arrayOfDates = [];

    for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
        arrayOfDates.push(firstDateOfMonth.date(i));
    }



  return console.log(arrayOfDates)
};

export default Calendar;
