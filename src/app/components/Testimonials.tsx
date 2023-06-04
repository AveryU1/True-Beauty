"use client"

import { testimonials } from "../constants/testimonials"
import SliderCards from "../ui/SliderCards"


export const Testimonials = () => {

  return (
    <section className='flex flex-col overflow-hidden py-10 mt-[2rem] max-w-[1440px] w-[90%] m-auto' id='team'>
        <div className='font-poppins flex flex-col md:flex-row md:justify-start pb-4'>
            <h3 className='text-[30px] font-semibold leading-[72px]'>Testimoinials</h3>
        </div>
        <SliderCards testimonials={testimonials}/>
    </section>
  )
}
