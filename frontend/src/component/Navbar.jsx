import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/Jan_Suraaj_Logo.jpg";
import logoText from "../assets/images/Logo_text.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t("home"), href: "#" },
    { name: t("about"), href: "#" },
    { name: t("services"), href: "#" },
    { name: t("contact"), href: "#" },
    { name: t("gallery"), href: "#" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
    setIsOpen(false); // also close mobile drawer after language change
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
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
              className="relative text-gray-700 font-medium"
            >
              {link.name}
            </a>
          ))}

          {/* Language Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsLangOpen(true)}
            onMouseLeave={() => setIsLangOpen(false)}
          >
            <button className="flex items-center gap-1 text-gray-700 font-medium">
              {t("language")} <ChevronDown size={16} />
            </button>
            {isLangOpen && (
              <div className="absolute top-full left-0 mt-2 w-32 bg-white shadow-lg rounded-md border">
                <button
                  onClick={() => changeLanguage("en")}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage("hi")}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  हिंदी
                </button>
              </div>
            )}
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
                className="relative text-gray-700 font-medium transition duration-300
                          after:content-[''] after:absolute after:left-0 after:-bottom-1
                          after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all
                          after:duration-300 hover:after:w-full"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            {/* Language Dropdown (Mobile) */}
            <div className="relative w-full">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 relative text-gray-700 font-medium transition duration-300
                           after:content-[''] after:absolute after:left-0 after:-bottom-1
                           after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all
                           after:duration-300 hover:after:w-full"
              >
                {t("language")} <ChevronDown size={16} />
              </button>
              {isLangOpen && (
                <div className="mt-2 w-32 bg-white shadow-lg rounded-md border">
                  <button
                    onClick={() => changeLanguage("en")}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage("hi")}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    हिंदी
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;




// import React, { useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import logo from "../assets/images/Jan_Suraaj_Logo.jpg";
// import logoText from "../assets/images/Logo_text.jpg";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLangOpen, setIsLangOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "#" },
//     { name: "About", href: "#" },
//     { name: "Services", href: "#" },
//     { name: "Contact", href: "#" },
//     { name: "Gallery", href: "#" },
//   ];

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
//         {/* Logo Section */}
//         <div className="flex items-center space-x-2">
//           <img
//             className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"
//             src={logo}
//             alt="logo"
//           />
//           <img
//             className="h-8 sm:h-10 md:h-12 lg:h-14"
//             src={logoText}
//             alt="logoText"
//           />
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-8 relative">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="relative text-gray-700 font-medium transition duration-300
//                         after:content-[''] after:absolute after:left-0 after:-bottom-1
//                         after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all
//                         after:duration-300 hover:after:w-full"
//             >
//               {link.name}
//             </a>
//           ))}

//           {/* Language Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => setIsLangOpen(true)}
//             onMouseLeave={() => setIsLangOpen(false)}
//           >
//             <button
//               className="flex items-center gap-1 relative text-gray-700 font-medium transition duration-300
//                          after:content-[''] after:absolute after:left-0 after:-bottom-1
//                          after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all
//                          after:duration-300 hover:after:w-full"
//             >
//               Language <ChevronDown size={16} />
//             </button>
//             {isLangOpen && (
//               <div className="absolute top-full left-0 mt-2 w-32 bg-white shadow-lg rounded-md border">
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   English
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Hindi
//                 </a>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           className="md:hidden text-gray-700"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Drawer */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-md border-t">
//           <div className="flex flex-col items-start space-y-4 p-4">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="relative text-gray-700 font-medium transition duration-300
//                           after:content-[''] after:absolute after:left-0 after:-bottom-1
//                           after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all
//                           after:duration-300 hover:after:w-full"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {link.name}
//               </a>
//             ))}

//             {/* Language Dropdown (Mobile) */}
//             <div className="relative w-full">
//               <button
//                 onClick={() => setIsLangOpen(!isLangOpen)}
//                 className="flex items-center gap-1 relative text-gray-700 font-medium transition duration-300
//                            after:content-[''] after:absolute after:left-0 after:-bottom-1
//                            after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all
//                            after:duration-300 hover:after:w-full"
//               >
//                 Language <ChevronDown size={16} />
//               </button>
//               {isLangOpen && (
//                 <div className="mt-2 w-32 bg-white shadow-lg rounded-md border">
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     English
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     Hindi
//                   </a>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
