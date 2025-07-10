import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MapView = ({ properties }) => {
  const defaultPosition = [28.6139, 77.2090]; // Delhi

  return (
    <MapContainer
    center={defaultPosition}
    zoom={6}
    style={{ height: '100%', width: '100%' }}
    scrollWheelZoom={true}  
    >
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {properties.map((property) => (
        <Marker
          key={property.id}
          position={[property.lat || 28.6, property.lng || 77.2]} // Add lat/lng in DB
          icon={customIcon}
        >
          <Popup>
            <div className="text-sm">
              <strong>{property.title}</strong><br />
              ₹{property.price.toLocaleString()}<br />
              {property.location}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
