import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Homly – Smart Rental Platform',
  description: 'Swipe, match and rent your next home.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <main className="flex-grow">{children}</main>
        <footer className="py-4 text-center text-sm text-gray-500">
          Built with love for Homly.
        </footer>
      </body>
    </html>
  );
}
