import React from "react";
import { benefits } from "../constants";
import Image from "next/image";
import natural from "../../../public/assets/natural.svg"
type Props = {}
const ShowItems = (props: Props) => {
  return (
    <ul className="flex flex-col items-center gap-6 md:flex-row">
      {benefits.map(benefit => (
        <li className="w-52 flex flex-col items-center text-center" key={benefit.title}>
          <Image src={benefit.image} alt="benefit-image" />
          <h3 className="font-semibold py-2">{benefit.title}</h3>
          <p>{benefit.content}</p>
        </li>
      ))}
    </ul>
  );
};
export default ShowItems
