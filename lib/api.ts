import { supabase } from './supabaseClient';
import type { Property } from './data';

// Fetch properties from Supabase. In this MVP we still use dummy data from lib/data.ts.
export async function fetchProperties(): Promise<Property[]> {
  const { data, error } = await supabase.from('properties').select('*');
  if (error) {
    console.error('Error fetching properties:', error.message);
    return [];
  }
  return (data as Property[]) || [];
}

// Create a new property record in Supabase.
export async function createProperty(property: Omit<Property, 'id'>) {
  const { error } = await supabase.from('properties').insert(property);
  if (error) throw new Error(error.message);
}

// Additional API calls (e.g. for messages, favorites) can be added here.
