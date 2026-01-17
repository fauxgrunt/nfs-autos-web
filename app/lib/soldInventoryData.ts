// Sold Inventory Data - Recently Sold Vehicles
export interface SoldVehicle {
  id: string;
  make: string;
  model: string;
  title: string;
  year: number;
  soldPrice: number; // What it sold for (can be hidden)
  mileage: string;
  odometer: number;
  transmission: string;
  bodyType: string;
  engine: string;
  fuel: string;
  soldTo: string; // Location it was sold to
  soldDate: string; // When it was sold
  image: string;
  images: string[];
}

export const SOLD_INVENTORY_DATA: SoldVehicle[] = [
  {
    id: 'toyota-crown-athlete-2014',
    make: 'Toyota',
    model: 'Crown Athlete',
    title: '2014 Toyota Crown Athlete',
    year: 2014,
    soldPrice: 19500,
    mileage: '68,000 km',
    odometer: 68000,
    transmission: 'Auto',
    bodyType: 'Sedan',
    engine: '3.5L V6',
    fuel: 'Petrol',
    soldTo: 'Sydney, NSW',
    soldDate: 'January 2026',
    image: '/delivered/crown-owner.jpg',
    images: [
      '/delivered/crown-owner.jpg',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80'
    ]
  },
  {
    id: 'lexus-gs350-2013',
    make: 'Lexus',
    model: 'GS350',
    title: '2013 Lexus GS350 Black Line Edition',
    year: 2013,
    soldPrice: 24900,
    mileage: '72,000 km',
    odometer: 72000,
    transmission: 'Auto',
    bodyType: 'Sedan',
    engine: '3.5L V6',
    fuel: 'Petrol',
    soldTo: 'Melbourne, VIC',
    soldDate: 'January 2026',
    image: '/delivered/gs350-city.jpg',
    images: [
      '/delivered/gs350-city.jpg',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80'
    ]
  },
  {
    id: 'toyota-mark-x-350s-2014',
    make: 'Toyota',
    model: 'Mark X 350S',
    title: '2014 Toyota Mark X 350S Custom Widebody',
    year: 2014,
    soldPrice: 18900,
    mileage: '82,000 km',
    odometer: 82000,
    transmission: 'Auto',
    bodyType: 'Sedan',
    engine: '3.5L V6',
    fuel: 'Petrol',
    soldTo: 'Perth, WA',
    soldDate: 'December 2025',
    image: '/delivered/markx-street.jpg',
    images: [
      '/delivered/markx-street.jpg',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80'
    ]
  },
  {
    id: 'lexus-is250-2015',
    make: 'Lexus',
    model: 'IS250',
    title: '2015 Lexus IS250 F-Sport',
    year: 2015,
    soldPrice: 23500,
    mileage: '55,000 km',
    odometer: 55000,
    transmission: 'Auto',
    bodyType: 'Sedan',
    engine: '2.5L V6',
    fuel: 'Petrol',
    soldTo: 'Brisbane, QLD',
    soldDate: 'December 2025',
    image: '/delivered/is250-rear.jpg',
    images: [
      '/delivered/is250-rear.jpg',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80'
    ]
  }
];

export function getSoldVehicleById(id: string): SoldVehicle | undefined {
  return SOLD_INVENTORY_DATA.find(vehicle => vehicle.id === id);
}
