// import React from "react";
// import leaderImg from "../assets/images/kumar_shivam.png";

// const HeroSection = () => {
//   return (
//     <section className="bg-white py-8 md:py-0 ">
//       <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
//         {/* Left Content */}
//         <div className="flex-1 text-center md:text-left">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
//             Kumar Shivam
//           </h1>
//           <h2 className="text-xl md:text-2xl font-semibold text-yellow-400 mt-2">
//             Youth Political Leader | District President
//           </h2>
//           <p className="mt-4 text-black text-lg max-w-xl">
//             Dedicated to serving people with integrity, transparency, and a vision for a stronger community. Leading initiatives to empower youth and bring positive change in society.
//           </p>
//           {/* CTA Buttons */}
//           <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-start justify-center">
//             <a
//               href="#about"
//               className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition"
//             >
//               Know More
//             </a>
//             <a
//               href="#contact"
//               className="px-6 py-3 border-2 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition"
//             >
//               Connect with Me
//             </a>
//           </div>
//         </div>
//         {/* Right Image */}
//         <div className="flex-1 flex justify-center md:justify-end">
//   <img
//     src={leaderImg}
//     alt="Leader"
//     className="w-96 h-[36rem] md:w-[50rem] md:h-[37rem] object-cover"
//   />
// </div>


//       </div>
//     </section>
//   );
// };

// export default HeroSection;


// import React from "react";
// import leaderImg from "../assets/images/kumar_shivam.png";

// const HeroSection = () => {
//   return (
//     <section className="bg-white py-8 md:py-0 border-b-2 border-yellow-400">
//       <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
//         {/* Left Content */}
//         <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
//             Kumar Shivam
//           </h1>
//           <h2 className="text-xl md:text-2xl font-semibold text-yellow-400 mt-2">
//             Youth Political Leader | District President
//           </h2>
//           <p className="mt-4 text-black text-lg max-w-xl">
//             Dedicated to serving people with integrity, transparency, and a vision for a stronger community. Leading initiatives to empower youth and bring positive change in society.
//           </p>

//           {/* Contact Icons */}
//           <div className="flex gap-6 mt-6 mb-6 md:mb-2">
//             <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-yellow-400 hover:text-yellow-600">
//               {/* LinkedIn Icon */}
//               <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
//                 <path d="M19 0h-14c-2.755 0-5 2.245-5 5v14c0 2.755 2.245 5 5 5h14c2.755 0 5-2.245 5-5v-14c0-2.755-2.245-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.798-1.75-1.779 0-.981.784-1.779 1.75-1.779s1.75.798 1.75 1.779c0 .981-.784 1.779-1.75 1.779zm13.5 10.268h-3v-4.785c0-1.175-.425-1.978-1.49-1.978-.813 0-1.297.549-1.512 1.08-.078.19-.097.455-.097.724v4.96h-3v-9h3v1.235c.398-.614 1.112-1.486 2.707-1.486 1.98 0 3.471 1.293 3.471 4.074v4.177z"/>
//               </svg>
//             </a>

//             <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-yellow-400 hover:text-yellow-600">
//               {/* Twitter Icon */}
//               <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
//                 <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.563-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.37 4.482c-4.083-.195-7.7-2.158-10.125-5.134a4.822 4.822 0 0 0-.663 2.475c0 1.708.87 3.217 2.188 4.099a4.903 4.903 0 0 1-2.228-.616v.06a4.916 4.916 0 0 0 3.946 4.808 4.996 4.996 0 0 1-1.292.168c-.316 0-.624-.03-.927-.086a4.922 4.922 0 0 0 4.6 3.417 9.867 9.867 0 0 1-6.102 2.104c-.395 0-.785-.023-1.17-.068a13.945 13.945 0 0 0 7.557 2.212c9.054 0 14.002-7.497 14.002-13.986 0-.21 0-.423-.015-.633a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"/>
//               </svg>
//             </a>

