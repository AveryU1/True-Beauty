import React from "react";
import Image from "next/image";
import { Items } from "../../../typings";
interface Props {
  benefits?: Items[],
  comestics?: Items[]
}
const ShowItems = ({ benefits, comestics }: Props) => {
  return (
    <ul className="flex flex-col gap-6 md:flex-row items-center lg:justify-between max-w-[1440px] m-auto text-primary w-[90%]">
      {
        benefits?.map(item => (
        <li className="w-52 flex flex-col items-center text-center text-tertiary" key={item.name}>
          <Image src={item.image} alt="benefit-image" loading="lazy"/>
          <h3 className="font-semibold py-2">{item.name}</h3>
          <p>{item.text}</p>
        </li>
      ))}
      {
        !benefits && comestics && comestics.map(comestic => (
          <li className="w-52 flex flex-col items-center text-center text-tertiary" key={comestic.name}>
          <Image src={comestic.image} alt="benefit-image" loading="lazy"/>
          <h3 className="font-semibold py-2">{comestic.name}</h3>
          <p>{comestic.text}</p>
        </li>
        ))
      }
    </ul>
  );
};
export default ShowItems
