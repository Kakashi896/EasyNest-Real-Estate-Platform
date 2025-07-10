import React from 'react';
import { PiHouseLineDuotone } from 'react-icons/pi'; // or any icon you prefer

const WhyChooseUs = () => {
  return (
    <div className="pt-20 pb-50 px-6 text-center">
      <p className="uppercase text-sm text-gray-500 tracking-widest mb-2">Why Choose EasyNest</p>
      <h2 className="text-4xl font-light mb-14">
        Your trusted partner for <br className="sm:hidden" /> smart property choices
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div>
          <div className="mx-auto bg-[#e5e3cb] p-3 rounded-md w-fit mb-4">
            <PiHouseLineDuotone className="text-xl text-black" />
          </div>
          <h3 className="font-medium text-lg">Wide Range of Properties</h3>
          <p className="text-sm text-gray-600 mt-2">
            From budget apartments to luxury villas, EasyNest offers a diverse selection to suit every buyer’s or renter’s needs.
          </p>
        </div>

        {/* Card 2 */}
        <div>
          <div className="mx-auto bg-[#e5e3cb] p-3 rounded-md w-fit mb-4">
            <PiHouseLineDuotone className="text-xl text-black" />
          </div>
          <h3 className="font-medium text-lg">Easy & Transparent Process</h3>
          <p className="text-sm text-gray-600 mt-2">
            Effortlessly browse, compare, and close deals with no hidden costs — just clarity, speed, and confidence.
          </p>
        </div>

        {/* Card 3 */}
        <div>
          <div className="mx-auto bg-[#e5e3cb] p-3 rounded-md w-fit mb-4">
            <PiHouseLineDuotone className="text-xl text-black" />
          </div>
          <h3 className="font-medium text-lg">Verified Listings Only</h3>
          <p className="text-sm text-gray-600 mt-2">
            Every property on EasyNest is verified and quality-checked to ensure safe investments and happy homes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
