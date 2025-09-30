import React from "react";
import { useTranslation } from "react-i18next";
import leaderImg from "../assets/images/kumar_shivam.png";
import "i18next";

const HeroSection = ({ children }) => {         // Accept children as prop
  const { t } = useTranslation();

  return (
    <section className=" py-8 md:py-0 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            {t("leaderName")}
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-yellow-500 mt-2">
            {t("leaderTitle")}
          </h2>
          <p className="mt-4 text-black text-lg max-w-xl">
            {t("leaderDescription")}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-start justify-center w-full max-w-md">
            <a
              href="#about"
              className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition w-full sm:w-auto text-center"
            >
              {t("knowMore")}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-gray-700 text-gray-800 font-semibold rounded-lg hover:bg-gray-800 hover:text-white transition w-full sm:w-auto text-center"
            >
              {t("connect")}
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-6">
            {[
              {
                href: "https://instagram.com",
                label: "Instagram",
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zM12 7.33a4.67 4.67 0 1 1 0 9.34 4.67 4.67 0 0 1 0-9.34zm5-.97a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16z"/>
                  <circle cx="12" cy="12" r="3.2"/>
                  </svg>
                )
              },

              { href: "https://twitter.com", label: "Twitter", svg: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.563-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.37 4.482c-4.083-.195-7.7-2.158-10.125-5.134a4.822 4.822 0 0 0-.663 2.475c0 1.708.87 3.217 2.188 4.099a4.903 4.903 0 0 1-2.228-.616v.06a4.916 4.916 0 0 0 3.946 4.808 4.996 4.996 0 0 1-1.292.168c-.316 0-.624-.03-.927-.086a4.922 4.922 0 0 0 4.6 3.417 9.867 9.867 0 0 1-6.102 2.104c-.395 0-.785-.023-1.17-.068a13.945 13.945 0 0 0 7.557 2.212c9.054 0 14.002-7.497 14.002-13.986 0-.21 0-.423-.015-.633a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"/>
                </svg>
              )},
              { href: "mailto:kkkshivam@gmail.com", label: "Email", svg: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-6 h-6" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16v16H4z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              )},
              { href: "https://facebook.com", label: "Facebook", svg: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54v-2.205c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.878h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 17 22 12z"/>
                </svg>
              )}
            ].map(({href, label, svg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-700 hover:text-gray-900 transition"
              >
                {svg}
              </a>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end w-full max-w-full">
          <img
            src={leaderImg}
            alt="Leader"
            className="w-full max-w-sm md:max-w-lg lg:max-w-xl h-auto rounded-2xl object-cover"
          />
        </div>
      </div>
      {/* Render children (like <HelpJanta />) below hero content */}
      {children}
    </section>
  );
};

export default HeroSection;
