import React from "react";
import TestimonialCard from "./TestimonialCard";
import H2Title from "./H2Title";

interface TestimonialSectionProps {
  title: string;
  cardsContent: Array<{
    profileImage: string;
    name: string;
    userType: string;
    testimonial: string;
  }>;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  title,
  cardsContent,
}) => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center bg-green-300">
      <H2Title titleLabel={title} />
      <div className="flex flex-wrap gap-4 justify-center">
        {cardsContent.map((card, index) => (
          <TestimonialCard
            key={index}
            profileImage={card.profileImage}
            name={card.name}
            userType={card.userType}
            testimonial={card.testimonial}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
