import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
const isHome = location.pathname === '/';

const handleNavClick = (sectionId) => {
  if (location.pathname === '/') {
    // Already on landing page, scroll to section
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    // Navigate to landing page and scroll to section after navigation
    navigate(`/#${sectionId}`);
  }
};

  return (
    <nav className={`fixed mt-5 flex justify-center py-4 z-50 w-full font-sans ${
      isHome ? 'bg-transparent text-white' : ' text-black'
    }`}>
      <div className="flex items-center gap-45 justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className={`w-5 h-5 ${isHome? 'bg-white' : 'bg-black'} rounded-full`}></div>
          <h1 className="text-xl font-semibold">Easynest</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10  ">
          <a href="/" className="hover:underline">Home</a>
          <a onClick={() => handleNavClick('about')} className="cursor-pointer hover:underline duration-200">
        About
      </a>
      <a onClick={() => handleNavClick('contact')} className="cursor-pointer hover:underline duration-200">
        Contact
      </a>
          <div className="relative group">
            <button className="flex items-center gap-1">
              Pages <span className="text-xs">&#9662;</span>
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-10">
          <p>Wishlist (0)</p>
          <button className="bg-black text-white px-6 py-2 rounded-xl text-sm cursor-pointer transition">
            Get started
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-lg">
          <a href="#" className="hover:underline">Home V.1</a>
          <a href="#" className="hover:underline">About V.1</a>
          <a href="#" className="hover:underline">Contact V.1</a>
          <button className="flex items-center gap-1">
            Pages <span className="text-xs">&#9662;</span>
          </button>
          <p className="text-lg">Cart (0)</p>
          <button className="bg-black text-white px-6 py-2 rounded-xl text-lg hover:bg-gray-800 transition w-fit">
            Get started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
