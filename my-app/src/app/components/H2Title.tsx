import React from "react";

interface TitleProps {
  titleLabel: string;
}

const H2Title: React.FC<TitleProps> = ({ titleLabel }) => {
  return (
    <h2 className="text-4xl font-bold font-mono text-center mb-6">
      {titleLabel}
    </h2>
  );
};

export default H2Title;
