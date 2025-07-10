import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const PropertySearch2 = () => {
  const [activeTab, setActiveTab] = useState('buy');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [location, setLocation] = useState('');
  const [bhk, setBhk] = useState('');

  const navigate = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams({
      type: activeTab,
    }).toString();
    navigate(`/properties?${params}`);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Search results for</h2>

      <div className="grid gap-4 md:grid-cols-6">
        {/* Location - full width */}
        <input
          type="text"
          placeholder="City Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="col-span-full md:col-span-6 px-4 py-2 border border-gray-300 rounded-md text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        {/* Buy/Rent Dropdown */}
        <select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="col-span-full sm:col-span-3 md:col-span-1 px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700"
        >
          <option value="buy">Buy</option>
          <option value="rent">Rent</option>
        </select>

        {/* Min Price */}
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value.replace(/\D/, ''))}
          className="col-span-full sm:col-span-3 md:col-span-1 px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 placeholder:text-gray-400"
        />

        {/* Max Price */}
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value.replace(/\D/, ''))}
          className="col-span-full sm:col-span-3 md:col-span-1 px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 placeholder:text-gray-400"
        />

        {/* BHK Dropdown */}
        <select
          value={bhk}
          onChange={(e) => setBhk(e.target.value)}
          className="col-span-full sm:col-span-3 md:col-span-1 px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700"
        >
          <option value="">BHK</option>
          <option value="1BHK">1 BHK</option>
          <option value="2BHK">2 BHK</option>
          <option value="3BHK">3 BHK</option>
          <option value="4BHK">4 BHK</option>
        </select>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="col-span-full sm:col-span-6 md:col-span-1 bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-md flex items-center justify-center transition-all duration-200"
        >
          <FiSearch className="text-lg mr-1" /> Search
        </button>
      </div>
    </div>
  );
};

export default PropertySearch2;
