import React from "react";
import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import H2Title from "./H2Title";

interface SecuritySectionProps {
  title: string;
  text: string;
  features: string[];
  image: string;
}

const SecuritySection: React.FC<SecuritySectionProps> = ({title, text, features, image}) => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center bg-blue-300">
      <H2Title titleLabel={title} />
      <div className="flex flex-row ustify-evenly items-center w-[90%]">
        <div className="w-[80%]">
          <p className="mb-4 font-sans text-center">{text}</p>
          <div className="flex flex-col gap-4 justify-center">
            {features.map((card, index) => (
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
            src={image}
            alt={title}
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
