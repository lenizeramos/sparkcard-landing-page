import React from "react";
import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import H2Title from "./H2Title";

const sectionContent = {
  h2: "Security & Trust",
  text: "At SparkCard, we take your security seriously. Our state-of-the-art systems ensure your money and data are always protected.",
  features: [
    "Bank-level encryption",
    "Australian government guarantee for deposits",
    "24/7 fraud monitoring",
    "Instant card freeze via app",
  ],
  image: "/images/padlock.png",
};

const SecuritySection: React.FC = () => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center bg-blue-300">
      <H2Title titleLabel={sectionContent.h2} />
      <div className="flex flex-row ustify-evenly items-center w-[90%]">
        <div className="w-[80%]">
          <p className="mb-4 font-sans text-center">{sectionContent.text}</p>
          <div className="flex flex-col gap-4 justify-center">
            {sectionContent.features.map((card, index) => (
              <div key={index} className="flex">
                <CircleCheckBig
                  style={{ marginRight: "8px" }}
                  className=" text-green-700"
                />
                <p>{card}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[20%] flex justify-center">
          <Image
            src={sectionContent.image}
            alt={sectionContent.h2}
            className="rounded-full bg-green-500 p-5 border border-black"
            width={100}
            height={100}
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
