import React from "react";
import plantImageLeft from "../../../public/assets/Group (2).svg";
import rectangule from "../../../public/assets/Image.svg";
import creamProduct from "../../../public/assets/image 38 2.svg";
import dropsProduct from "../../../public/assets/imageSerum.svg";
import plantImageRight from "../../../public/assets/Group 276.svg";
import { BiCheck } from "react-icons/bi";
import Image from "next/image";
type Props = {};

const Source = (props: Props) => {
    return (
        <section className="flex flex-col w-[90%] m-auto mt-[2rem]" id="products">
            <div className="">
                <div className="flex">
                    <div className="hidden">
                        <Image src={plantImageLeft} alt="imagen de planta izquierda" />
                    </div>
                    <article className="text-left ">
                        <h2 className="text-xl font-semibold text-primary xl:text-4xl">
                            The power of Purity Source
                        </h2>
                        <p className="text-tertiary">
                            Inspired by hydration and Japan’s beauty rituals, uruoi focuses on
                            the core elements of skincare to combine powerful ingredients backed
                            by science and authentically Japanese minimalist philosophy. A
                            blessing of water for every skin. Relieving dryness with gentle
                            touch.
                        </p>
                    </article>
                </div>
                <ul>
                    <li className="flex items-center justify-start">
                        <div className=" bg-secondary backdrop-opacity-10  flex justify-center items-center rounded-full h-[20px] w-[20px]">
                            <BiCheck />
                        </div>
                        <p>Our Cosmetics is 100% from Natural Ingredients</p>
                    </li>
                    <li className="flex items-center justify-start">
                        <div className=" bg-secondary backdrop-opacity-10 flex justify-center items-center rounded-full h-[20px] w-[20px]">
                            <BiCheck />
                        </div>
                        <p>All of packaging process by modern machine</p>
                    </li>
                    <li className="flex items-center justify-start">
                        <div className=" bg-secondary backdrop-opacity-10 flex justify-center items-center rounded-full h-[20px] w-[20px]">
                            <BiCheck />
                        </div>
                        <p>You can return our product if it's not original</p>
                    </li>
                </ul>
            </div>
            <div >
                <div className="hidden">
                    <Image src={plantImageRight} alt="imagen de planta derecha" />
                </div>
                <div className="relative ">
                    <div className="py-[150px] relative flex justify-center">
                        <Image src={rectangule} alt="rectangule image" />
                        <div className="absolute top-0">

                            <Image className="pr-4" src={creamProduct} alt="cream-product" />
                        </div>
                    </div>
                    <div className="hidden absolute bottom-0 right-0 w-[250px]">

                        <div className="relative ">
                            <Image src={rectangule} alt="rectangule-image" />
                            <div className="absolute bottom-0 right-0">
                                <Image className="relative" src={dropsProduct} width={150} alt="dropsProduct" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Source;
