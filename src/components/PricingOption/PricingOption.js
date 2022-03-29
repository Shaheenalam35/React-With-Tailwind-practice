import React from "react";

const PricingOption = (props) => {
  const { name, price } = props.option;
  return (
    <div className="bg-white p-4 rounded">
      <h3 className="bg-indigo-200 rounded text-xl font-bold p-2">{name}</h3>
      <p>
        <span className="text-5xl font-bold">{price}</span>
        <span className="text-xl font-bold text-gray-500">/mo</span>
      </p>
    </div>
  );
};

export default PricingOption;
