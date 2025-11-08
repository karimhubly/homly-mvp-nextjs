import type { Property } from '../lib/data';
import PropertyCard from './PropertyCard';

export default function PropertiesList({ properties }: { properties: Property[] }) {
  if (!properties.length) {
    return <p>No properties found. Try adjusting your filters.</p>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
