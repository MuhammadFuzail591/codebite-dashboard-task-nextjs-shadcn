import React from 'react'
import { ChartAreaAxes } from '../ChartAreaAxes'
import ProgressCircleCard from '../ProgressCircleCard'

function Statistics () {
  return (
    <div className='flex flex-col gap-4 mx-auto mt-12 lg:flex-row'>
      <ChartAreaAxes />
      <ProgressCircleCard />
    </div>
  )
}

export default Statistics
