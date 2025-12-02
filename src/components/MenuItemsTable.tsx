// src/components/MenuItemsTable.tsx
'use client';

import * as React from 'react';

export interface MenuItemRow {
  id: string;
  restaurantName: string;
  restaurantCode: string;
  cityCode: string;
  cityName: string;
  name: string;
  category: string;
  price: number;
  calories: number;
  proteinGrams: number;
  caloriesPerDollar: number;
  proteinPerDollar: number;
}

interface Props {
  items: MenuItemRow[];
}

type SortKey =
  | 'restaurantName'
  | 'cityName'
  | 'name'
  | 'price'
  | 'caloriesPerDollar'
  | 'proteinPerDollar';

export const MenuItemsTable: React.FC<Props> = ({ items }) => {
  const [sortKey, setSortKey] = React.useState<SortKey>('caloriesPerDollar');
  const [sortDir, setSortDir] = React.useState<'asc' | 'desc'>('desc');

  const sorted = React.useMemo(() => {
    const sortedItems = [...items];
    sortedItems.sort((a, b) => {
      const dir = sortDir === 'asc' ? 1 : -1;

      const valA = a[sortKey];
      const valB = b[sortKey];

      if (typeof valA === 'number' && typeof valB === 'number') {
        return (valA - valB) * dir;
      }

      return String(valA).localeCompare(String(valB)) * dir;
    });
    return sortedItems;
  }, [items, sortKey, sortDir]);

  const handleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortDir((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('desc');
    }
  };

  const sortLabel = (key: SortKey) =>
    sortKey === key ? (sortDir === 'asc' ? '↑' : '↓') : '';

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-800 bg-black/40 shadow-xl">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-900/80">
          <tr>
            <Th onClick={() => handleSort('restaurantName')}>
              Restaurant {sortLabel('restaurantName')}
            </Th>
            <Th onClick={() => handleSort('cityName')}>
              City {sortLabel('cityName')}
            </Th>
            <Th>Name</Th>
            <Th>Category</Th>
            <Th onClick={() => handleSort('price')}>
              Price ($) {sortLabel('price')}
            </Th>
            <Th>Calories</Th>
            <Th>Protein (g)</Th>
            <Th onClick={() => handleSort('caloriesPerDollar')}>
              Calories / $
              {sortLabel('caloriesPerDollar')}
            </Th>
            <Th onClick={() => handleSort('proteinPerDollar')}>
              Protein (g) / $
              {sortLabel('proteinPerDollar')}
            </Th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((item) => (
            <tr
              key={item.id}
              className="border-t border-gray-800 hover:bg-gray-900/70 transition-colors"
            >
              <Td>{item.restaurantName}</Td>
              <Td>
                <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-gray-200">
                  {item.cityName}
                </span>
              </Td>
              <Td>{item.name}</Td>
              <Td>
                <span className="rounded-full bg-blue-900/40 px-2 py-1 text-xs text-blue-200">
                  {item.category}
                </span>
              </Td>
              <Td>${item.price.toFixed(2)}</Td>
              <Td>{item.calories}</Td>
              <Td>{item.proteinGrams.toFixed(1)}</Td>
              <Td>{item.caloriesPerDollar.toFixed(1)}</Td>
              <Td>{item.proteinPerDollar.toFixed(2)}</Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Th: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ children, onClick }) => (
  <th
    onClick={onClick}
    className={
      'px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-300 ' +
      (onClick ? 'cursor-pointer select-none hover:text-white' : '')
    }
  >
    {children}
  </th>
);

const Td: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <td className="px-4 py-2 text-gray-100 align-middle">{children}</td>
);
