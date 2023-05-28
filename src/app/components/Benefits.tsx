import React from 'react'
import ShowItems from '../ui/ShowItems'
import Image from 'next/image'

type Props = {}

const Benefits = (props: Props) => {

    return (
        <section className='flex flex-col justify-center items-center'>
            <article className='text-center mb-4 '>
                <h2 className='text-black text-2xl pb-4 font-semibold'>Benefits To Chose Us!</h2>
                <p>Insipred by hydration and Japan's beauty rituals, Ethya Cosmetics focuses on the care elements of skincare to combine powerful ingredients backed by science and authenically</p>
            </article>

            <ShowItems />

        </section>
    )
}

export default Benefits