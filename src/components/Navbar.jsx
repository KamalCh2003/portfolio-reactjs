import { useEffect, useState } from "react";
import logoImg from "../assets/logo2.png";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [location] = useState("Pokhara, Nepal");

  useEffect(() => {
    // Update the time every second
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer); // Clear the interval on component unmount
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left side with Logo and Pentagon Frame */}
          <div className="flex gap-5 items-center">
            <div className="flex items-center space-x-4">
              {/* Pentagon frame with logo */}
              <div className="pentagon-frame relative">
                <img
                  src={logoImg}
                  alt="logo"
                  className="w-12 h-12 rounded-full bg-blue-500  "
                />
              </div>
            </div>

            {/* Right side with location and time */}
            <div className="flex items-center space-x-4">
              <div className="location-time text-gray-300">
                <p className="text-sm">{location}</p>
                <p className="text-sm">{time}</p>
              </div>
            </div>
          </div>

          {/* Hamburger Menu */}
          <div
            className="w-6 h-6 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
