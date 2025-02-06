import React from "react";
import Image from "next/image";

const sectionContent = {
  h2: "Security & Trust",
  text: "At SparkCard, we take your security seriously. Our state-of-the-art systems ensure your money and data are always protected.",
  features: [
    "Bank-level encryption",
    "Australian government guarantee for deposits",
    "24/7 fraud monitoring",
    "Instant card freeze via app",
  ],
  image: "/images/image1.jpg",
};

const SecuritySection: React.FC = () => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center bg-blue-300">
      <h2>{sectionContent.h2}</h2>
      <div>
        <p>{sectionContent.text}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          {sectionContent.features.map((card, index) => (
            <div key={index}>
              <p>{card}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Image
          src={sectionContent.image}
          alt={sectionContent.h2}
          className="rounded-full"
          width={80}
          height={80}
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default SecuritySection;
