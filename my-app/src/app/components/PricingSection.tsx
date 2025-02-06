import React from "react";
import PricingCard from "./PricingCard";
import H2Title from "./H2Title";

interface PricingSectionProps {
  title: string;
  cardsContent: Array<{ planName: string; targetAudience: string; price: string; paymentCycle: string; features: string[]; buttonLabel: string }>;
}

const PricingSection: React.FC<PricingSectionProps> = ({title, cardsContent}) => {
  return (
    <section
      id="pricing"
      className="min-h-screen w-full flex flex-col justify-center items-center bg-green-300"
    >
      <H2Title titleLabel={title} />
      <div className="flex flex-wrap gap-4 justify-center">
        {cardsContent.map((card, index) => (
          <PricingCard
            key={index}
            planName={card.planName}
            targetAudience={card.targetAudience}
            price={card.price}
            paymentCycle={card.paymentCycle}
            features={card.features}
            buttonLabel={card.buttonLabel}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
