"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { vidaLoka } from '../fonts'
import instagram from "../../../public/assets/instagram.svg"
import twitter from "../../../public/assets/twitter.svg"
import facebook from "../../../public/assets/facebook.svg"
import phone from "../../../public/assets/phone.svg"
import email from "../../../public/assets/email.svg"
import { BiPlus, BiMinus } from "react-icons/bi"
type Props = {}

const Footer = (props: Props) => {
    const [expandedContent, setExpandedContent] = useState<boolean[]>([])
    const handleExpandedContent = (index: number) => {
        const updatedExpandedContent = [...expandedContent]
        updatedExpandedContent[index] = !updatedExpandedContent[index]
        setExpandedContent(updatedExpandedContent)
    }
    return (
        <footer className='bg-footer-background p-4 max-w-full '>
            <section className='py-8 lg:flex justify-between'>
                <article className='lg:w-[25rem]'>
                    <h3 className={`text-secondary text-4xl ${vidaLoka.variable} font-vidaLoka mb-4`}>Asad Ali</h3>
                    <p className='text-footer-text mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className='flex gap-4 mb-4'>
                        <Image width={30} src={instagram} alt='instagram' />
                        <Image width={30} src={twitter} alt='twitter' />
                        <Image width={30} src={facebook} alt='facebook' />

                    </div>
                </article>
                <article>
                    <div className='flex justify-between mb-2'>
                        <h4 className='text-secondary text-xl'>Products</h4>
                        <button onClick={() => handleExpandedContent(0)} className=' transition-all duration-300 transform xl:hidden'>
                            {expandedContent[0] ? (
                                <BiMinus style={{ fontSize: "20px", color: "#FFAF00" }} />
                            ) : (
                                <BiPlus style={{ fontSize: "20px", color: "#FFAF00" }} />
                            )}
                        </button>

                    </div>
                    {
                        expandedContent[0] && (
                            <ul className='transition-all duration-300 xl:hidden'>
                                <li className='text-footer-text mb-2'>Categories</li>
                                <li className='text-footer-text mb-2'>New Arrival</li>
                                <li className='text-footer-text mb-2'>Popular</li>
                                <li className='text-footer-text mb-2'>Sale</li>
                            </ul>
                        )
                    }
                    <ul className='transition-all duration-300 hidden xl:block'>
                        <li className='text-footer-text mb-2'>Categories</li>
                        <li className='text-footer-text mb-2'>New Arrival</li>
                        <li className='text-footer-text mb-2'>Popular</li>
                        <li className='text-footer-text mb-2'>Sale</li>
                    </ul>
                </article>

                <article>
                    <div className='flex justify-between mb-2'>
                        <h4 className='text-secondary text-xl'>Company</h4>
                        <button onClick={() => handleExpandedContent(1)} className='xl:hidden' >
                            {expandedContent[1] ? (
                                <BiMinus style={{ fontSize: "20px", color: "#FFAF00" }} />
                            ) : (
                                <BiPlus style={{ fontSize: "20px", color: "#FFAF00" }} />
                            )}
                        </button>
                    </div>
                    {
                        expandedContent[1] && (
                            <ul className='xl:hidden'>
                                <li className='text-footer-text mb-2'>About</li>
                                <li className='text-footer-text mb-2'>News</li>
                                <li className='text-footer-text mb-2'>Carrers</li>
                                <li className='text-footer-text mb-2'>Services</li>
                            </ul>
                        )
                    }
                    <ul className='hidden xl:block'>
                        <li className='text-footer-text mb-2'>About</li>
                        <li className='text-footer-text mb-2'>News</li>
                        <li className='text-footer-text mb-2'>Carrers</li>
                        <li className='text-footer-text mb-2'>Services</li>
                    </ul>

                </article>
                <article>
                    <div className='flex justify-between mb-2'>
                        <h4 className='text-secondary text-xl '>Support</h4>
                        <button onClick={() => handleExpandedContent(2)} className='xl:hidden' >
                            {expandedContent[2] ? (
                                <BiMinus style={{ fontSize: "20px", color: "#FFAF00" }} />
                            ) : (
                                <BiPlus style={{ fontSize: "20px", color: "#FFAF00" }} />
                            )}
                        </button>
                    </div>
                    {
                        expandedContent[2] && (
                            <ul className='xl:hidden'>
                                <li className='text-footer-text mb-2'>Help Center</li>
                                <li className='text-footer-text mb-2'>Delivery Service</li>
                                <li className='text-footer-text mb-2'>Privacy Policy</li>
                                <li className='text-footer-text mb-2'>Terms of Service</li>
                            </ul>
                        )
                    }
                    <ul className='hidden xl:block'>
                        <li className='text-footer-text mb-2'>Help Center</li>
                        <li className='text-footer-text mb-2'>Delivery Service</li>
                        <li className='text-footer-text mb-2'>Privacy Policy</li>
                        <li className='text-footer-text mb-2'>Terms of Service</li>
                    </ul>
                </article>
                <article className='lg:w-[20rem]'>
                    <h4 className='text-secondary text-xl mb-2 '>Contact</h4>
                    <p className='text-footer-text mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem asperiores veritatis ipsum, placeat deleniti.</p>
                    <div className='flex flex-col items-start gap-2' >
                        <div className='flex justify-center items-center gap-2'>
                            <Image src={phone} alt='phone' />
                            <p className='text-footer-text'>+12345678904</p>
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <Image src={email} alt='email' />
                            <p className='text-footer-text'>malikdanan@outlook.com</p>
                        </div>
                    </div>
                </article>
                {/* Larger devices */}

            </section>

            <section>
                <article className='border-t-2 border-secondary p-4'>
                    <p className='text-footer-text'>Copyright © 2022 Malik Adnan. All Right Reseved</p>
                </article>
            </section>
        </footer>
    )
}
export default Footer