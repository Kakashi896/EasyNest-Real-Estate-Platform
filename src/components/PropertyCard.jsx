import React from 'react';
import { FaBed, FaBath } from 'react-icons/fa';

const PropertyCard = ({ type, image, title, location, price, bedrooms, bathrooms }) => {
  return (
    <div className="flex gap-4 rounded-xl p-4  duration-300">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-36 h-28 md:w-48 md:h-32 object-cover rounded-xl"
      />

      {/* Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{type.charAt(0).toUpperCase() + type.slice(1)} {title}</h3>
          <p className="text-sm text-gray-500 mt-1">{location}</p>
          <p className="text-yellow-500 text-lg font-bold mt-2">₹{price.toLocaleString()}</p>
        </div>

        <div className="flex gap-4 text-sm text-gray-700 mt-3">
          <div className="flex items-center gap-1">
            <FaBed /> {bedrooms} Beds
          </div>
          <div className="flex items-center gap-1">
            <FaBath /> {bathrooms} Baths
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
