import React from "react";
import { benefits } from "../constants";
import Image from "next/image";
import natural from "../../../public/assets/natural.svg"
type Props = {}
const ShowItems = (props: Props) => {
  return (
    <ul className="flex flex-col items-center justify-between max-w-[1440px] w-[90%] gap-6 md:flex-row m-auto">
      {benefits.map(benefit => (
        <li className="w-52 flex flex-col items-center text-center" key={benefit.name}>
          <Image src={benefit.image} alt="benefit-image" />
          <h3 className="font-semibold py-2">{benefit.name}</h3>
          <p>{benefit.text}</p>
        </li>
      ))}
    </ul>
  );
};
export default ShowItems
