export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  features: string[];
  image: string;
}

export const locations: Location[] = [
  {
    id: 'downtown',
    name: 'Downtown',
    address: '123 Main Street',
    city: 'Your City',
    state: 'ST',
    zip: '12345',
    phone: '(555) 123-4567',
    email: 'downtown@yoursaladbar.com',
    hours: {
      monday: '10:00 AM - 9:00 PM',
      tuesday: '10:00 AM - 9:00 PM',
      wednesday: '10:00 AM - 9:00 PM',
      thursday: '10:00 AM - 9:00 PM',
      friday: '10:00 AM - 10:00 PM',
      saturday: '11:00 AM - 10:00 PM',
      sunday: '11:00 AM - 8:00 PM',
    },
    coordinates: {
      lat: 40.7128,
      lng: -74.0060,
    },
    features: ['Dine-In', 'Takeout', 'Delivery', 'Catering', 'WiFi'],
    image: '/images/locations/downtown.jpg',
  },
  {
    id: 'midtown',
    name: 'Midtown',
    address: '456 Oak Avenue',
    city: 'Your City',
    state: 'ST',
    zip: '12346',
    phone: '(555) 234-5678',
    email: 'midtown@yoursaladbar.com',
    hours: {
      monday: '10:00 AM - 8:00 PM',
      tuesday: '10:00 AM - 8:00 PM',
      wednesday: '10:00 AM - 8:00 PM',
      thursday: '10:00 AM - 8:00 PM',
      friday: '10:00 AM - 9:00 PM',
      saturday: '11:00 AM - 9:00 PM',
      sunday: '11:00 AM - 7:00 PM',
    },
    coordinates: {
      lat: 40.7549,
      lng: -73.9840,
    },
    features: ['Dine-In', 'Takeout', 'Online Ordering', 'WiFi'],
    image: '/images/locations/midtown.jpg',
  },
];

export const getLocationById = (id: string): Location | undefined => {
  return locations.find(location => location.id === id);
};

export const getAllLocations = (): Location[] => {
  return locations;
};

