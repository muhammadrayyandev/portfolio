"use client";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "My Work", href: "#projects" },
    { name: "About Me", href: "#about" },
    { name: "What i do", href: "#whatdo" },
    { name: "My Skills", href: "#skills" },
    { name: "My Experiences", href: "#experiences" },
    { name: "Let's Connect", href: "#contact" },
  ];
  

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-transparent">
      <nav className="flex items-center justify-between py-4 px-4 sm:py-6 sm:px-8">
        <a
          href="#"
          className="text-2xl font-extrabold hover:tracking-wider duration-500 p-1  text-black rounded-full font-serif"
        >
          {/* <img src="/my-logo.png" alt="LOGO" className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16"/> */}
        </a>

        {!isOpen && (
          <button
            className="flex items-center justify-center text-black p-1.5 sm:p-2 rounded-md hover:bg-white/40 transition bg-white"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
        )}
      </nav>

      <div
        className={`fixed inset-0 bg-white text-black flex flex-col justify-center items-center gap-6 sm:gap-8 text-base sm:text-lg font-semibold tracking-wide transition-all duration-500 ease-in-out overflow-y-auto py-20 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute top-4 right-4 sm:top-6 sm:right-8 p-1.5 sm:p-2">
          <button
            className="text-black hover:opacity-70 transition"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
        </div>

        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="hover:text-gray-500 transition-all duration-300 font-serif text-center px-4"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </a>
        ))}

        <div className="mt-6 sm:mt-10 text-center text-gray-600 text-xs sm:text-sm uppercase tracking-wider px-4">
          <p className="mb-2">Connect</p>
          <div className="flex flex-col gap-3 sm:gap-4">
            <a
              href="mailto:tayyabktk2002@gmail.com"
              className="block text-black font-bold hover:text-gray-600 break-all"
            >
              Email: muhammadrayyandev@gmail.com
            </a>
            <a
              className="block text-black font-bold hover:text-gray-600"
            >
              Whatsapp: +92 329 9725841
            </a>
          </div>
        </div>

        <a
          href="/Muhammad Rayyan Amjad - Graphics & UI_UX Designer - Resume.pdf"
          download
          className="flex items-center gap-2 bg-black text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 mt-6 sm:mt-8 text-sm sm:text-base"
        >
          <Download className="w-4 h-4 sm:w-5 sm:h-5" />
          Download Resume
        </a>
      </div>
    </header>
  );
};

export default Navbar;
