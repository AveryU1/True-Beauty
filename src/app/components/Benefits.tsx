import React from 'react'
import ShowItems from '../ui/ShowItems'
import Image from 'next/image'
import { Items } from '../../../typings'
import { benefits } from '../constants'

interface Props {

}

const Benefits = (props: Props) => {

    return (
        <>
            <section className='flex flex-col items-center justify-between m-auto w-[90%] max-w-[1440px] '>
                <article className='text-center mb-4 lg:w-[700px]'>
                    <h2 className='text-2xl pb-4 font-semibold text-primary xl:text-4xl'>Benefits To Chose Us!</h2>
                    <p className='text-tertiary '>Insipred by hydration and Japan's beauty rituals, Ethya Cosmetics focuses on the care elements of skincare to combine powerful ingredients backed by science and authenically</p>
                </article>


            </section>
            <ShowItems benefits={benefits} />
        </>
    )
}

export default Benefits