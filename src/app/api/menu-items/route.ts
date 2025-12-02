import { NextResponse } from 'next/server';
import { menuItems, getRestaurantName } from '@/lib/fakeData';
import { MenuItem } from '@/lib/types';

export interface MenuItemWithMetrics extends MenuItem {
  restaurantName: string;
  caloriesPerDollar: number;
  proteinPerDollar: number;
}

export async function GET() {
  // In a real backend, you would query the DB here.
  const items: MenuItemWithMetrics[] = menuItems.map((item) => {
    const caloriesPerDollar =
      item.price > 0 ? item.calories / item.price : 0;

    const proteinPerDollar =
      item.price > 0 ? item.proteinGrams / item.price : 0;

    return {
      ...item,
      restaurantName: getRestaurantName(item.restaurantCode),
      caloriesPerDollar,
      proteinPerDollar,
    };
  });

  // Simple default sort: highest calories per dollar first
  items.sort((a, b) => b.caloriesPerDollar - a.caloriesPerDollar);

  return NextResponse.json({ items });
}
