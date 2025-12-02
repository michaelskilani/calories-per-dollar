import { NextResponse } from 'next/server';
import {
  menuItems,
  menuItemPricesByCity,
  getRestaurantName,
  getCityName,
} from '@/lib/fakeData';
import { CityCode } from '@/lib/types';

export interface MenuItemApiRow {
  id: string;
  menuItemId: string;
  restaurantCode: string;
  restaurantName: string;
  cityCode: CityCode;
  cityName: string;
  name: string;
  category: string;
  price: number;
  calories: number;
  proteinGrams: number;
  caloriesPerDollar: number;
  proteinPerDollar: number;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cityParam = searchParams.get('city'); // 'NYC' | 'HOU' | 'ALL' | null

  let cityFilter: CityCode | null = null;
  if (cityParam === 'NYC' || cityParam === 'HOU') {
    cityFilter = cityParam;
  }

  const rows: MenuItemApiRow[] = [];

  for (const priceRow of menuItemPricesByCity) {
    if (cityFilter && priceRow.cityCode !== cityFilter) continue;

    const baseItem = menuItems.find((m) => m.id === priceRow.menuItemId);
    if (!baseItem) continue;

    const caloriesPerDollar =
      priceRow.price > 0 ? baseItem.calories / priceRow.price : 0;

    const proteinPerDollar =
      priceRow.price > 0 ? baseItem.proteinGrams / priceRow.price : 0;

    rows.push({
      id: priceRow.id,
      menuItemId: baseItem.id,
      restaurantCode: baseItem.restaurantCode,
      restaurantName: getRestaurantName(baseItem.restaurantCode),
      cityCode: priceRow.cityCode,
      cityName: getCityName(priceRow.cityCode),
      name: baseItem.name,
      category: baseItem.category,
      price: priceRow.price,
      calories: baseItem.calories,
      proteinGrams: baseItem.proteinGrams,
      caloriesPerDollar,
      proteinPerDollar,
    });
  }

  // Default sort: highest calories per dollar first.
  rows.sort((a, b) => b.caloriesPerDollar - a.caloriesPerDollar);

  return NextResponse.json({ items: rows });
}
