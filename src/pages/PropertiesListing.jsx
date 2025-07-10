import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../FirebaseConfig';
import PropertyCard from '../components/PropertyCard';
import PropertySearch2 from '../components/PropertySearch2';
import MapView from '../components/MapView'; // You’ll create this next 👇

const PropertiesListing = () => {
  const location = useLocation();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get('type');
  const city = searchParams.get('location');
  const min = Number(searchParams.get('min') || 0);
  const max = Number(searchParams.get('max') || 999999999);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const propertyRef = collection(db, 'properties');
        const q = query(propertyRef, where('type', '==', type));
        const snapshot = await getDocs(q);
        const results = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProperties(results);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  return (
    <div className="pt-24 px-6 h-[calc(100vh-6rem)]">
      <div className="flex h-full gap-6">
        {/* LEFT SECTION (Search + List) */}
        <div className="flex-1 overflow-y-auto pr-4">
          <PropertySearch2 />
          <div className="mt-6 space-y-6">
            {loading ? (
              <p>Loading...</p>
            ) : properties.length === 0 ? (
              <p className="text-gray-500">No properties found for this filter.</p>
            ) : (
              properties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))
            )}
          </div>
        </div>

        {/* RIGHT SECTION (Map) */}
        <div className="hidden lg:block w-[35%] rounded-xl overflow-hidden shadow-md">
          <MapView properties={properties} />
        </div>
      </div>
    </div>
  );
};

export default PropertiesListing;
