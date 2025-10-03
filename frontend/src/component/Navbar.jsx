import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/Jan_Suraaj_Logo.jpg";
import logoText from "../assets/images/Logo_text.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t("home"), href: "#home" },
    { name: t("about"), href: "#about" },
    { name: t("services"), href: "#services" },
    { name: t("contact"), href: "#contact" },
    { name: t("gallery"), href: "#gallery" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // close mobile drawer after language change
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img className="w-14 h-14 md:w-20 md:h-20" src={logo} alt="logo" />
          <img className="h-8 md:h-12" src={logoText} alt="logoText" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 relative">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative font-medium text-gray-700 transition-colors duration-300
                         after:content-[''] after:absolute after:left-0 after:-bottom-1 
                         after:w-0 after:h-0.5 after:bg-yellow-500 after:transition-all 
                         after:duration-300 hover:text-yellow-500 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}

          {/* Language Switch */}
          <div className="flex items-center gap-2 ml-6">
            <span className="text-sm font-medium text-gray-600">EN</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={i18n.language === "hi"}
                onChange={(e) =>
                  changeLanguage(e.target.checked ? "hi" : "en")
                }
              />
              <div className="w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-yellow-400 transition-colors duration-300 px-[2px]"></div>
              <div className="absolute left-[2px] top-[2px] w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 peer-checked:translate-x-6"></div>
            </label>
            <span className="text-sm font-medium text-gray-600">हिंदी</span>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
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
                onClick={() => setIsOpen(false)}
                className="font-medium text-gray-700 transition-colors duration-300
                           hover:text-yellow-500"
              >
                {link.name}
              </a>
            ))}

            {/* Language Switch */}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-sm font-medium text-gray-600">EN</span>
              <label className="relative inline-flex items-center cursor-pointer w-12 h-6">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={i18n.language === "hi"}
                  onChange={(e) =>
                    changeLanguage(e.target.checked ? "hi" : "en")
                  }
                />
                <div className="absolute w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-yellow-400 transition-colors duration-300"></div>
                <div className="absolute left-[2px] top-[2px] w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 peer-checked:translate-x-6"></div>
              </label>
              <span className="text-sm font-medium text-gray-600">हिंदी</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
