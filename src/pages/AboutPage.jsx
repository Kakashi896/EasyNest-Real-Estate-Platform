import React from 'react';
import { MdComputer } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div  className="bg-white flex justify-around py-20 px-6 lg:px-20 text-gray-800">
      <p className="text-xl font-light mt-3 w-2/2 text-gray-500 ">Find the ideal spot for your next home.</p>
      <div className="flex flex-col gap-10  items-start">
      <h2 className="text-4xl font-light leading-snug">
  Discover your dream home with <strong>Easynest</strong>. Whether you're looking to buy or rent, we help you find the perfect space — from modern apartments to peaceful family homes.
</h2>

        <div className="flex  gap-8">
          <div>
            <div className="bg-[#e8e6c7] w-fit p-3 rounded-lg mb-3">
              <MdComputer className="text-black text-xl" />
            </div>
            <h3 className="font-semibold text-lg">Modern City Apartments</h3>
<p className="text-sm text-gray-600">Stylish, well-connected homes ideal for professionals and urban living.</p>
</div>
          <div>
            <div className="bg-[#e8e6c7] w-fit p-3 rounded-lg mb-3">
              <FaUsers className="text-black text-xl" />
            </div>
            <h3 className="font-semibold text-lg">Family getaways</h3>
            <p className="text-sm text-gray-600">Comfortable spaces perfect for family memories.</p>
          </div>

          
        </div>
          <button className="mt-4 w-fit px-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition">
            Explore
          </button>
      </div>
    </div>
  );
};

export default AboutPage;
