import React from "react";
import Button from "./Button";
import { Check } from "lucide-react";

interface PricingCardProps {
  planName: string;
  targetAudience: string;
  price: string;
  paymentCycle: string;
  features: string[];
  buttonLabel: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  planName,
  targetAudience,
  price,
  paymentCycle,
  features,
  buttonLabel,
}) => {
  return (
    <div className="border  border-white bg-white rounded-lg p-4 w-[90%] sm:w-60 flex-col">
      <h2 className="text-xl font-semibold mb-2">{planName}</h2>
      <p className="text-gray-500 mb-4">{targetAudience}</p>

      <div className="text-2xl font-bold mb-4">
        <p>{price}</p>
        <span className="text-sm"> {paymentCycle}</span>
      </div>

      <div className="mb-4">
        <ul className="list-none text-left pl-0">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-black flex ">
              <Check className="mr-2 text-green-500" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center w-full"><Button buttonLabel={buttonLabel} /></div>
      
    </div>
  );
};

export default PricingCard;
