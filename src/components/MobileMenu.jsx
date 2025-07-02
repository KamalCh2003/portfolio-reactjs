import React from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Portfolio" },
    { href: "#services", label: "Services" },
    { href: "#blogs", label: "Blogs" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-black z-40 flex flex-col items-start px-8 py-20
        transition-all duration-300 ease-in-out
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
      `}
    >
      {/* Close button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Menu links */}
      {menuItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          onClick={() => setMenuOpen(false)}
          className={`w-full text-left text-xl font-semibold text-white py-4 border-b border-gray-900
            transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
        >
          {item.label}
        </a>
      ))}

      {/* Buttons at the bottom */}
      <div className="mt-10 w-full flex flex-col items-center gap-4">
  <a
    href="/path/to/cv.pdf" // Replace with your actual CV file path
    download
    className="bg-transparent text-blue-400 border-2 px-6 py-2 w-full text-center rounded-[5px] font-semibold text-xl hover:bg-gray-200 transition"
  >
    Download CV
  </a>
  <a
    href="#contact"
    onClick={() => setMenuOpen(false)}
    className="bg-blue-400 text-white px-6 py-2 w-full text-center rounded-[5px] font-semibold text-xl hover:bg-blue-400 transition"
  >
    Hire Me
  </a>
</div>

    </div>
  );
};
