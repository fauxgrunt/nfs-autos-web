// Centralized Inventory Data
export interface Vehicle {
  id: string; // URL slug
  make: string;
  model: string;
  title: string; // Full display title
  year: number;
  estLandedCost: string; // Changed from price for sourcing agent model
  mileage: string;
  odometer: number; // Numeric value for specs
  transmission: string;
  bodyType: string;
  engine: string;
  fuel: string;
  grade: string; // Auction grade
  color: string;
  status: string;
  location: string;
  badges?: string[];
  features?: string[];
  gallery?: string[];
  // Main card image (for inventory grid)
  image: string;
  // Gallery images (for detail page)
  images: string[];
}

export const INVENTORY_DATA: Vehicle[] = [
  {
    id: 'lexus-ls460-2006',
    make: 'Lexus',
    model: 'LS460 Version S',
    title: '2006 Lexus LS460 Version S',
    year: 2006,
    estLandedCost: '$16,490',
    mileage: '87,160 km',
    odometer: 87160,
    transmission: 'Automatic (8-Speed)',
    bodyType: 'Sedan',
    engine: 'V8 4.6L',
    fuel: 'Petrol',
    grade: '4.0',
    color: 'Pearl White',
    status: 'Auction Opportunity',
    location: 'Japan Auction',
    image: '/inventory/2026/January/headers/lexus-ls460.png',
    images: [
      '/inventory/2026/January/headers/lexus-ls460.png',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
    ]
  },
  {
    id: 'toyota-mark-x-250g-2008',
    make: 'Toyota',
    model: 'Mark X 250G S-Package',
    title: '2008 Toyota Mark X 250G S-Package',
    year: 2008,
    estLandedCost: '$12,490',
    mileage: '50,541 km',
    odometer: 50541,
    transmission: 'Automatic (6-Speed)',
    bodyType: 'Sedan',
    engine: '2.5L',
    fuel: 'Petrol',
    grade: '3.5',
    color: 'Pearl White',
    status: 'Available Now',
    location: 'Japan Auction',
    badges: ['P-Plate Legal', '252HP V6', 'Factory LSD'],
    features: [
      'TEMS Suspension Control',
      'Radar Cruise Control',
      'Rear Auto Shade',
      'Factory Navigation & Reverse Camera',
      'AFS Xenon Lights',
      'Auto Reverse Park',
      'Includes Compliance & Blue Slip'
    ],
    gallery: [
      '/inventory/2026/January/headers/markx-2008.png',
      '/inventory/2026/January/mark-x-2008-01.jpg',
      '/inventory/2026/January/mark-x-2008-02.jpg',
      '/inventory/2026/January/mark-x-2008-03.jpg',
      '/inventory/2026/January/mark-x-2008-04.jpg',
      '/inventory/2026/January/mark-x-2008-05.jpg',
      '/inventory/2026/January/mark-x-2008-06.jpg',
      '/inventory/2026/January/mark-x-2008-07.jpg'
    ],
    image: '/inventory/2026/January/headers/markx-2008.png',
    images: [
      '/inventory/2026/January/headers/markx-2008.png',
      '/inventory/2026/January/mark-x-2008-02.jpg',
      '/inventory/2026/January/mark-x-2008-03.jpg',
      '/inventory/2026/January/mark-x-2008-04.jpg',
      '/inventory/2026/January/mark-x-2008-05.jpg',
      '/inventory/2026/January/mark-x-2008-06.jpg',
      '/inventory/2026/January/mark-x-2008-07.jpg'
    ]
  },
  {
    id: 'toyota-mark-x-2004',
    make: 'Toyota',
    model: 'Mark X',
    title: '2004 Toyota Mark X',
    year: 2004,
    estLandedCost: '$13,290',
    mileage: '33,581 km',
    odometer: 33581,
    transmission: 'Automatic (6-Speed)',
    bodyType: 'Sedan',
    engine: '2.5L',
    fuel: 'Petrol',
    grade: '4.0',
    color: 'Silver',
    status: 'Auction Opportunity',
    location: 'Japan Auction',
    image: '/inventory/2026/January/headers/markx-2004.png',
    images: [
      '/inventory/2026/January/headers/markx-2004.png',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=80',
    ]
  },
  {
    id: 'toyota-mark-x-2005',
    make: 'Toyota',
    model: 'Mark X',
    title: '2005 Toyota Mark X',
    year: 2005,
    estLandedCost: 'Enquire for Quote',
    mileage: '130,952 km',
    odometer: 130952,
    transmission: 'Automatic (6-Speed)',
    bodyType: 'Sedan',
    engine: '2.5L',
    fuel: 'Petrol',
    grade: '3.5',
    color: 'Silver',
    status: 'Budget Sourcing',
    location: 'Japan Auction',
    image: '/inventory/2026/January/headers/markx-2005.png',
    images: [
      '/inventory/2026/January/headers/markx-2005.png',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=80',
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