//             <a href="mailto:example@example.com" aria-label="Email" className="text-yellow-400 hover:text-yellow-600">
//               {/* Email Icon */}
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-6 h-6" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M4 4h16v16H4z" />
//                 <polyline points="22,6 12,13 2,6" />
//               </svg>
//             </a>

//             <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-yellow-400 hover:text-yellow-600">
//               {/* Facebook Icon */}
//               <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
//                 <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54v-2.205c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.878h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 17 22 12z"/>
//               </svg>
//             </a>
//           </div>

//           {/* CTA Buttons */}
//           <div className="mt-0 flex flex-col sm:flex-row gap-4 sm:justify-start justify-center w-full">
//             <a
//               href="#about"
//               className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition w-full sm:w-auto text-center"
//             >
//               Know More
//             </a>
//             <a
//               href="#contact"
//               className="px-6 py-3 border-2 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition w-full sm:w-auto text-center"
//             >
//               Connect with Me
//             </a>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="flex-1 flex justify-center md:justify-end">
//           <img
//             src={leaderImg}
//             alt="Leader"
//             className="w-96 h-[36rem] md:w-[50rem] md:h-[37rem] object-cover rounded-2xl"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import React from "react";
import leaderImg from "../assets/images/kumar_shivam.png";

const HeroSection = () => {
  return (
    <section className="bg-white py-8 md:py-0 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            Kumar Shivam
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-yellow-500 mt-2">
            Youth Political Leader | District President
          </h2>
          <p className="mt-4 text-black text-lg max-w-xl">
            Dedicated to serving people with integrity, transparency, and a vision for a stronger community. Leading initiatives to empower youth and bring positive change in society.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-start justify-center w-full max-w-md">
            <a
              href="#about"
              className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition w-full sm:w-auto text-center"
            >
              Know More
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-gray-700 text-gray-800 font-semibold rounded-lg hover:bg-gray-800 hover:text-white transition w-full sm:w-auto text-center"
            >
              Connect with Me
            </a>
          </div>

          {/* Contact Icons below buttons */}
          <div className="flex gap-6 mt-6">
            {[
              { href: "https://linkedin.com/in/yourprofile", label: "LinkedIn", svg: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.755 0-5 2.245-5 5v14c0 2.755 2.245 5 5 5h14c2.755 0 5-2.245 5-5v-14c0-2.755-2.245-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.798-1.75-1.779 0-.981.784-1.779 1.75-1.779s1.75.798 1.75 1.779c0 .981-.784 1.779-1.75 1.779zm13.5 10.268h-3v-4.785c0-1.175-.425-1.978-1.49-1.978-.813 0-1.297.549-1.512 1.08-.078.19-.097.455-.097.724v4.96h-3v-9h3v1.235c.398-.614 1.112-1.486 2.707-1.486 1.98 0 3.471 1.293 3.471 4.074v4.177z"/>
                </svg>
              )},
              { href: "https://twitter.com/yourprofile", label: "Twitter", svg: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.563-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.37 4.482c-4.083-.195-7.7-2.158-10.125-5.134a4.822 4.822 0 0 0-.663 2.475c0 1.708.87 3.217 2.188 4.099a4.903 4.903 0 0 1-2.228-.616v.06a4.916 4.916 0 0 0 3.946 4.808 4.996 4.996 0 0 1-1.292.168c-.316 0-.624-.03-.927-.086a4.922 4.922 0 0 0 4.6 3.417 9.867 9.867 0 0 1-6.102 2.104c-.395 0-.785-.023-1.17-.068a13.945 13.945 0 0 0 7.557 2.212c9.054 0 14.002-7.497 14.002-13.986 0-.21 0-.423-.015-.633a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"/>
                </svg>
              )},
              { href: "mailto:example@example.com", label: "Email", svg: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-6 h-6" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16v16H4z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              )},
              { href: "https://facebook.com/yourprofile", label: "Facebook", svg: (
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
    </section>
  );
};

export default HeroSection;
