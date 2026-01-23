// Sold Inventory Data - Recently Sold Vehicles
export interface SoldVehicle {
  id: string;
  make: string;
  model: string;
  title: string;
  year: number;
  mileage: string;
  odometer: number;
  color: string;
  image: string;
}

export const SOLD_INVENTORY_DATA: SoldVehicle[] = [
  {
    id: 'toyota-mark-x-2006',
    make: 'Toyota',
    model: 'Mark X',
    title: '2006 Toyota Mark X',
    year: 2006,
    mileage: '87,789 km',
    odometer: 87789,
    color: 'White',
    image: '/sold/headers-sold/markx-2006.png',
  },
  {
    id: 'toyota-mark-x-2007',
    make: 'Toyota',
    model: 'Mark X',
    title: '2007 Toyota Mark X',
    year: 2007,
    mileage: '100,301 km',
    odometer: 100301,
    color: 'Silver',
    image: '/sold/headers-sold/markx-2007.png',
  },
  {
    id: 'toyota-crown-2006',
    make: 'Toyota',
    model: 'Crown',
    title: '2006 Toyota Crown',
    year: 2006,
    mileage: '126,622 km',
    odometer: 126622,
    color: 'Silver',
    image: '/sold/headers-sold/crown-2006.png',
  },
  {
    id: 'subaru-legacy-gtb-2001',
    make: 'Subaru',
    model: 'Legacy GT-B',
    title: '2001 Subaru Legacy GT-B',
    year: 2001,
    mileage: '85,056 km',
    odometer: 85056,
    color: 'White',
    image: '/sold/headers-sold/subaru-2001.png',
  },
];
