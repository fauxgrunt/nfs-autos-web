// Centralized Inventory Data
export interface Vehicle {
  id: string; // URL slug
  make: string;
  model: string;
  title: string; // Full display title
  year: number;
  price: number;
  weeklyPrice: number;
  mileage: string;
  odometer: number; // Numeric value for specs
  transmission: string;
  bodyType: string;
  engine: string;
  fuel: string;
  status: string;
  location: string;
  // Main card image (for inventory grid)
  image: string;
  // Gallery images (for detail page)
  images: string[];
}

export const INVENTORY_DATA: Vehicle[] = [
  {
    id: 'toyota-crown-athlete-2015',
    make: 'Toyota',
    model: 'Crown Athlete',
    title: '2015 Toyota Crown Athlete',
    year: 2015,
    price: 18999,
    weeklyPrice: 91,
    mileage: '65,000',
    odometer: 65000,
    transmission: 'Auto',
    bodyType: 'Sedan',
    engine: 'V6 3.5L',
    fuel: 'Petrol',
    status: 'JUST ARRIVED',
    location: 'Showroom Floor',
    image: '/inventory/crown-athlete.jpg',
    images: [
      '/inventory/crown-athlete.jpg',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1600&q=80',
    ]
  },
  {
    id: 'toyota-mark-x-250g-2013',
    make: 'Toyota',
    model: 'Mark X 250G',
    title: '2013 Toyota Mark X 250G',
    year: 2013,
    price: 15500,
    weeklyPrice: 74,
    mileage: '72,000',
    odometer: 72000,
    transmission: 'Auto',
    bodyType: 'Sedan',
    engine: '2.5L',
    fuel: 'Petrol',
    status: 'AVAILABLE NOW',
    location: 'Showroom Floor',
    image: '/inventory/mark-x-stock.jpg',
    images: [
      '/inventory/mark-x-stock.jpg',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=80',
    ]
  },
  {
    id: 'lexus-is250-fsport-2016',
    make: 'Lexus',
    model: 'IS250 F-Sport',
    title: '2016 Lexus IS250 F-Sport',
    year: 2016,
    price: 22900,
    weeklyPrice: 110,
    mileage: '58,000',
    odometer: 58000,
    transmission: 'Auto',
    bodyType: 'Sedan',
    engine: 'V6 2.5L',
    fuel: 'Petrol',
    status: 'PREMIUM',
    location: 'Showroom Floor',
    image: '/inventory/lexus-is-stock.jpg',
    images: [
      '/inventory/lexus-is-stock.jpg',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
    ]
  }
];

// Helper function to get vehicle by ID
export function getVehicleById(id: string): Vehicle | undefined {
  return INVENTORY_DATA.find(vehicle => vehicle.id === id);
}

// Helper function to get all vehicle IDs (for static path generation)
export function getAllVehicleIds(): string[] {
  return INVENTORY_DATA.map(vehicle => vehicle.id);
}
