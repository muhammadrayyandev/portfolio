// "use client";
// import { useState } from "react";
// import { Typewriter } from "react-simple-typewriter";
// import { Download } from "lucide-react";
// import MediaPlatform from "./MediaPlatform";

// const Hero = () => {
//   const [rotation, setRotation] = useState(0);

//   const images = [
//     "/canva-icon.webp",
//     "/logo.png",
//     "/ui-ux.png",
//     "/photopea.png",
//     "/Illustrator.svg",
//     "/Photoshop.svg",
//     "/Figma.svg",
//   ];

//   const handleRotate = () => {
//     setRotation(prev => prev + 120);
//   };

//   return (
//     <section className="w-full min-h-screen flex flex-col md:flex-row mt-20 md:mt-0">
//       <div className="relative bg-white w-full md:w-1/2 flex justify-center items-center p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden order-1 md:order-2">
//         <div className="absolute inset-0">
//           <div className="animate-dots opacity-60"></div>
//         </div>

//         <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96" data-aos="zoom-in">
//           <style jsx>{`
//             .auto-rotate {
//               animation: autoSpin 30s linear infinite;
//             }
//             @keyframes autoSpin {
//               from { transform: rotate(0deg); }
//               to { transform: rotate(360deg); }
//             }
//           `}</style>
//           <div className="auto-rotate relative w-full h-full">
//             <div
//               className="relative w-full h-full cursor-pointer transition-transform duration-1000"
//               style={{ transform: `rotate(${rotation}deg)` }}
//               onClick={handleRotate}
//             >
//               {/* Lines connecting images */}
//               {images.map((_, index) => (
//                 <div
//                   key={index}
//                   className="absolute top-1/2 left-1/2 w-24 sm:w-32 lg:w-40 h-0.5 bg-gray-400 transform -translate-y-1/2 origin-left"
//                   style={{ transform: `rotate(${index * 40}deg)` }}
//                 ></div>
//               ))}

//               {/* Images positioned in circle */}
//               {images.map((image, index) => {
//                 const angle = index * 40;
//                 // Responsive radius: mobile=96px, tablet=128px, desktop=160px
//                 const radius = typeof window !== 'undefined'
//                   ? (window.innerWidth < 640 ? 96 : window.innerWidth < 1024 ? 128 : 160)
//                   : 160;
//                 const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
//                 const y = Math.sin((angle - 90) * Math.PI / 180) * radius;

//                 return (
//                   <div
//                     key={index}
//                     className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//                     style={{
//                       transform: `translate(${x}px, ${y}px) rotate(-${rotation}deg)`
//                     }}
//                   >
//                     <img
//                       src={image}
//                       alt={`Tech ${index + 1}`}
//                       className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full object-cover shadow-lg bg-white p-1"
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-black text-white flex flex-col justify-center items-start w-full md:w-1/2 p-8 sm:p-12 md:p-16 lg:p-20 order-2 md:order-1">
//         <h1 data-aos="fade-right" className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 uppercase font-serif mt-26">
//           I'm Rayyan <br />
//           <span className="text-[#0EA5E9]">
//             <Typewriter
//               words={["Graphics", "UI-UX"]}
//               loop={true}
//               cursor
//               cursorStyle="|"
//               typeSpeed={150}
//               deleteSpeed={50}
//               delaySpeed={1200}
//             />
//           </span> <br />
//           <span className="text-2xl md:text-4xl">Designer</span>
//         </h1>
//         <p data-aos="fade-up" data-aos-delay="200" className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-10 leading-relaxed text-justify">
//           I craft intuitive, scalable UI/UX designs with a focus on clarity and usability
//           <br className="hidden sm:block" />
//           With a strong focus on great user experiences and modern design,
//           I’m passionate about turning ideas into functional,
//           high-performing digital products that make an impact. <br />
//           Continuously exploring new technologies to build clean, efficient, and maintainable solutions.
//         </p>

