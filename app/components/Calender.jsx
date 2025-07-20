'use client';

import { useState } from 'react';
import { MdNotificationsNone } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
const CalSidebar = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Developing Restaurant Apps', time: '08:00 AM', type: 'Programming', completed: false },
    { id: 2, name: 'Integrate API', time: '', type: '', completed: false },
    { id: 3, name: 'Report Analysis-P2P Business', time: '04:00 PM', type: 'Business', completed: true },
  ]);

  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const completedDays = [0, 1, 2, 3];

  return (
    <div className="flex flex-col gap-6 p-6 shadow-md h-[50%] bg-white rounded-lg">


      {/* Header */}
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="relative w-2/3">
          <FiSearch className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
          <input
            type="text"
            placeholder="Search anything"
            className="w-full py-2 pl-8 pr-4 text-xs bg-gray-100 rounded-full outline-none"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 ml-4">
          <MdNotificationsNone className="text-xl text-black" />
          <div className="relative">
            <img
              src="/icons/girl.png"
              alt="profile"
              className="object-cover w-8 h-8 rounded-full"
            />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
          </div>
        </div>
      </div>

      {/* Streak Tracker */}
      <div>
        <div className="text-[#FFA136] font-semibold text-sm flex items-center gap-2">
          🔥 1234 day streak
        </div>
        <p className="text-[0.6rem] text-gray-500">You’re on fire!</p>

        <div className="flex items-center gap-3 mt-3">
          {days.map((day, idx) => (
            <div
              key={idx}
              className={`w-5 h-5 flex items-center justify-center rounded-full border text-[0.6rem]  leading-none font-medium ${completedDays.includes(idx)
                ? 'bg-[#FFA136] text-white'
                : 'text-gray-500 border-gray-300'
                }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>

      {/* Remaining Task */}
      <div>
        <h3 className="mb-2 text-sm font-semibold text-gray-800">Remaining Tasks</h3>
        <div className="flex items-center justify-between">
          <span className="text-[#58CC02] font-medium">Web Design</span>
          <span className="text-sm font-semibold text-[#027A48]">55%</span>
        </div>
        <div className="w-full h-2 mt-1 bg-gray-200 rounded-full">
          <div className="bg-[#58CC02] h-2 rounded-full" style={{ width: '55%' }}></div>
        </div>
      </div>

      {/* To-Do List */}
      <div>
        <h3 className="mb-3 text-sm font-bold text-gray-800">To Do List</h3>
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-start gap-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() =>
                  setTasks(tasks.map(t => t.id === task.id ? { ...t, completed: !t.completed } : t))
                }
                className="mt-1 bg-[#58CC02] text-white"
              />
              <div>
                <p className={`font-medium text-sm ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                  {task.name}
                </p>
                {task.type && (
                  <span className="text-xs text-gray-500">
                    {task.type} <span className="ml-1 text-red-400">{task.time}</span>
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CalSidebar;
