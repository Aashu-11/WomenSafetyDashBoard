import React, { useState, useEffect, useCallback } from 'react';
import { MapPin, Shield, AlertTriangle, Share2, Navigation, Phone, Bell } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Circle, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import * as turf from '@turf/turf';
import 'leaflet/dist/leaflet.css';

// Custom marker icons
const createCustomIcon = (color: string) => new L.Icon({
  iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  shadowSize: [41, 41],
});

const SafetyFeatures: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState<[number, number] | null>(null);
  const [isEmergencyMode, setIsEmergencyMode] = useState(false);
  const [safeZones, setSafeZones] = useState<Array<{
    id: number;
    name: string;
    location: [number, number];
    radius: number;
    status: 'safe' | 'caution' | 'unsafe';
    rating: number;
  }>>([]);
  const [nearbyServices, setNearbyServices] = useState<Array<{
    id: number;
    name: string;
    type: 'police' | 'hospital' | 'shelter';
    location: [number, number];
    distance: number;
  }>>([]);

  // Initialize map with mock data
  useEffect(() => {
    // Mock current location (New York City)
    const mockLocation: [number, number] = [40.7128, -74.0060];
    setCurrentLocation(mockLocation);

    // Mock safe zones
    setSafeZones([
      {
        id: 1,
        name: 'Central Park Area',
        location: [40.7829, -73.9654],
        radius: 800,
        status: 'safe',
        rating: 4.8
      },
      {
        id: 2,
        name: 'Times Square District',
        location: [40.7580, -73.9855],
        radius: 600,
        status: 'caution',
        rating: 3.5
      },
      {
        id: 3,
        name: 'Brooklyn Bridge Park',
        location: [40.7056, -73.9964],
        radius: 1000,
        status: 'safe',
        rating: 4.9
      },
      {
        id: 4,
        name: 'Washington Square Park',
        location: [40.7306, -73.9974],
        radius: 800,
        status: 'safe',
        rating: 4.7
      },
      {
        id: 5,
        name: 'High Line',
        location: [40.7484, -74.0059],
        radius: 600,
        status: 'caution',
        rating: 3.8
      },
      {
        id: 6,
        name: 'Battery Park',
        location: [40.7056, -74.0164],
        radius: 1000,
        status: 'safe',
        rating: 4.6
      },
      {
        id: 7,
        name: 'Prospect Park',
        location: [40.6606, -73.9654],
        radius: 1200,
        status: 'safe',
        rating: 4.9
      },
      {
        id: 8,
        name: 'Coney Island',
        location: [40.5756, -73.9855],
        radius: 1000,
        status: 'caution',
        rating: 3.9
      },
      {
        id: 9,
        name: 'Rockaway Beach',
        location: [40.5856, -73.8455],
        radius: 1200,
        status: 'safe',
        rating: 4.8
      },
      {
        id: 10,
        name: 'Jamaica Bay',
        location: [40.6256, -73.8455],
        radius: 1000,
        status: 'caution',
        rating: 3.7
      },
      {
        id: 11,
        name: 'Astoria Park',
        location: [40.7851, -73.9330],
        radius: 800,
        status: 'safe',
        rating: 4.5
      },
      {
        id: 12,
        name: 'Flushing Meadows Park',
        location: [40.7498, -73.8400],
        radius: 1000,
        status: 'caution',
        rating: 3.6
      },
      {
        id: 13,
        name: 'Staten Island Ferry Terminal',
        location: [40.6488, -74.0732],
        radius: 600,
        status: 'unsafe',
        rating: 2.5
      },
      {
        id: 14,
        name: 'South Bronx',
        location: [40.8256, -73.9172],
        radius: 1200,
        status: 'unsafe',
        rating: 2.0
      },
      {
        id: 15,
        name: 'Brownsville',
        location: [40.6500, -73.9110],
        radius: 1000,
        status: 'unsafe',
        rating: 1.8
      },
    ]);

    // Mock nearby services
    setNearbyServices([
      {
        id: 1,
        name: 'Central Police Station',
        type: 'police',
        location: [40.7225, -74.0023],
        distance: 0.5
      },
      {
        id: 2,
        name: 'Metropolitan Hospital',
        type: 'hospital',
        location: [40.7168, -73.9861],
        distance: 0.8
      },
      {
        id: 3,
        name: 'Brooklyn Hospital Center',
        type: 'hospital',
        location: [40.6880, -73.9830],
        distance: 1.2
      },
      {
        id: 4,
        name: 'NYC Police Department',
        type: 'police',
        location: [40.7128, -74.0060],
        distance: 1.0
      },
      {
        id: 5,
        name: 'Safe Haven Shelter',
        type: 'shelter',
        location: [40.7306, -73.9974],
        distance: 0.9
      },
    ]);
  }, []);

  // Location tracking simulation
  useEffect(() => {
    if (currentLocation) {
      const interval = setInterval(() => {
        // Simulate small movement
        const [lat, lng] = currentLocation;
        const newLat = lat + (Math.random() - 0.5) * 0.001;
        const newLng = lng + (Math.random() - 0.5) * 0.001;
        setCurrentLocation([newLat, newLng]);

        // Check proximity to unsafe zones
        safeZones.forEach(zone => {
          if (zone.status === 'unsafe') {
            const distance = turf.distance(
              turf.point([lng, lat]),
              turf.point(zone.location.reverse()),
              { units: 'kilometers' }
            );
            if (distance < 1) {
              // Show proximity alert
              new Notification('Safety Alert', {
                body: `You are approaching an unsafe zone: ${zone.name}`,
                icon: '/alert-icon.png'
              });
            }
          }
        });
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [currentLocation, safeZones]);

  const handleEmergencyButton = () => {
    setIsEmergencyMode(true);
    // Simulate emergency alert
    setTimeout(() => {
      alert('Emergency services have been notified. Help is on the way.');
      setIsEmergencyMode(false);
    }, 2000);
  };

  const MapComponent = () => {
    const map = useMap();
    
    useEffect(() => {
      if (currentLocation) {
        map.setView(currentLocation, 13);
      }
    }, [currentLocation, map]);

    return null;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
      {/* Map Section */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Real-Time Safety Map</h2>
            <div className="flex space-x-2">
              <button 
                onClick={() => alert('Location shared with emergency contacts')}
                className="flex items-center px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Location
              </button>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full"></span>
              </button>
            </div>
          </div>

          <div className="h-[600px] rounded-xl overflow-hidden relative">
            {currentLocation && (
              <MapContainer
                center={currentLocation}
                zoom={13}
                style={{ height: '100%', width: '100%' }}
              >
                <MapComponent />
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                
                {/* Current Location Marker */}
                <Marker 
                  position={currentLocation}
                  icon={createCustomIcon('blue')}
                >
                  <Popup>You are here</Popup>
                </Marker>

                {/* Safe Zones */}
                {safeZones.map((zone) => (
                  <React.Fragment key={zone.id}>
                    <Circle
                      center={zone.location}
                      radius={zone.radius}
                      pathOptions={{
                        color: zone.status === 'safe' ? '#10B981' : '#F59E0B',
                        fillColor: zone.status === 'safe' ? '#D1FAE5' : '#FEF3C7',
                        fillOpacity: 0.3
                      }}
                    />
                    <Marker
                      position={zone.location}
                      icon={createCustomIcon(zone.status === 'safe' ? 'green' : 'yellow')}
                    >
                      <Popup>
                        <div className="p-2">
                          <h3 className="font-semibold">{zone.name}</h3>
                          <p className="text-sm">Safety Rating: {zone.rating}/5.0</p>
                        </div>
                      </Popup>
                    </Marker>
                  </React.Fragment>
                ))}

                {/* Nearby Services */}
                {nearbyServices.map((service) => (
                  <Marker
                    key={service.id}
                    position={service.location}
                    icon={createCustomIcon(service.type === 'police' ? 'blue' : 'red')}
                  >
                    <Popup>
                      <div className="p-2">
                        <h3 className="font-semibold">{service.name}</h3>
                        <p className="text-sm">{service.distance} km away</p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            )}
          </div>
        </div>
      </div>

      {/* Safety Controls Section */}
      <div className="space-y-6">
        {/* Emergency Button */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <button
            onClick={handleEmergencyButton}
            className={`w-full py-4 rounded-xl text-white font-bold text-lg transition-all transform hover:scale-105 ${
              isEmergencyMode
                ? 'bg-red-500 animate-pulse'
                : 'bg-gradient-to-r from-red-500 to-red-600'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <AlertTriangle className={`w-6 h-6 ${isEmergencyMode ? 'animate-bounce' : ''}`} />
              <span>Emergency SOS</span>
            </div>
          </button>
        </div>

        {/* Nearby Safe Zones */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Nearby Safe Zones</h3>
          <div className="space-y-4">
            {safeZones.map((zone) => (
              <div 
                key={zone.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-pink-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <MapPin className={`w-5 h-5 ${
                    zone.status === 'safe' ? 'text-green-500' : 'text-yellow-500'
                  }`} />
                  <div>
                    
                    <h4 className="font-medium text-gray-800">{zone.name}</h4>
                    <p className="text-sm text-gray-500">Rating: {zone.rating}/5.0</p>
                  </div>
                </div>
                <button className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-full hover:bg-gray-50">
                  Navigate
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Emergency Contacts</h3>
          <div className="space-y-3">
            <button className="w-full p-3 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors flex items-center">
              <Phone className="w-5 h-5 text-pink-500 mr-3" />
              <span className="font-medium text-gray-700">Call Emergency Contact</span>
            </button>
            <button className="w-full p-3 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors flex items-center">
              <Shield className="w-5 h-5 text-pink-500 mr-3" />
              <span className="font-medium text-gray-700">Contact Local Police</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyFeatures;