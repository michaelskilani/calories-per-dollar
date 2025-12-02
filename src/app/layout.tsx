import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calories / Dollar',
  description: 'Compare fast food by calories and protein per dollar.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
