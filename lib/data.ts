export interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  images: string[];
  description: string;
}

// Dummy property data. Replace with Supabase fetch in production.
export const dummyProperties: Property[] = [
  {
    id: 1,
    title: 'Modern Studio in Downtown',
    location: 'Downtown Dubai',
    price: 5000,
    bedrooms: 1,
    images: ['/images/studio.png'],
    description:
      'A stylish studio with modern amenities close to Dubai Mall.',
  },
  {
    id: 2,
    title: 'Family Villa with Pool',
    location: 'Palm Jumeirah',
    price: 25000,
    bedrooms: 4,
    images: ['/images/villa.png'],
    description:
      'Luxury villa with private pool and garden in Palm Jumeirah.',
  },
  {
    id: 3,
    title: 'Cozy Apartment near Metro',
    location: 'JLT',
    price: 8000,
    bedrooms: 2,
    images: ['/images/apartment.png'],
    description:
      'Conveniently located apartment within walking distance to the Metro.',
  },
];
