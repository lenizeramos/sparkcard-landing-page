"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "How it Works", href: "#how-it-works" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Get Started", href: "#email" },
];
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  /* const scrollToEmailSection = () => {
    const emailSection = document.getElementById('email');
    if (emailSection) {
      emailSection.scrollIntoView({ behavior: 'smooth' });
    }
  }; */

  return (
    <nav className="bg-[#B4FCB6] shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-bold text-gray-900">
            SparkCard
          </Link>
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "text-blue-700 font-semibold"
                    : "text-gray-800"
                } hover:text-blue-600 transition-colors`}
              >
                {link.name}
              </Link>
            ))}
            {/* <button className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition" onClick={scrollToEmailSection} >
              Get Started
            </button> */}
          </div>

          <button
            className="md:hidden text-gray-700 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#B4FCB6] p-4 flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block text-center py-2 ${
                pathname === link.href
                  ? "text-blue-700 font-semibold"
                  : "text-gray-800"
              } hover:text-blue-600 transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <button className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
