// src/app/page.tsx
'use client';

import * as React from 'react';
import { MenuItemsTable, MenuItemRow } from '@/components/MenuItemsTable';

interface ApiResponse {
  items: MenuItemRow[];
}

type CityFilter =
  | 'ALL'
  | 'NYC'
  | 'LAX'
  | 'CHI'
  | 'HOU'
  | 'PHX'
  | 'PHL'
  | 'SAN'
  | 'DAL'
  | 'SFO'
  | 'AUS';

type RestaurantFilter =
  | 'ALL'
  | 'MCD'
  | 'SBX'
  | 'SUB'
  | 'KFC'
  | 'DMO'
  | 'BKG'
  | 'PZH'
  | 'DNK'
  | 'KKR'
  | 'TCB';

type CategoryFilter =
  | 'ALL'
  | 'Sandwich'
  | 'Side'
  | 'Pizza'
  | 'Drink'
  | 'Dessert'
  | 'Breakfast';

export default function HomePage() {
  const [items, setItems] = React.useState<MenuItemRow[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const [cityFilter, setCityFilter] = React.useState<CityFilter>('ALL');
  const [restaurantFilter, setRestaurantFilter] =
    React.useState<RestaurantFilter>('ALL');
  const [categoryFilter, setCategoryFilter] =
    React.useState<CategoryFilter>('ALL');

  React.useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      setError(null);
      try {
        const params =
          cityFilter === 'ALL' ? '' : `?city=${encodeURIComponent(cityFilter)}`;
        const res = await fetch(`/api/menu-items${params}`);
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
  }, [cityFilter]);

  const filteredItems = React.useMemo(() => {
    return items.filter((item) => {
      const restaurantOk =
        restaurantFilter === 'ALL' ||
        item.restaurantCode === restaurantFilter;

      const categoryOk =
        categoryFilter === 'ALL' || item.category === categoryFilter;

      return restaurantOk && categoryOk;
    });
  }, [items, restaurantFilter, categoryFilter]);

  const summary = React.useMemo(() => {
    if (filteredItems.length === 0) {
      return null;
    }

    let bestCalories = filteredItems[0];
    let bestProtein = filteredItems[0];

    let sumCaloriesPerDollar = 0;
    let sumProteinPerDollar = 0;

    for (const item of filteredItems) {
      if (item.caloriesPerDollar > bestCalories.caloriesPerDollar) {
        bestCalories = item;
      }
      if (item.proteinPerDollar > bestProtein.proteinPerDollar) {
        bestProtein = item;
      }

      sumCaloriesPerDollar += item.caloriesPerDollar;
      sumProteinPerDollar += item.proteinPerDollar;
    }

    const count = filteredItems.length;
    const avgCaloriesPerDollar = sumCaloriesPerDollar / count;
    const avgProteinPerDollar = sumProteinPerDollar / count;

    return {
      count,
      bestCalories,
      bestProtein,
      avgCaloriesPerDollar,
      avgProteinPerDollar,
    };
  }, [filteredItems]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              Calories / Dollar – Fast Food Explorer
            </h1>
            <p className="mt-2 text-gray-300">
              Compare popular items from top chains by calories per dollar and
              protein per dollar, across major US cities.
            </p>
          </div>

          {/* City selector */}
          <div className="flex flex-col items-start gap-2 sm:items-end">
            <label className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              City
            </label>
            <select
              id="city-filter"
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value as CityFilter)}
              className="rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="ALL">All Cities</option>
              <option value="NYC">New York, NY</option>
              <option value="LAX">Los Angeles, CA</option>
              <option value="CHI">Chicago, IL</option>
              <option value="HOU">Houston, TX</option>
              <option value="PHX">Phoenix, AZ</option>
              <option value="PHL">Philadelphia, PA</option>
              <option value="SAN">San Diego, CA</option>
              <option value="DAL">Dallas, TX</option>
              <option value="SFO">San Francisco, CA</option>
              <option value="AUS">Austin, TX</option>
            </select>
          </div>
        </header>

        {/* Filter bar: restaurant + category */}
        <section className="mb-6 flex flex-col gap-4 rounded-xl bg-gray-950/70 p-4 border border-gray-800">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Restaurant filter */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                Restaurant
              </span>
              <div className="flex flex-wrap gap-2">
                {([
                  { label: 'All', value: 'ALL' },
                  { label: "McDonald's", value: 'MCD' },
                  { label: 'Starbucks', value: 'SBX' },
                  { label: 'Subway', value: 'SUB' },
                  { label: 'KFC', value: 'KFC' },
                  { label: "Domino's", value: 'DMO' },
                  { label: 'Burger King', value: 'BKG' },
                  { label: 'Pizza Hut', value: 'PZH' },
                  { label: 'Dunkin', value: 'DNK' },
                  { label: 'Krispy Kreme', value: 'KKR' },
                  { label: 'Taco Bell', value: 'TCB' },
                ] as const).map((opt) => (
                  <FilterPill
                    key={opt.value}
                    active={restaurantFilter === opt.value}
                    onClick={() =>
                      setRestaurantFilter(opt.value as RestaurantFilter)
                    }
                  >
                    {opt.label}
                  </FilterPill>
                ))}
              </div>
            </div>

            {/* Category filter */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                Category
              </span>
              <div className="flex flex-wrap gap-2">
                {([
                  { label: 'All', value: 'ALL' },
                  { label: 'Sandwich', value: 'Sandwich' },
                  { label: 'Side', value: 'Side' },
                  { label: 'Pizza', value: 'Pizza' },
                  { label: 'Drink', value: 'Drink' },
                  { label: 'Dessert', value: 'Dessert' },
                  { label: 'Breakfast', value: 'Breakfast' },
                ] as const).map((opt) => (
                  <FilterPill
                    key={opt.value}
                    active={categoryFilter === opt.value}
                    onClick={() =>
                      setCategoryFilter(opt.value as CategoryFilter)
                    }
                  >
                    {opt.label}
                  </FilterPill>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Summary strip – based on filtered items */}
        {!loading && !error && summary && (
          <section className="mb-6 grid gap-4 md:grid-cols-3">
            {/* Card 1: count + averages */}
            <SummaryCard title="Current view">
              <p className="text-2xl font-semibold">
                {summary.count}{' '}
                <span className="text-sm font-normal text-gray-400">
                  item{summary.count === 1 ? '' : 's'}
                </span>
              </p>
              <p className="mt-2 text-xs text-gray-400">
                Avg calories / $:{' '}
                <span className="font-semibold text-gray-100">
                  {summary.avgCaloriesPerDollar.toFixed(1)}
                </span>
              </p>
              <p className="text-xs text-gray-400">
                Avg protein (g) / $:{' '}
                <span className="font-semibold text-gray-100">
                  {summary.avgProteinPerDollar.toFixed(2)}
                </span>
              </p>
            </SummaryCard>

            {/* Card 2: best calories / $ */}
            <SummaryCard title="Top calories per dollar">
              <p className="text-sm font-semibold text-gray-100">
                {summary.bestCalories.name}
              </p>
              <p className="mt-1 text-xs text-gray-400">
                {summary.bestCalories.restaurantName} ·{' '}
                {summary.bestCalories.cityName}
              </p>
              <p className="mt-3 text-lg font-semibold">
                {summary.bestCalories.caloriesPerDollar.toFixed(1)}{' '}
                <span className="text-xs font-normal text-gray-400">
                  cal / $
                </span>
              </p>
            </SummaryCard>

            {/* Card 3: best protein / $ */}
            <SummaryCard title="Top protein per dollar">
              <p className="text-sm font-semibold text-gray-100">
                {summary.bestProtein.name}
              </p>
              <p className="mt-1 text-xs text-gray-400">
                {summary.bestProtein.restaurantName} ·{' '}
                {summary.bestProtein.cityName}
              </p>
              <p className="mt-3 text-lg font-semibold">
                {summary.bestProtein.proteinPerDollar.toFixed(2)}{' '}
                <span className="text-xs font-normal text-gray-400">
                  g protein / $
                </span>
              </p>
            </SummaryCard>
          </section>
        )}

        {loading && <p>Loading menu items…</p>}
        {error && (
          <p className="mb-4 text-red-400">Error loading data: {error}</p>
        )}

        {!loading && !error && <MenuItemsTable items={filteredItems} />}
      </div>
    </main>
  );
}

const FilterPill: React.FC<{
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ active, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className={
      'rounded-full px-3 py-1 text-xs sm:text-sm border transition-colors ' +
      (active
        ? 'border-blue-500 bg-blue-600 text-white shadow-md'
        : 'border-gray-700 bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white')
    }
  >
    {children}
  </button>
);

const SummaryCard: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <div className="rounded-xl border border-gray-800 bg-gray-950/80 p-4 shadow-md">
    <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-400">
      {title}
    </h2>
    <div className="mt-2">{children}</div>
  </div>
);
