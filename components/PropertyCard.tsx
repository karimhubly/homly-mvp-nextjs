import Link from 'next/link';
import type { Property } from '../lib/data';

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/properties/${property.id}`}>
      <div className="border rounded overflow-hidden hover:shadow-lg transition cursor-pointer">
        <div className="h-40 bg-gray-100 flex items-center justify-center">
          {property.images && property.images[0] && (
            <img
              src={property.images[0]}
              alt={property.title}
              className="object-cover w-full h-full"
            />
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold">{property.title}</h3>
          <p className="text-sm text-gray-600">{property.location}</p>
          <p className="text-emerald-600 font-semibold mt-2">
            AED {property.price.toLocaleString()}
          </p>
          <p className="text-sm mt-1">{property.bedrooms} bedrooms</p>
        </div>
      </div>
    </Link>
  );
}
