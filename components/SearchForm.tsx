'use client';
import { useState } from 'react';

export interface SearchParams {
  location: string;
  bedrooms: number | null;
  maxPrice: number | null;
}

export default function SearchForm({
  onSearch,
}: {
  onSearch: (params: SearchParams) => void;
}) {
  const [location, setLocation] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSearch({
      location: location.trim(),
      bedrooms: bedrooms ? parseInt(bedrooms, 10) : null,
      maxPrice: maxPrice ? parseInt(maxPrice, 10) : null,
    });
  }

  return (
    <form className="mb-6 flex flex-wrap gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Location (e.g. Downtown)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border border-gray-300 rounded px-2 py-1 flex-grow"
      />
      <input
        type="number"
        min="1"
        placeholder="Bedrooms"
        value={bedrooms}
        onChange={(e) => setBedrooms(e.target.value)}
        className="border border-gray-300 rounded px-2 py-1 w-32"
      />
      <input
        type="number"
        min="0"
        placeholder="Max price (AED)"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="border border-gray-300 rounded px-2 py-1 w-40"
      />
      <button
        type="submit"
        className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600"
      >
        Search
      </button>
    </form>
  );
}
