import React from "react";
import { AiFillStar } from 'react-icons/ai'
import ramaDerecha from "../../../public/assets/Group (1).svg"
import ramaIzquierda from "../../../public/assets/Group.svg"
import Image from "next/image";
type Props = {};

const Clients = (props: Props) => {
    return (
        <section className="md:flex md:justify-between">
            <div className="flex justify-center items-center">
                <div>
                    <Image src={ramaIzquierda} alt="rama izquierda imagen" />
                </div>
                <div>
                    <h2 className="font-semibold text-xl">
                        Trusted By Over <span className="text-secondary">400,000</span>+ <span className="text-secondary">Client</span>
                    </h2>
                    <h2 className="font-semibold text-xl mt-4">Worldwide since <span className="text-secondary">2002</span></h2>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="md:flex md:items-start md:gap-4 items-center">
                    <div>
                        <h2 className="font-semibold text-xl pb-4 ">4.6</h2>
                        <div className="flex gap-2">

                            <AiFillStar style={{ color: '#FFAF00' }} />
                            <AiFillStar style={{ color: '#FFAF00' }} />
                            <AiFillStar style={{ color: '#FFAF00' }} />
                            <AiFillStar style={{ color: '#FFAF00' }} />
                            <AiFillStar style={{ color: '#FFAF00' }} />
                        </div>
                        <p className="font-normal">3500 Ratings</p>
                    </div>
                    <div>
                        <h2 className="font-semibold text-xl pb-4 ">6M+</h2>
                        <p>Worldwide Product <br />Sale per year</p>
                    </div>
                </div>
                <div>
                    <Image src={ramaDerecha} alt="rama derecha imagen" />
                </div>
            </div>
        </section>

    );
};

export default Clients;
