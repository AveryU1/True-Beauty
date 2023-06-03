import React from 'react';
import Image from 'next/image';

export const HeroHeader = () => {
  return (
    <section className='sm:p-6 overflow-hidden flex justify-around items-center py-4 flex-col md:flex-row'>
            <div className='md:w-[60%] gap-6 flex flex-col'>
                <div className='gap-6 flex flex-col'>
                    <p className='font-vidaLoka text-[50px] font-normal lg:leading-[112px] md:leading-[60px] '>True <span className='text-[#FFAF00]'>Beauty</span> <br/> can radiate your uniqueness</p>
                    <div className='md:h-[121px]'>
                        <p className='text-[#505050] font-normal leading-[25px] sm:leading-[30px] text-[14px] tracking-[0.045em] md:text-[14px] lg:leading-[35.7px]'>K-Beauty got us hooked on Korean BB Creams and jelly cleansers. J-Beauty convinced us of the benefits of Japanese essences and sake ingredients. Probably we were bound to grab our beauty passports and move on to another country. And so we did: Now there’s G-Beauty.</p>
                    </div>
                    <div className='flex gap-3 justify-around font-poppins font-semibold not-italic text-[12px] text-[#ffff] sm:justify-start '>
                        <button className='bg-[#262626] w-[141px] h-[53px] rounded-[8px] shadow-[5px_6px_27px_rgba(0,0,0,0.25)] leading-[27px]'>View Details</button>
                        <button className='bg-[#FFAF00] w-[141px] h-[53px] rounded-[8px] shadow-[5px_6px_27px_rgba(0,0,0,0.25)] leading-[27px]'>Add To cart</button>
                    </div>
                </div>
                <div className='flex gap-6 font-poppins not-italic tracking-[0.045em] md:w-[359px] md:gap-9'>
                    <div>
                        <h4 className='text-[14px] md:text-[18px] font-semibold'>Meterial</h4>
                        <p className='text-[12px] font-normal text-[#505050] leading-6 tracking-[0.045em] md:text-[12px] '>K-Beauty got us hooked on Korean BB Creams and jelly cleansers.</p>
                    </div>
                    <div>
                        <h4 className='text-[14px] md:text-[18px] font-semibold'>Care</h4>
                        <p className='text-[12px] font-normal text-[#505050] leading-6 tracking-[0.045em] md:text-[12px] '>K-Beauty got us hooked on Korean BB Creams and jelly cleansers.</p>
                    </div>
                </div>
            </div>
            
            <div className='flex justify-center items-center flex-col overflow-hidden w-56 h-96 md:h-[490px] md:w-[350px]'>
                    <Image src='/assets/border2.svg' alt='border' width={298} height={356} priority={true} className='w-[100px] md:w-[130px]  relative right-14 top-24 md:top-[140px]'/>
                    <Image src='/assets/Rectangle.svg' alt='Rectangle back of the serum' width={434} height={701} priority={true}  className='w-[180px] md:w-[210px]'/>
                <div className='absolute'>
                    <Image src='/assets/imageSerum.svg' alt='Serum K-Beauty' width={270} height={610} priority={true} className='w-[120px] md:w-[130px] z-0 '/>
                </div>
                    <Image src='/assets/border.svg' alt='border' width={298} height={356} priority={true} className='w-[100px] md:w-[130px] relative left-14 bottom-24 md:bottom-[130px]'/>
                    <Image src='/assets/hero1.svg' alt='border' width={102} height={102} priority={true} className='absolute right-[32%] top-20 z-[1px] invisible md:visible'/>
                    <Image src='/assets/hero2.svg' alt='border' width={124} height={124} priority={true} className='absolute right-[34%] bottom-[20%] z-[1px] invisible md:visible'/>
                    <Image src='/assets/hero3.svg' alt='border' width={80} height={80} priority={true} className='absolute left-[91%] top-[34%] z-[1px] invisible md:visible'/>
            </div>
            
       
    </section>
  )
}
