import { client } from '../lib/sanity';
import Link from 'next/link';

// Define what a "Car" looks like
interface Car {
  _id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  slug: { current: string };
  condition: string;
  fuel: string;
  transmission: string;
  description?: string; // We used this for the image link in the script
}

// Fetch data from Sanity
async function getCars() {
  const query = `*[_type == "car"] | order(_createdAt desc) {
    _id,
    make,
    model,
    year,
    price,
    condition,
    fuel,
    transmission,
    slug,
    description
  }`;
  return await client.fetch<Car[]>(query);
}

export default async function InventoryPage() {
  const cars = await getCars();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Current Inventory</h1>
        </div>

        {/* EMPTY STATE (This will show until you add data) */}
        {cars.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-16 shadow-sm text-center border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900">Inventory Coming Soon</h3>
            <p className="mt-2 text-gray-500">
              We are currently updating our stock list. Please check back later.
            </p>
          </div>
        ) : (
          /* GRID STATE (This will show automatically when data exists) */
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cars.map((car) => (
              <Link 
                key={car._id} 
                href={`/inventory/${car.slug?.current}`} 
                className="group block overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md border border-gray-100"
              >
                <div className="aspect-video relative bg-gray-200 overflow-hidden">
                  {/* Shows placeholder until you upload real images */}
                  <div className="flex h-full items-center justify-center text-gray-400">
                    {car.make} Image
                  </div>
                </div>

                <div className="p-5">
                  <div className="mb-1 text-sm font-medium text-gray-500">{car.year}</div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700">{car.make} {car.model}</h3>
                  <p className="text-xl font-bold text-blue-700 mt-2">
                    {new Intl.NumberFormat('en-BD').format(car.price)} BDT
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}