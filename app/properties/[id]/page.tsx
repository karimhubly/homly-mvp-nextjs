'use client';

import { useParams, useRouter } from 'next/navigation';
import { dummyProperties } from '../../../lib/data';

export default function PropertyDetails() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const property = dummyProperties.find((p) => p.id === Number(id));

  if (!property) {
    return <div className="p-4">Property not found.</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <img
        src={property.images[0]}
        alt={property.title}
        className="w-full h-64 object-cover rounded-xl mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
      <p className="text-gray-600 mb-1">{property.location}</p>
      <p className="text-gray-600 mb-4">
        {property.bedrooms} bedroom{property.bedrooms > 1 ? 's' : ''} · AED{' '}
        {property.price.toLocaleString()}
      </p>
      <p className="mb-4">{property.description}</p>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        onClick={() => router.back()}
      >
        Back
      </button>
    </div>
  );
}
