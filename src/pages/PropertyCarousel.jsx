import React, { useState, useEffect } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import Home2 from '../assets/Home2.webp';
import Home3 from '../assets/Home3.webp';

const listings = [
  {
    id: 1,
    title: 'Cityscape Lofts',
    location: 'New York Downtown',
    price: '$180 USD',
    details: '1 Bedrooms / 2 Guests',
    image: Home2
  },
  {
    id: 2,
    title: 'Sunset Horizon Villas',
    location: 'Santorini Sunset',
    price: '$150 USD',
    details: '2 Bedrooms / 4 Guests',
    image: Home3
  },
  {
    id: 3,
    title: 'Mountainview Cabin',
    location: 'Aspen Heights',
    price: '$95 USD',
    details: '1 Bedroom / 2 Guests',
    image: Home2
  },
  {
    id: 4,
    title: 'Ocean Breeze Suites',
    location: 'Malibu Coast',
    price: '$210 USD',
    details: '3 Bedrooms / 6 Guests',
    image: Home3
  },
  {
    id: 5,
    title: 'Urban Chic',
    location: 'Chicago',
    price: '$130 USD',
    details: '2 Bedrooms / 3 Guests',
    image: Home2
  }
];

const PropertyCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    if (startIndex + cardsToShow < listings.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="py-20 px-4 lg:px-16 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <div>
          <p className="uppercase text-xl font-light text-gray-500 tracking-widest mb-1">Discover</p>
          <h2 className="text-3xl sm:text-4xl font-light">Explore your dream destination</h2>
        </div>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${startIndex * (100 / cardsToShow)}%)` }}
        >
          {listings.map((item) => (
            <div
              key={item.id}
              className={`min-w-[${100 / cardsToShow}%] px-2 box-border`}
              style={{ minWidth: `${100 / cardsToShow}%` }}
            >
              <div className="bg-white rounded-xl shadow-sm overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover rounded-t-xl"
                />
                <div className="absolute top-3 right-3 bg-white text-sm px-3 py-1 rounded-lg shadow text-gray-700">
                  {item.details}
                </div>
                <div className="p-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="flex items-center text-sm text-gray-500 mt-1">
                      <FaLocationDot className="mr-1 text-gray-600" /> {item.location}
                    </p>
                  </div>
                  <span className="bg-[#e5e3cb] text-sm px-3 py-1 rounded-md">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Buttons */}
      <div className="mt-10 flex justify-center gap-4">
        <button
          onClick={handlePrev}
          className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-md disabled:opacity-50"
          disabled={startIndex === 0}
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-md disabled:opacity-50"
          disabled={startIndex + cardsToShow >= listings.length}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default PropertyCarousel;
