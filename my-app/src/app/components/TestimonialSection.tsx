import React from "react";
import TestimonialCard from "./TestimonialCard";
import H2Title from "./H2Title";

const cardsContent = [
  {
    profileImage: "",
    name: "Sarah L.",
    userType: "SparkCard User",
    testimonial:
      "'SparkCard helped mebuild my credit score while I was in uni. Brillant!'",
  },
  {
    profileImage: "",
    name: "Tom K.",
    userType: "SparkCard User",
    testimonial:
      "'The cashback rewards are great, and I love how easy it is to track my spending'",
  },
  {
    profileImage: "",
    name: "Emma R.",
    userType: "SparkCard User",
    testimonial:
      "'Finally, a card that doesn't make me feel like I'm being taken advantage of. Thanks, SparkCard!'",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center bg-green-300">
      <H2Title titleLabel={"What Our Users Say"} />
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
