import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LandingBg from '../assets/Landing BG.webp';
import AboutPage from '../pages/AboutPage';
import PropertyCarousel from './PropertyCarousel';
import WhyChooseUs from './WhyChooseUs';
import Footer from '../components/Footer';
import PropertySearch from '../components/PropertySearch';

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <div className="relative h-[125vh] w-full overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter scale-105 z-0"
          style={{ backgroundImage: `url(${LandingBg})` }}
        ></div>

        {/* Foreground content */}
        <div className="relative z-10 pt-6 flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-10 items-center w-full mt-[25vh] bg-white p-4 sm:p-8 lg:p-12 ">
            
            {/* Text block */}
            <div className="lg:ml-10 lg:w-[45vw] md:w-full gap-6 flex items-center justify-center flex-col text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-snug">
                Discover your ideal home today
              </h1>
              <p className="text-black font-light text-lg sm:text-xl lg:text-2xl max-w-2xl">
                Find your dream property with ease. Whether you're buying,
                selling, or investing, EasyNest offers a seamless experience
                with verified listings, expert insights, and personalized
                support every step of the way.
              </p>
            </div>

            {/* Search component */}
            <div className="w-full sm:w-[90%] md:w-[70%] lg:w-auto">
              <PropertySearch />
            </div>
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-white to-transparent z-0"></div>
      </div>

      {/* Other Sections */}
      <div id="about">
        <AboutPage />
      </div>
      <PropertyCarousel />
      <WhyChooseUs />
      <div id="contact">
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
