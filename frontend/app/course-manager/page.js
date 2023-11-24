import CourseManagerDash from '@/pages/CourseManagerDash';
import React from "react";

const page = () => {
  return (
    <div>
      <div className='flex bg-white min-h-screen flex-col items-center justify-between p-24'>
          <CourseManagerDash />
      </div>
    </div>
  )
}

export default page