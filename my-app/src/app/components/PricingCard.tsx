import React from "react";

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
    <div className="border border-gray-300 rounded-lg p-4 w-48 text-center flex-col">
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

      <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
        {buttonLabel}
      </button>
    </div>
  );
};

export default PricingCard;
