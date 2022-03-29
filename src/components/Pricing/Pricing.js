import React from "react";

import PricingOption from "../PricingOption/PricingOption";

const Pricing = () => {
  const pricingOptions = [
    {
      id: 1,
      name: "Free",
      price: 0,
      benefits: [
        "Life time free",
        "unlimited deals",
        "localised deals",
        "fantastic offer",
        "crazy deals",
      ],
    },
    {
      id: 2,
      name: "Regular",
      price: 9.99,
      benefits: [
        "regular useable",
        "unlimited deals",
        "fantastic offer",
        "crazy deals",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 19.99,
      benefits: [
        "Life time free",
        "unlimited offer",
        "localised deals",
        "fantastic deals",
        "exciting deals",
      ],
    },
  ];
  return (
    <div className="bg-indigo-300 p-4 mt-8">
      <h1 className="text-4xl text-white font-serif ">
        Best deals of the town
      </h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quaerat
        nihil minus aperiam nisi excepturi illo quibusdam doloremque vel
        aliquam?
      </p>
      <div className="grid grid-cols-md-3 mt-8 gap-3">
        {pricingOptions.map((option) => (
          <PricingOption key={option.id} option={option}></PricingOption>
        ))}
      </div>
      <div>
        <h3 className="text-xl text-left">Benefits</h3>
      </div>
    </div>
  );
};

export default Pricing;