//         <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
//           <a
//             href="#projects"
//             className="bg-white text-black px-6 py-3 rounded-full font-semibold text-center hover:bg-gray-200 transition-all duration-300"
//           >
//             View My Designs
//           </a>
//           <a
//             href="#contact"
//             className="border border-[#0EA5E9] px-6 py-3 rounded-full font-semibold text-center hover:bg-white hover:text-black transition-all duration-300"
//           >
//             Contact Me
//           </a>
//           <a
//             href="/Muhammad Rayyan Amjad - Graphics & UI_UX Designer - Resume.pdf"
//             download
//             className="border border-[#0EA5E9] px-6 py-3 rounded-full font-semibold text-center hover:bg-white hover:text-black transition-all duration-300 flex gap-2"
//           >
//             <Download size={18} />
//             <span> Download CV</span>
//           </a>
//         </div>
//         <div data-aos="fade-up" data-aos-delay="600" className="">
//           <MediaPlatform />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";
import { Typewriter } from "react-simple-typewriter";
import { Download } from "lucide-react";
import MediaPlatform from "./MediaPlatform";

const Hero = () => {
  const techImages = [
    "/canva-icon.webp",
    "/logo.png",
    "/ui-ux.png",
    "/photopea.png",
    "/Illustrator.svg",
    "/Photoshop.svg",
    "/Figma.svg",
  ];

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row mt-20 md:mt-0">
      {/* Hero Text */}
      <div className="bg-black text-white flex flex-col justify-center items-start w-full md:w-1/2 p-8 sm:p-12 md:p-16 lg:p-20 order-2 md:order-1">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 uppercase font-serif animate-fadeIn">
          I'm Rayyan <br />
          <span className="text-[#0EA5E9]">
            <Typewriter
              words={["Graphics", "UI-UX"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={150}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </span>{" "}
          <br />
          <span className="text-2xl md:text-4xl">Designer</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-10 leading-relaxed text-justify animate-fadeIn animate-delay-200">
          I craft intuitive, scalable UI/UX designs with a focus on clarity and usability.
          <br className="hidden sm:block" />
          I’m passionate about turning ideas into functional, high-performing digital products
          that make an impact. Continuously exploring new technologies to build clean,
          efficient, and maintainable solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto animate-fadeIn animate-delay-400">
          <a
            href="#projects"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold text-center hover:bg-gray-200 transition-all duration-300"
          >
            View My Designs
          </a>
          <a
            href="#contact"
            className="border border-[#0EA5E9] px-6 py-3 rounded-full font-semibold text-center hover:bg-white hover:text-black transition-all duration-300"
          >
            Contact Me
          </a>
          <a
            href="/Muhammad Rayyan Amjad - Graphics & UI_UX Designer - Resume.pdf"
            download
            className="border border-[#0EA5E9] px-6 py-3 rounded-full font-semibold text-center hover:bg-white hover:text-black transition-all duration-300 flex gap-2 items-center"
          >
            <Download size={18} />
            <span>Download CV</span>
          </a>
        </div>

        {/* Social Media */}
        <div className="mt-6 animate-fadeIn animate-delay-600">
          <MediaPlatform />
        </div>
      </div>

      {/* Hero Image / Tech Icons Grid */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center p-8 sm:p-12 md:p-16 lg:p-20 order-1 md:order-2">
        <div className="grid grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {techImages.map((img, index) => (
            <div
              key={index}
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-white flex items-center justify-center shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-2xl animate-bounceIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img
                src={img}
                alt={`Tech ${index + 1}`}
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.5); }
          60% { opacity: 1; transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.8s forwards; }
        .animate-bounceIn { animation: bounceIn 0.6s forwards; }
        .animate-delay-200 { animation-delay: 0.2s; }
        .animate-delay-400 { animation-delay: 0.4s; }
        .animate-delay-600 { animation-delay: 0.6s; }
      `}</style>
    </section>
  );
};

export default Hero;
