import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleNavClick = (sectionId) => {
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 font-sans px-4 md:px-55 py-10 flex flex-col md:flex-row items-center justify-between ${
        isHome ? 'bg-transparent text-white' : ' text-black'
      }`}
    >
      {/* Left: Logo */}
      <div className="flex justify-between w-full md:w-auto items-center">
        <div className="flex items-center gap-2">
          <div className={`w-5 h-5 ${isHome ? 'bg-white' : 'bg-black'} rounded-full`}></div>
          <h1 className="text-xl font-semibold">Easynest</h1>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className={`w-6 h-6 ${isHome ? 'text-white' : 'text-black'}`}
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

      {/* Center: Navigation Links */}
      <div className="hidden md:flex gap-10 items-center">
        <a href="/" className="hover:underline">Home</a>
        <a onClick={() => handleNavClick('about')} className="cursor-pointer hover:underline duration-200">
          About
        </a>
        <a onClick={() => handleNavClick('contact')} className="cursor-pointer hover:underline duration-200">
          Contact
        </a>
        <button className="flex items-center gap-1 hover:underline">
          Pages <span className="text-xs">&#9662;</span>
        </button>
      </div>

      {/* Right: Wishlist + CTA */}
      <div className="hidden md:flex items-center gap-6">
        <p>Wishlist (0)</p>
        <button className="bg-black text-white px-6 py-2 rounded-xl text-sm cursor-pointer transition hover:bg-gray-800">
          Get started
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-10 w-full flex justify-center items-start gap-4 text-lg">
          <a href="/" className="hover:underline">Home</a>
          <a onClick={() => handleNavClick('about')} className="cursor-pointer hover:underline">About</a>
          <a onClick={() => handleNavClick('contact')} className="cursor-pointer hover:underline">Contact</a>
          <button className="flex items-center gap-1 hover:underline">
            Pages <span className="text-xs">&#9662;</span>
          </button>
          <p className="text-lg">Wishlist (0)</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
