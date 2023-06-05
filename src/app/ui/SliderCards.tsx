"use client"
import React, { useEffect, useState } from 'react';
import { BsStarFill } from 'react-icons/bs';
import Image from 'next/image'
import Slider from 'react-slick';
import { Team } from '../../../typings';

// styles slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';


interface Props{
    testimonials?: Team[]
}

const SliderCards = ({ testimonials }: Props) => {

    const [slideShow, setSlideShow] = useState(3);

    const setSlides = () => {
        if(window.innerWidth <= 1280 && window.innerWidth > 1000){
            setSlideShow(3);
        } else if(window.innerWidth <= 1000 && window.innerWidth > 650){
            setSlideShow(2);
        } else if(window.innerWidth <= 650){
            setSlideShow(1);
        }
    } 

    useEffect(() => {
        setSlides();
        window.addEventListener('resize', () => { setSlides() })
    })

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
            },
            {
                breakpoint: 1000,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
            },
            {
                breakpoint: 650,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
            },
        ],
    };

    
return (
    <div className='relative'>
        <Slider {...settings}>
                {
                    testimonials?.map(coments => (
                        <div key={coments.id} className='my-5 w-[392px] h-[366px] flex flex-col justify-center p-8 gap-2 bg-[#ffff] rounded-[10px] drop-shadow-[0_4px_31px_rgba(66,66,66,0.15)] overflow-hidden'>
                            <div className='flex gap-1 text-[#F7B525]'><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></div>
                            <p className='font-poppins font-normal text-[14px] leading-[35.7px] text-[#505050]'>{coments.message}</p>
                            <div className='flex gap-4'>
                                <Image src={coments.imgUrl} alt='Team' height={82} width={82} priority={true}/>
                                <div className='flex flex-col justify-evenly font-poppins '>
                                    <span className='font-bold text-[14px] leading-[30px] text-[#262626]'>{coments.name}</span>
                                    <span className='text-[#9C9C9C] text-[12px] leading-[30px]'>{coments.charge}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
        </Slider>
        </div>
    )
}

export default SliderCards