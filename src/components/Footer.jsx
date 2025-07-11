import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 lg:px-20">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
        {/* Navigation Column 1 */}
        <div>
          <ul className="space-y-2 text-sm">
            <li className="font-semibold">Home V.1</li>
            <li>Home V.2</li>
            <li>Home V.3</li>
            <li>Listings</li>
            <li>Internal Listing</li>
          </ul>
        </div>

        {/* Navigation Column 2 */}
        <div>
          <ul className="space-y-2 text-sm">
            <li className="font-semibold">Contact Us</li>
            <li>Easynest@gmail.com</li>
            <li>Founder@gmail.com</li>
            <li>+91 1234567890</li>
          </ul>
        </div>

        {/* Navigation Column 3 */}
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
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-md overflow-hidden w-full max-w-sm shadow-md">
            <input
              type="email"
              placeholder="Your email here"
              className="px-4 py-2 text-black border-2 border-black text-sm w-full focus:outline-none"
            />
            <button className="bg-black border-2 border-black text-white px-5 py-2 text-sm font-medium hover:bg-gray-800 w-full sm:w-auto">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Logo Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-start gap-6 sm:gap-10 mt-10">
        <div className="flex items-center">
          <div className="bg-[#e5e3cb] w-20 h-20 sm:w-24 sm:h-24 relative mr-4">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black w-10 h-10 sm:w-12 sm:h-12 rounded-full"></div>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold leading-tight sm:leading-[6rem]">
            EasyNest
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
