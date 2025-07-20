import Image from 'next/image'
import React from 'react'

function Topbar () {
  return (
    <section className='relative flex items-center justify-center w-full px-4 py-8 md:py-4'>
      {/* Background Rectangle */}
      <div className='relative bg-[#B9E8FF] rounded-[3rem] w-full max-w-[1400px] h-[500px] md:h-[200px] xl:h-[250px] overflow-hidden shadow-md'>
        {/* Ellipse */}
        <div
          className='absolute z-0 bg-white/20 rounded-full
                   w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px]
                   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center'
        >
          <Image
            src='/icons/pro.png'
            alt='User profile'
            width={120}
            height={120}
            className='z-10 object-cover border-4 border-white rounded-full shadow-xl'
          />
        </div>

        {/* Edit Icon */}
        <Image
          src='/icons/pro.png'
          alt='Edit icon'
          width={24}
          height={24}
          className='absolute top-6 right-6 rounded border  border-[#4EA1FF] shadow'
        />
      </div>
    </section>
  )
}

export default Topbar
