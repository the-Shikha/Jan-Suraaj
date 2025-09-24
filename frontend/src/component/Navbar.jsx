import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/Jan_Suraaj_Logo.jpg";
import logoText from "../assets/images/Logo_text.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"
            src={logo}
            alt="logo"
          />
          <img
            className="h-8 sm:h-10 md:h-12 lg:h-14"
            src={logoText}
            alt="logoText"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-gray-700 font-medium transition duration-300 
                         after:content-[''] after:absolute after:left-0 after:-bottom-1 
                         after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all 
                         after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <div className="flex flex-col items-start space-y-4 p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-gray-700 font-medium transition duration-300 
                           after:content-[''] after:absolute after:left-0 after:-bottom-1 
                           after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all 
                           after:duration-300 hover:after:w-full"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
