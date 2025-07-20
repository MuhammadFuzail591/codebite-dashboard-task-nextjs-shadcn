'use client';
import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { subDays, format } from 'date-fns';

// Generate dummy Git-style contribution data
const generateData = () => {
  const endDate = new Date();
  const startDate = subDays(endDate, 365);
  const values = [];

  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    values.push({
      date: format(new Date(d), 'yyyy-MM-dd'),
      count: Math.floor(Math.random() * 5),
    });
  }

  return values;
};

export default function GitHeatmap() {
  const heatmapData = generateData();

  return (
    <div className='mt-10 '>
      <h2 className="mb-1 text-lg font-bold text-black ">
        Activity Graph
      </h2>
      <div className="w-full p-4 py-1 border border-gray-200 rounded-lg shadow-sm bg-background">
        {/* Dropdown */}
        <div className="flex justify-end mt-2 mb-3">
          <select
            aria-label="Select frequency"
            className="px-3 py-1 text-sm text-gray-700 bg-gray-200 rounded-md cursor-pointer focus:outline-none"
          >
            <option>Monthly</option>
          </select>
        </div>
        <CalendarHeatmap
          startDate={subDays(new Date(), 365)}
          endDate={new Date()}
          values={heatmapData}
          showWeekdayLabels
          gutterSize={3}
          classForValue={(value) => {
            if (!value) return 'color-empty';
            return `color-github-${value.count}`;
          }}
        />
        <div className="flex items-center justify-end gap-1 text-sm text-gray-400 ">
          <span>Less</span>
          <div className="w-3 h-3  bg-[#EBEDF0]" />
          <div className="w-3 h-3  bg-[#9BE9A8]" />
          <div className="w-3 h-3  bg-[#40C463]" />
          <div className="w-3 h-3  bg-[#30A14E]" />
          <div className="w-3 h-3 bg-[#216E39]" />
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
