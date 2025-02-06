import React from 'react';

export interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
  <div>
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} className="hover:underline text-gray-600">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>)
};



export default FooterColumn;
