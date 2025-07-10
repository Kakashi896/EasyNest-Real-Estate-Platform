import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const PropertySearch = () => {
  const [activeTab, setActiveTab] = useState('buy');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [location, setLocation] = useState('');

  const navigate = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams({
      type: activeTab,
      // location,
      // min: minPrice,
      // max: maxPrice
    }).toString();

    navigate(`/properties?${params}`);
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4">
      {/* Tab Switcher */}
      <div className="flex mb-4 rounded-lg overflow-hidden w-fit">
        <button
          onClick={() => setActiveTab('buy')}
          className={`px-6 py-2 font-semibold text-sm transition-colors duration-200 rounded-l-lg ${
            activeTab === 'buy' ? 'bg-black text-white' : 'bg-transparent text-black'
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setActiveTab('rent')}
          className={`px-6 py-2 font-semibold text-sm transition-colors duration-200 rounded-r-lg ${
            activeTab === 'rent' ? 'bg-black text-white' : 'bg-transparent text-black'
          }`}
        >
          Rent
        </button>
      </div>

      {/* Inputs & Search Button */}
      <div className="flex flex-wrap md:flex-nowrap gap-4">
        <input
          type="text"
          placeholder="City Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="flex-1 min-w-[120px] px-4 py-2 border border-gray-300 rounded-md text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <input
          type="text"
          inputMode="numeric"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value.replace(/\D/, ''))}
          className="flex-1 min-w-[100px] px-4 py-2 border border-gray-300 rounded-md text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <input
          type="text"
          inputMode="numeric"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value.replace(/\D/, ''))}
          className="flex-1 min-w-[100px] px-4 py-2 border border-gray-300 rounded-md text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      <div className="mt-4">
        <button
          onClick={handleSearch}
          className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-md flex items-center gap-2 transition-all duration-200"
        >
          <FiSearch className="text-lg" />
          Search
        </button>
      </div>
    </div>
  );
};

export default PropertySearch;
