import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client using environment variables. These should be
// configured in your .env.local file.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
