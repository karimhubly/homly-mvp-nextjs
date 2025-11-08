'use client';

import { useState } from 'react';
import LottiePlayer from '../components/LottiePlayer';
import SearchForm, { SearchParams } from '../components/SearchForm';
import PropertiesList from '../components/PropertiesList';
import { dummyProperties } from '../lib/data';

export default function HomePage() {
  const [filters, setFilters] = useState<SearchParams | null>(null);

  const filtered = dummyProperties.filter((property) => {
    if (!filters) return true;
    const matchesLocation =
      !filters.location ||
      property.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesBedrooms =
      !filters.bedrooms || property.bedrooms >= filters.bedrooms;
    const matchesMaxPrice =
      !filters.maxPrice || property.price <= filters.maxPrice;
    return matchesLocation && matchesBedrooms && matchesMaxPrice;
  });

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="mb-8">
        <LottiePlayer path="/lottie/home-animation.json" className="h-48" />
      </div>
      <h1 className="text-3xl font-bold mb-4">Find your next home</h1>
      <SearchForm onSearch={setFilters} />
      <PropertiesList properties={filtered} />
    </div>
  );
}
