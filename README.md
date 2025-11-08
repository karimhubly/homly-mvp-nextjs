# Homly MVP Next.js

This repository contains an MVP for **Homly**, a Tinder‑style rental platform built with Next.js and Tailwind CSS. The goal is to demonstrate the core flows of the app: browsing listings, filtering by location/bedrooms/price, viewing listing details, and integrating Lottie animations.

Currently the data is mocked in `lib/data.ts`. You can connect it to a real database by wiring up Supabase or another backend.

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/karimhubly/homly-mvp-nextjs.git
   cd homly-mvp-nextjs
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Copy `.env.example` to `.env.local` and set your Supabase keys:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Project Structure

- `app/` – Next.js App Router pages and layout.
- `components/` – Reusable UI components (LottiePlayer, PropertyCard, PropertiesList, SearchForm).
- `lib/` – Utility functions, mocked data (`data.ts`), and Supabase client.
- `sql/` – SQL schema for setting up a Supabase database.
- `public/` – Static assets such as images and Lottie animation JSON.

## Database

The `sql/schema.sql` file contains a minimal schema with tables for users, properties, messages and favorites. Run it in your Supabase project to create the database structure.

## Deployment

This project can be deployed to Vercel, Netlify or any platform that supports Next.js. Set the required environment variables in the hosting dashboard.

---

Built with ❤️ for the Homly prototype.
