import React from "react";

interface ButtonProps {
  buttonLabel: string;
}

const Button: React.FC<ButtonProps> = ({ buttonLabel }) => {
  return (
    <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition w-full">
      {buttonLabel}
    </button>
  );
};

export default Button;
