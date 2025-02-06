import React from "react";
import Button from "./Button";
import H2Title from "./H2Title";

interface EmailSectionProps {
  h2: string;
  text: string;
  placeholder: string;
  buttonLabel: string;
  span: string;
};

const EmailSection: React.FC<EmailSectionProps> = ({ h2, text, placeholder, buttonLabel, span }) => {
  return (
    <section
      id="email"
      className="h-[75vh] w-full flex-1 flex flex-col justify-center items-center bg-gray-300"
    >
      <div className="w-[90%] flex flex-col ustify-center items-center">
        <H2Title titleLabel={h2} />
        <p className="mb-4">{text}</p>
        <div className="flex flex-row gap-2 mb-4 sm:w-[60%] md:w-[70%] lg:w-[30%]">
          <input
            type="email"
            name="emailInput"
            id="emailInput"
            placeholder={placeholder}
            className="text-left pl-3 focus:outline-none focus:ring-2 focus:ring-gray-900 w-[65%]"
          />
          <div className="w-[35%]">
            <Button buttonLabel={buttonLabel} />
          </div>
        </div>
        <span className="text-sm">{span}</span>
      </div>
    </section>
  );
};

export default EmailSection;
