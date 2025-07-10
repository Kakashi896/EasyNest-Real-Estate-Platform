import React from 'react'
import LandingBg from '../assets/Landing BG.webp'
import AboutPage from '../pages/AboutPage'
import PropertyCarousel from './PropertyCarousel'
import WhyChooseUs from './WhyChooseUs'
import Footer from '../components/Footer'
// import EasyNestFeatures from '../components/EasyNestFeatures'
import PropertySearch from '../components/PropertySearch'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const LandingPage = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to ensure DOM is rendered
      }
    }
  }, [location]);

  return (
    <>
      <div className="relative h-[125vh] w-full overflow-hidden">
        {/* Blurred Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter  scale-105 z-0"
          style={{ backgroundImage: `url(${LandingBg})` }}
        ></div>

        <div className="relative z-10 pt-6 flex flex-col items-center">
          {/* <Navbar /> */}

          <div className="flex gap-25 items-center w-full mt-[28vh] bg-white">
            <div className="ml-25 w-[45vw] gap-10 h-[40vh] flex items-center justify-center flex-col">
              <h1 className="text-5xl font-light">
                Discover your ideal home today
              </h1>
              <p className="text-black w-[41vw] font-light text-2xl">
                Find your dream property with ease. Whether you're buying,
                selling, or investing, EasyNest offers a seamless experience
                with verified listings, expert insights, and personalized
                support every step of the way.
              </p>
            </div>

            
            <div className="">
                {/* <EasyNestFeatures/> */}
                <PropertySearch/>
            </div>
          </div>
        </div>

        {/* White gradient overlay (optional aesthetic touch) */}
        <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-white to-transparent z-0"></div>
      </div>

      {/* Other Components */}
      <div id="about">
      <AboutPage />
      </div>
      <PropertyCarousel />
      <WhyChooseUs />
      <div id= "contact">
      <Footer />
      </div>
    </>
  )
}

export default LandingPage
