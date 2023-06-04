import React from 'react'
import { BsChevronRight } from 'react-icons/bs'

const NextArrow = ({ onClick }: any) => {
  return (
    <div className='absolute right-0 -top-[80px]' onClick={onClick}>
        <div className='bg-[#F7B525] h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer'>
            <BsChevronRight />
        </div>
    </div>
  )
}

export default NextArrow