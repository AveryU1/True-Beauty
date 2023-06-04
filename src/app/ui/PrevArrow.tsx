import React from 'react'
import { BsChevronLeft } from 'react-icons/bs'

const PrevArrow = ({ onClick }: any) => {
  return (
    <div className='absolute right-[80px] -top-[80px]' onClick={ onClick }>
        <div className='bg-[#F7B525] h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer'>
            <BsChevronLeft />
        </div>
    </div>
  )
}

export default PrevArrow