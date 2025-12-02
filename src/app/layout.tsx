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
      <head>
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1268083376212572"
          crossOrigin="anonymous">
        </script>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
