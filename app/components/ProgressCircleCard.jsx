"use client";

import Image from "next/image";

export default function ProgressCircleCard() {
  return (
    <div className="lg:w-[35%] w-full p-6 bg-white border border-gray rounded-2xl">
      {/* Dropdown */}
      <div className="flex justify-end mb-4">
        <select
          aria-label="Select frequency"
          className="px-3 py-1 text-sm text-gray-700 bg-gray-200 rounded-md cursor-pointer focus:outline-none"
        >
          <option>Monthly</option>
        </select>
      </div>

      {/* Heading */}
      <div className="mb-4 text-center">
        <p className="text-base font-semibold leading-tight text-black">
          Today’s <br />
          Progress
        </p>
      </div>

      {/* Circle Progress */}
      <div className="relative flex items-center justify-center mb-4">
        <svg className="w-32 h-32" viewBox="0 0 120 120" fill="none">
          {/* Background circle */}
          <circle cx="60" cy="60" r="54" stroke="#D9F0D9" strokeWidth="12" />
          {/* Progress circle */}
          <circle
            cx="60"
            cy="60"
            r="54"
            stroke="#3DBE00"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray="339.292"
            strokeDashoffset="112.115"
            transform="rotate(-90 60 60)"
          />
        </svg>

        {/* Diamond image on top center */}
        <Image
          src="/icons/dd.png"
          alt="Blue diamond icon"
          width={24}
          height={24}
          className="absolute top-[-6px] left-1/2 -translate-x-1/2 w-6 h-6"
          style={{ filter: "drop-shadow(0 0 1px #3DBE00)" }}
        />

        {/* Dots */}
        <span className="absolute top-[20%] left-[20%] w-3 h-3  bg-[#58CC02] rounded-full" />
        <span className="absolute top-[20%] right-[20%] w-3 h-3  bg-[#58CC02] rounded-full" />
        <span className="absolute bottom-[20%] left-[20%] w-3 h-3  bg-[#58CC02] rounded-full" />
        <span className="absolute bottom-[20%] right-[25%] w-2 h-2  bg-[#58CC02] rounded-full" />

        {/* Center text */}
        <div className="absolute text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <p className="text-xl font-bold leading-none text-black">67%</p>
          <p className="text-xs text-gray-700">of 100</p>
        </div>
      </div>

      {/* Subtext */}
      <div className="mb-2 font-semibold leading-snug text-center text-black">
        Finish today’s program <br /> and get
      </div>

      {/* Reward */}
      <div className="flex items-center justify-center space-x-2 text-lg font-semibold text-black">
        <Image
          src="/icons/dd.png"
          alt="Blue diamond icon"
          width={24}
          height={24}
          className="w-8 h-8"
        />
        <span>10</span>
      </div>
    </div>
  );
}
