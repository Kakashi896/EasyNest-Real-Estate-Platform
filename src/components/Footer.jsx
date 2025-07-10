import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-20">
        {/* Navigation Columns */}
        <div>
          <ul className="space-y-2 text-sm">
            <li className="font-semibold">Home V.1</li>
            <li>Home V.2</li>
            <li>Home V.3</li>
            <li>Listings</li>
            <li>Internal Listing</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2 text-sm">
            <li className="font-semibold">Contact Us</li>
            <li>Easynest@gmail.com</li>
            <li>Founder@gmail.com</li>
            <li>+91 1234567890</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2 text-sm">
            <li className="font-semibold">Blog V.1</li>
            <li>Blog V.2</li>
            <li>Blog V.3</li>
            <li>Internal Blog</li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="text-lg font-medium mb-4">Subscribe to Updates</h3>
          <div className="flex items-center bg-white rounded-md overflow-hidden w-full max-w-sm shadow-md">
            <input
              type="email"
              placeholder="Your email here"
              className="px-4 py-2 w-full text-black text-sm focus:outline-none"
            />
            <button className="bg-black text-white px-5 py-2 text-sm font-medium hover:bg-gray-800">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="flex items-end justify-start mt-10">
        <div className="flex items-center">
          <div className="bg-[#e5e3cb] w-24 h-24 relative mr-4">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black w-12 h-12 rounded-full"></div>
            </div>
          </div>
          <h1 className="text-8xl font-semibold text-white leading-[6rem]">EasyNest</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
