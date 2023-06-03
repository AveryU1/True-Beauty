import React from 'react'
import ShowItems from '../ui/ShowItems'
import { comestics } from '../constants'

const OurCosmetics = () => {
  return (
    <>
    <section className='flex flex-col items-center justify-between m-auto w-[90%] max-w-[1440px] mt-[2rem]' id='manufacturing'>
        <div className='text-center mb-4 lg:w-[700px]'>
            <h3 className='font-poppins font-semibold leading-[52px] text-[30px]'>Our Cosmetics Facts</h3>
            <p className='font-poppins font-normal leading-[32px] text-[#505050] text-[14px]'>Inspired by hydration and Japan’s beauty rituals, Ehya Cosmetics focuses on the core elements of skincare to combine powerful ingredients backed by science and authentically.</p>
        </div>
    </section>
    
      <ShowItems comestics={comestics}/>
        
    </>
  )
}

export default OurCosmetics