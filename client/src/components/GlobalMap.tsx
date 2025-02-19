import React from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { divIcon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Incident {
  id: string;
  type: 'emergency' | 'crime' | 'disaster';
  location: [number, number];
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
  status: 'active' | 'resolved';
}

const mockIncidents: Incident[] = [
  {
    id: '1',
    type: 'emergency',
    location: [40.7128, -74.006], // New York
    title: 'Bank Robbery',
    description: 'Armed robbery in progress at Metropolis Bank',
    severity: 'high',
    status: 'active',
  },
  {
    id: '2',
    type: 'disaster',
    location: [34.0522, -118.2437], // Los Angeles
    title: 'Natural Disaster',
    description: 'Earthquake aftermath',
    severity: 'medium',
    status: 'active',
  },
];

// Create custom icons for different severity levels
const createIcon = (severity: string) => {
  return divIcon({
    className: '',
    html: `<div class="map-marker marker-${severity}"></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
};

const GlobalMap: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="global-map-container"
    >
      <div className="map-header">
        <h2>Global Threat Monitor</h2>
        <div className="map-legend">
          <div className="legend-item">
            <span className="dot high"></span>
            High Severity
          </div>
          <div className="legend-item">
            <span className="dot medium"></span>
            Medium Severity
          </div>
          <div className="legend-item">
            <span className="dot low"></span>
            Low Severity
          </div>
        </div>
      </div>
      <div className="map-view">
        <MapContainer
          center={[39.8283, -98.5795]} // Center of the US
          zoom={4}
          style={{ height: '100%', width: '100%', borderRadius: '8px' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {mockIncidents.map((incident) => (
            <Marker
              key={incident.id}
              position={incident.location}
              icon={createIcon(incident.severity)}
            >
              <Popup>
                <div className="incident-popup">
                  <h3>{incident.title}</h3>
                  <p>{incident.description}</p>
                  <span className={`status-${incident.status}`}>
                    {incident.status}
                  </span>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </motion.div>
  );
};

export default GlobalMap;
