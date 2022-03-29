import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import Benefits from "../Benefit/Benefits";

const PricingOption = (props) => {
  const { name, price, benefits } = props.option;
  return (
    <div className="bg-white p-4 rounded">
      <h3 className="bg-indigo-200 rounded text-xl font-bold p-2">{name}</h3>
      <p>
        <span className="text-5xl font-bold">{price}</span>
        <span className="text-xl font-bold text-gray-500">/mo</span>
      </p>
      <div>
        {benefits.map((benefit) => (
          <Benefits benefit={benefit}></Benefits>
        ))}
      </div>
      <button className="bg-green-500 justify-center flex w-full py-2 font-bold rounded mt-6 text-white hover:text-green-700 ">
        Buy Now<ArrowRightIcon className="w-5 h-5 ml-2 "></ArrowRightIcon>
      </button>
    </div>
  );
};

export default PricingOption;
