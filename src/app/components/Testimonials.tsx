"use client"
import Image from 'next/image'
import React from 'react'
import { testimonials } from '../testimonials'
import { BsStarFill } from 'react-icons/bs'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Swiper, SwiperSlide } from "swiper/react";
import '../slider.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper.min.css";



// import required modules
import { Navigation } from "swiper";

export const Testimonials = () => {

  return (
    <section className='flex flex-col overflow-hidden py-10'>
        <div className='font-poppins flex flex-col items-center md:flex-row md:justify-around'>
            <h3 className='text-[30px] font-semibold leading-[72px]'>Testimoinials</h3>
        </div>
        <div className='md:px-16 overflow-hidden'>
        <Swiper  modules={[Navigation]} spaceBetween={30}
            slidesPerView={1}
            navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
            }} className="mySwiper">
                {
                    testimonials.map(coments => (
                        <SwiperSlide key={coments.id}>
                        <div  className='my-5 mx-12 w-[362px] h-[366px] flex flex-col justify-center px-8 gap-2 bg-[#ffff] rounded-[10px] drop-shadow-[0_4px_31px_rgba(66,66,66,0.15)]'>
                            <div className='flex gap-1 text-[#F7B525]'><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></div>
                            <p className='font-poppins font-normal text-[14px] leading-[35.7px] text-[#505050]'>{coments.message}</p>
                            <div className='flex gap-4'>
                                <Image src={coments.imgUrl} alt='' height={82} width={82} priority={true}/>
                                <div className='flex flex-col justify-evenly font-poppins '>
                                    <span className='font-bold text-[14px] leading-[30px] text-[#262626]'>{coments.name}</span>
                                    <span className='text-[#9C9C9C] text-[12px] leading-[30px]'>{coments.charge}</span>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                    ))
                }
                    <div>
                        <div className="swiper-button-prev">
                            <FiChevronLeft className="swiper-button-prev-icon" />
                        </div>
                        <div className="swiper-button-next">
                            <FiChevronRight className="swiper-button-next-icon" />
                    </div>
            </div>
        </Swiper>
        </div>
    </section>
  )
}
