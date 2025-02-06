import React from "react";
import FooterColumn, { FooterLink } from "./FooterColumn";

const Footer: React.FC = () => {
  const productLinks: FooterLink[] = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#" },
  ];

  const companyLinks: FooterLink[] = [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const legalLinks: FooterLink[] = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ];

  const connectLinks: FooterLink[] = [
    { label: "Twitter", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
  ];

  return (
    <footer className="bg-gray-100 text-black py-8">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <FooterColumn title="Product" links={productLinks} />
        <FooterColumn title="Company" links={companyLinks} />
        <FooterColumn title="Legal" links={legalLinks} />
        <FooterColumn title="Connect" links={connectLinks} />
      </div>

      <div className="text-center mt-8 pt-4">
        <p className="text-sm text-gray-800">
          © 2023 SparkCard. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
