"use client";
import React, { useState, useEffect } from "react";

const CreateCourse = (props) => {
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [teachers, setTeachers] = useState([]);

  const gettingTeachers = async () => {
    try {
      const response = await props.client.getUsers();
      const instructors = response.data.filter(
        (user) => user.role === "Instructor"
      );
      setTeachers(instructors);
      console.log(instructors);
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  useEffect(() => {
    gettingTeachers();
  }, []);

  const refresh = () => {
    window.location.reload();
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSelectedTeacher(inputValue);
  };

  const handleInputFocus = () => {
    setDropdownVisible(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setDropdownVisible(false);
    }, 100);
  };

  const handleTeacherClick = (teacher) => {
    setSelectedTeacher(teacher);
    setDropdownVisible(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const title = e.target.courseName.value;
    const userId = selectedTeacher._id;
    const email = selectedTeacher.email;
    const startDate = e.target.startdate.value;
    const endDate = e.target.enddate.value;
    const colour = "##800080";
    const description = "";

    props.client.registerCourse(
      title,
      userId,
      email,
      startDate,
      endDate,
      colour,
      description
    );

    e.target.reset();
  };

  return (
    <div id="addUser">
      <form className="flex gap-4 items-center" onSubmit={submitHandler}>
        <input
          type="text"
          id="courseName"
          placeholder="Course name"
          className="text-center input input-bordered w-40 max-w-xs"
        />
        <div className="w-40 max-w-xs">
          <input
            type="text"
            id="teacher"
            placeholder="Teacher Email"
            value={selectedTeacher ? selectedTeacher.email : ""}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            className="text-center input input-bordered w-full"
          />
          {dropdownVisible && (
            <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 absolute top-36">
              {teachers?.map((teacher) => (
                <li key={teacher.email}>
                  <a onClick={() => handleTeacherClick(teacher)}>
                    {teacher.email}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <input
          type="date"
          id="startdate"
          className="text-center input input-bordered w-40 max-w-xs"
        />
        <input
          type="date"
          id="enddate"
          className="text-center input input-bordered w-40 max-w-xs"
        />
        <button className="btn btn-ghost btn-xs" onClick={refresh}>
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateCourse;
