import Image from 'next/image'
import React from 'react'

export const ImagesBack = () => {
  return (
    <>
      <div className='absolute right-12 top-8'>
        <Image
          src='/shapes/shape-80.svg'
          width={70}
          height={70}
          alt='shapes'
        />
      </div>

      <div className='absolute right-36 lg:right-24 bottom-16'>
        <Image
          src='/shapes/shape-10.svg'
          width={70}
          height={70}
          alt='shapes'
        />
      </div>

      <div className='absolute left-[42%] lg:left-[56%] top-16 lg:top-24'>
        <Image
          src='/shapes/shape-22.svg'
          width={70}
          height={70}
          alt='shapes'
        />
      </div>

      <div className='absolute left-[10%] lg:left-[45%] -z-20 bottom-48'>
        <Image
          src='/shapes/shape-123.svg'
          width={70}
          height={70}
          alt='shapes'
        />
      </div>
    </>
  )
}
