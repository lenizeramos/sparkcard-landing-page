import React from "react";
import Card from "./Card";
import H2Title from "./H2Title";

interface featuresSectionProps {
  title: string;
  cardsContent: Array<{ image: string; title: string; description: string }>;
}

const FeaturesSection: React.FC<featuresSectionProps> = ({title, cardsContent}) => {
  return (
    <section
      id="features"
      className="min-h-screen w-full flex flex-col justify-center items-center bg-pink-300"
    >
      <H2Title titleLabel={title} />
      <div className="flex flex-wrap gap-4 justify-center">
        {cardsContent.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
