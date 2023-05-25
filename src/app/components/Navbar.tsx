import React from 'react'
import { BiCart } from "react-icons/bi"
type Props = {}

export const Navbar = (props: Props) => {
    return (
        <header className='bg-white'>
            <nav className='flex justify-between items-center w-[92%] mx-auto bg-cyan-500 py-6'>
                <div><h1 className='font-vidaLoka text-2xl'>Asad Ali</h1></div>
                <div className='absolute'>
                    <ul className='flex md:flex-row flex-col gap-x-14'>
                        <li><a href="#" className='text-xl'>Products</a></li>
                        <li><a href="#" className='text-xl'>Story</a></li>
                        <li><a href="#" className='text-xl'>Manufacturing</a></li>
                        <li><a href="#" className='text-xl'>About Us</a></li>
                        <li><a href="#" className='text-xl'>Team</a></li>
                    </ul>
                </div>
                <div><BiCart /></div>
                <div>
                    <button>Sign in</button>
                    <button>Log in</button>
                </div>
            </nav>
        </header>
    )
}