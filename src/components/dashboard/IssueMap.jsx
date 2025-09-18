import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { mockIssues } from '../../data/mockIssues';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Custom marker icons based on priority
const createCustomIcon = (priority) => {
  const color = priority === 'high' ? '#ef4444' : priority === 'medium' ? '#f59e0b' : '#10b981';
  
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      background-color: ${color};
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 2px solid white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
};

const IssueMap = () => {
  // Delhi coordinates as center
  const center = [28.6139, 77.2090];

  return (
    <div className="w-full h-full">
      <MapContainer
        center={center}
        zoom={11}
        style={{ height: '100%', width: '100%' }}
        className="rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {mockIssues.map((issue) => (
          <Marker
            key={issue.id}
            position={[issue.lat, issue.lng]}
            icon={createCustomIcon(issue.priority)}
          >
            <Popup>
              <div className="p-2 min-w-[200px]">
                <h3 className="font-semibold text-gray-800 mb-2">{issue.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{issue.description}</p>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="font-medium">Status:</span>
                    <span className={`px-2 py-1 rounded text-white ${
                      issue.status === 'resolved' ? 'bg-green-500' :
                      issue.status === 'in_progress' ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`}>
                      {issue.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Priority:</span>
                    <span className={`px-2 py-1 rounded text-white ${
                      issue.priority === 'high' ? 'bg-red-500' :
                      issue.priority === 'medium' ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`}>
                      {issue.priority.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Category:</span>
                    <span className="text-gray-600">{issue.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Address:</span>
                    <span className="text-gray-600">{issue.address}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Reported:</span>
                    <span className="text-gray-600">{issue.reportedDate}</span>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default IssueMap;
