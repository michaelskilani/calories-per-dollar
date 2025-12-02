'use client';

import * as React from 'react';
import { MenuItemsTable, MenuItemRow } from '@/components/MenuItemsTable';

interface ApiResponse {
  items: MenuItemRow[];
}

export default function HomePage() {
  const [items, setItems] = React.useState<MenuItemRow[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch('/api/menu-items');
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const data: ApiResponse = await res.json();
        setItems(data.items);
      } catch (err: any) {
        console.error(err);
        setError(err?.message ?? 'Failed to load menu items');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">
            Calories / Dollar – Fast Food Explorer
          </h1>
          <p className="mt-2 text-gray-300">
            Comparing menu items from McDonald&apos;s, Popeyes, and Subway by
            calories per dollar and protein per dollar.
          </p>
        </header>

        {loading && <p>Loading menu items…</p>}
        {error && (
          <p className="mb-4 text-red-400">Error loading data: {error}</p>
        )}

        {!loading && !error && <MenuItemsTable items={items} />}
      </div>
    </main>
  );
}
