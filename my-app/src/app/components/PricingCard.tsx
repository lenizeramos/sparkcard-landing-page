import React from "react";
import Button from "./Button";

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
    <div className="border  border-white bg-white rounded-lg p-4 w-48 text-center flex-col">
      <h2 className="text-xl font-semibold mb-2">{planName} Plan</h2>
      <p className="text-gray-500 mb-4">{targetAudience}</p>

      <div className="text-2xl font-bold mb-4">
        {price} <span className="text-sm">/ {paymentCycle}</span>
      </div>

      <div className="mb-4">
        <ul className="list-disc text-left pl-4">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-700">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <Button buttonLabel={buttonLabel} />
    </div>
  );
};

export default PricingCard;
