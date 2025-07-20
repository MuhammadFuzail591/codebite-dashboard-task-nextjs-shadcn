import Image from 'next/image'
import React from 'react'

function OngoingCourses () {
  return (
    <div className='w-full mx-auto mt-4'>
      <h2 className='mb-6 text-3xl font-bold text-black sm:text-2xl'>
        Ongoing Courses
      </h2>

      {/* Course Cards */}
      <div className='max-w-full space-y-6'>
        {[
          {
            title: 'Android Developer',
            instructor: 'Instructor Name',
            duration: '24 hrs 13 mins',
            progress: 48,
            completed: '5/8',
            students: '1K+',
            assessments: 16,
            lectures: 50
          },
          {
            title: 'Flutter Developer',
            instructor: 'Instructor Name',
            duration: '24 hrs 13 mins',
            progress: 48,
            completed: '5/8',
            students: '1K+',
            assessments: 16,
            lectures: 50
          }
        ].map((course, idx) => (
          <div
            key={idx}
            className='flex flex-col p-4 bg-gray-100 shadow-sm rounded-xl sm:p-6 sm:flex-row sm:items-center gap-x-3'
          >
            {/* Left: Title + Instructor */}
            <div className='mb-4 md:ml-6 sm:mb-0 sm:w-[20%]'>
              <h3 className='text-base font-semibold text-black'>
                {course.title}
              </h3>
              <p className='mt-1 text-sm text-gray-400'>
                By {course.instructor}
              </p>
            </div>

            {/* Middle: Duration + Progress */}
            <div className='flex flex-col sm:w-[23%] sm:px-4 mb-4 sm:mb-0'>
              <p className='mb-1 text-sm text-gray-400'>Duration</p>
              <p className='text-sm font-semibold text-black'>
                {course.duration}
              </p>
            </div>
            <div className='flex items-center mt-2 sm:w-[23%] space-x-2'>
              <span className='font-bold text-black text-md'>
                {course.progress}%
              </span>
              <div className='relative w-40 h-4 overflow-hidden bg-gray-300 rounded-full'>
                <div
                  className='absolute left-0 top-0 h-full  bg-[#58CC02]
    rounded-full'
                  style={{ width: `${course.progress}%` }}
                />
              </div>
              <span className='font-bold text-black text-md'>
                {course.completed}
              </span>
            </div>

            {/* Right: Stats */}
            <div className='flex items-center space-x-4 sm:w-[23%] justify-end'>
              <div className='flex items-center space-x-1 font-semibold text-gray-600 text-md'>
                <Image
                  src='/icons/People.png'
                  alt='Students'
                  width={28}
                  height={28}
                />
                <span>{course.students}</span>
              </div>
              <div className='flex items-center space-x-1 font-semibold text-gray-600 text-md'>
                <Image
                  src='/icons/Book.png'
                  alt='Assessments'
                  width={28}
                  height={28}
                />
                <span>{course.assessments}</span>
              </div>
              <div className='flex items-center space-x-1 font-semibold text-gray-600 text-md'>
                <Image
                  src='/icons/play.png'
                  alt='Lectures'
                  width={28}
                  height={28}
                />
                <span>{course.lectures}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OngoingCourses
