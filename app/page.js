'use client'
import Image from 'next/image'
import { ChartAreaAxes } from './components/ChartAreaAxes'

import ProgressCircleCard from './components/ProgressCircleCard'
import GitHeatmap from './components/GitHeatMap'
import StatCards from './components/StatsCards/StatCards'
import OngoingCourses from './components/OngoingCourses/OngoingCourses'
import Statistics from './components/Statistics/Statistics'

export default function DashboardPage () {
  return (
    <>
      <section className='px-4 py-6 mx-auto bg-white rounded-md md:py-4'>
        {/* Top Welcome Row */}
        <div className='flex flex-col mx-auto sm:flex-row sm:items-center sm:space-x-6'>
          {/* Penguin Avatar Box */}
          <div className='flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24'>
            <Image
              src='/icons/pengu-logo 1.png'
              alt='Penguin Logo'
              width={80}
              height={80}
              className='object-contain'
            />
          </div>

          {/* Welcome Text */}
          <div className='mt-3 sm:mt-0'>
            <h1 className='text-base font-bold leading-tight text-black sm:text-lg'>
              Welcome back, <span className='font-bold'>Lisa!</span>
            </h1>
            <p className='mt-1 text-xs text-gray-400 sm:text-sm'>
              You have completed{' '}
              <span className='text-[#45CAF5]  font-semibold'>
                30% of your goal this week!
              </span>
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <StatCards />

        {/* Ongoing Courses */}
        <OngoingCourses />

        {/* Chart + Progress Side by Side */}
        <Statistics />

        <div className=''>
          <GitHeatmap />
        </div>
      </section>
    </>
  )
}
