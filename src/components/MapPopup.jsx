import React from 'react';
import { IoClose } from 'react-icons/io5';
import MapView from './MapView';

const MapPopup = ({ properties, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center px-4">
      <div className="bg-white rounded-xl w-full max-w-4xl h-[80vh] relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl text-gray-700 hover:text-black"
        >
          <IoClose />
        </button>
        <div className="h-full w-full mt-10">
          <MapView properties={properties} />
        </div>
      </div>
    </div>
  );
};

export default MapPopup;
