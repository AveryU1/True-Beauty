import React from "react";
import { AiFillStar } from 'react-icons/ai'
import ramaDerecha from "../../../public/assets/Group (1).svg"
import ramaIzquierda from "../../../public/assets/Group.svg"
import Image from "next/image";


const Clients = () => {
    return (
        <section className="md:flex lg:items-end md:justify-between  m-auto  max-w-[1440px] w-[90%] mt-[2rem]" id="story">
            <div className="flex justify-center items-center xl:w-1/2">
                <div className="w-1/2 xl:w-1/4">
                    <Image src={ramaIzquierda} alt="rama izquierda imagen" />
                </div>
                <div className="w-1/2 xl:w-3/4">
                    <h2 className="font-semibold text-xl xl:w-max xl:inline-flex 2xl:text-4xl text-primary xl:gap-[10px]">
                        Trusted By Over<span className="text-secondary">400,000</span>+ <span className="text-secondary">Client</span>
                    </h2>
                    <h2 className="font-semibold text-xl mt-4 xl:text-4xl text-primary">Worldwide since <span className="text-secondary">2002</span></h2>
                </div>
            </div>
            <div className="flex justify-center items-center xl:w-1/2">
                <div className="md:flex md:items-start md:gap-4 xl:gap-16 items-center w-1/2 xl:w-3/4 xl:justify-end">
                    <div className="">
                        <h2 className="font-semibold text-xl pb-4 text-primary xl:text-4xl">4.6</h2>
                        <div className="flex gap-2">

                            <AiFillStar style={{ color: '#FFAF00' }} />
                            <AiFillStar style={{ color: '#FFAF00' }} />
                            <AiFillStar style={{ color: '#FFAF00' }} />
                            <AiFillStar style={{ color: '#FFAF00' }} />
                            <AiFillStar style={{ color: '#FFAF00' }} />
                        </div>
                        <p className="font-normal text-primary xl:pt-2">3500 Ratings</p>
                    </div>
                    <div>
                        <h2 className="font-semibold text-xl pb-4 text-primary xl:text-4xl">6M+</h2>
                        <p className="text-primary">Worldwide Product <br />Sale per year</p>
                    </div>
                </div>
                <div className="w-1/2 xl:w-1/4">
                    <Image src={ramaDerecha} alt="rama derecha imagen" />
                </div>
            </div>
        </section>

    );
};

export default Clients;
