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
    id: 'honda-civic-type-r-2018',
    make: 'Honda',
    model: 'Civic Type R',
    title: '2018 Honda Civic Type R FK8',
    year: 2018,
    soldPrice: 42500,
    mileage: '32,000 km',
    odometer: 32000,
    transmission: 'Manual',
    bodyType: 'Hatchback',
    engine: '2.0L Turbo I4',
    fuel: 'Petrol',
    soldTo: 'Melbourne, VIC',
    soldDate: 'January 2026',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80'
    ]
  },
  {
    id: 'nissan-silvia-s15-2002',
    make: 'Nissan',
    model: 'Silvia S15',
    title: '2002 Nissan Silvia S15 Spec R',
    year: 2002,
    soldPrice: 38900,
    mileage: '78,000 km',
    odometer: 78000,
    transmission: 'Manual',
    bodyType: 'Coupe',
    engine: '2.0L Turbo I4 (SR20DET)',
    fuel: 'Petrol',
    soldTo: 'Sydney, NSW',
    soldDate: 'December 2025',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80'
    ]
  },
  {
    id: 'subaru-wrx-sti-2012',
    make: 'Subaru',
    model: 'WRX STI',
    title: '2012 Subaru WRX STI',
    year: 2012,
    soldPrice: 35500,
    mileage: '85,000 km',
    odometer: 85000,
    transmission: 'Manual',
    bodyType: 'Sedan',
    engine: '2.5L Turbo Boxer',
    fuel: 'Petrol',
    soldTo: 'Brisbane, QLD',
    soldDate: 'December 2025',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80'
    ]
  },
  {
    id: 'mazda-rx7-fd-1999',
    make: 'Mazda',
    model: 'RX-7 FD',
    title: '1999 Mazda RX-7 Type RZ',
    year: 1999,
    soldPrice: 52000,
    mileage: '62,000 km',
    odometer: 62000,
    transmission: 'Manual',
    bodyType: 'Coupe',
    engine: '1.3L Twin-Turbo Rotary',
    fuel: 'Petrol',
    soldTo: 'Perth, WA',
    soldDate: 'November 2025',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80'
    ]
  }
];

export function getSoldVehicleById(id: string): SoldVehicle | undefined {
  return SOLD_INVENTORY_DATA.find(vehicle => vehicle.id === id);
}
