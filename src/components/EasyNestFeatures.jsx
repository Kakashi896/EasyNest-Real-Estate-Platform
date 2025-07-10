import { FaHome, FaMapMarkedAlt, FaSearch, FaShieldAlt, FaHandshake } from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Verified Listings",
    icon: <FaShieldAlt className="text-3xl text-green-600" />,
  },
  // {
  //   id: 2,
  //   title: "Advanced Search",
  //   icon: <FaSearch className="text-3xl text-blue-600" />,
  // },
  {
    id: 3,
    title: "Property Insights",
    icon: <FaMapMarkedAlt className="text-3xl text-purple-600" />,
  },
  {
    id: 4,
    title: "Personalized Support",
    icon: <FaHandshake className="text-3xl text-yellow-600" />,
  },
  {
    id: 5,
    title: "Seamless Booking",
    icon: <FaHome className="text-3xl text-red-500" />,
  },
];

const EasyNestFeatures = () => {
  return (
    <section className=" text-center">
      {/* <h2 className="text-3xl font-semibold mb-8 text-gray-800">Why Choose EasyNest</h2> */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-6 justify-items-center">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`w-32 h-32 flex flex-col items-center justify-center rounded-lg border 
            text-sm font-medium shadow-sm bg-white text-gray-800 border-black hover:scale-105 transition-all duration-300 ease-in-out`}
          >
            {feature.icon}
            <p className="mt-2">{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EasyNestFeatures;
