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
    <div className="w-[30vw] mx-auto px-4">
      {/* Tab Switcher */}
      <div className="flex mb-4 rounded-md overflow-hidden ">
        <button
          onClick={() => setActiveTab('buy')}
          className={`px-8 py-3 font-semibold text-sm transition-colors duration-200 ${
            activeTab === 'buy' ? 'bg-black text-white' : 'bg-white text-black'
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setActiveTab('rent')}
          className={`px-8 py-3 font-semibold text-sm transition-colors duration-200 ${
            activeTab === 'rent' ? 'bg-black text-white' : 'bg-white text-black'
          }`}
        >
          Rent
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex flex-wrap items-center gap-4 bg-white p- ">
      <input
          type="text"
          placeholder="City Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="flex-1 min-w-[150px] px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value.replace(/\D/, ''))}
          className="flex-1 min-w-[120px] px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value.replace(/\D/, ''))}
          className="flex-1 min-w-[120px] px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        
        <button onClick={handleSearch} className="bg-yellow-400 hover:bg-yellow-500 text-white px-5 py-2 rounded-md flex items-center gap-2 transition-all duration-200">
          <FiSearch className="text-lg" />
          Search
        </button>
      </div>
    </div>
  );
};

export default PropertySearch;
