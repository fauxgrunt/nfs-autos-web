import InventoryClient from './InventoryClient';
import { client, urlFor } from '../lib/sanity';

interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

interface SanityCar {
  _id: string;
  title: string;
  price: string;
  mileage: number;
  transmission: string;
  fuelType: string;
  slug: string;
  mainImage: SanityImage;
  color: string;
}

export default async function InventoryPage() {
  const query = `*[_type == "car" && status == "available"] | order(_createdAt desc) { _id, title, price, mileage, transmission, fuelType, "slug": slug.current, mainImage, "color": exteriorColor }`;
  const data = await client.fetch(query);

  const cars = (data || []).map((car: SanityCar) => ({
    id: car._id,
    title: car.title,
    price: car.price,
    mileage: car.mileage,
    transmission: car.transmission ?? 'N/A', // Default to 'N/A' if null
    fuelType: car.fuelType ?? 'N/A', // Default to 'N/A' if null
    slug: car.slug,
    mainImage: car.mainImage,
    image: car.mainImage ? urlFor(car.mainImage).url() : '/placeholder.png', // Fallback image
    exteriorColor: car.color ?? 'Unknown', // Default to 'Unknown' if null
  }));

  return <InventoryClient initialCars={cars} />;
}