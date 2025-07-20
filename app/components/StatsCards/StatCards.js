import Image from 'next/image'
import React from 'react'

function StatCards () {
  return (
    <div className='flex flex-col items-start gap-4 mx-auto mt-6 lg:flex-row'>
      <div className='flex flex-wrap flex-1 lg:flex-nowrap gap-x-6 gap-y-4'>
        {[
          {
            label: 'Highest Streak',
            value: 25,
            iconSrc: '/icons/fire.png',
            alt: 'Fire icon'
          },
          {
            label: 'Projects Completed',
            value: 25,
            iconSrc: '/icons/box.png',
            alt: 'Box icon'
          },
          {
            label: 'Total Points',
            value: 25,
            iconSrc: '/icons/gem.png',
            alt: 'Gem icon'
          },
          {
            label: 'Total Points',
            value: 25,
            iconSrc: '/icons/gem.png',
            alt: 'Gem icon'
          }
        ].map((card, index) => (
          <div
            key={index}
            className='bg-white border border-gray-200 rounded-[1.5rem] shadow-md flex flex-col justify-between p-4 w-full sm:w-[12rem] md:w-[14.5rem]'
          >
            <p className='text-xs font-semibold text-black'>{card.label}</p>
            <div className='flex items-center justify-between space-x-3'>
              <span className='text-4xl font-bold text-black'>
                {card.value}
              </span>
              {/* Growth Section */}
              <div className='flex flex-col items-start mt-3 leading-tight '>
                <div className=' w-6 h-2 bg-[#FEC53D] rounded-sm' />
                <span className='text-[8px] text-[#3DBE00] font-normal whitespace-nowrap mt-1'>
                  +2.6% than last week
                </span>
              </div>
              
              {/* You have to download icons and then make it dynamic */}
              <Image
                src='/icons/fire-icon.png'
                alt={card.alt}
                width={34}
                height={34}
                className='  object-contain translate-y-[-7px]'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatCards
