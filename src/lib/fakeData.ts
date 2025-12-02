// src/lib/fakeData.ts
import {
  MenuItem,
  MenuItemPriceByCity,
  Restaurant,
  RestaurantCode,
  City,
  CityCode,
} from './types';

export const restaurants: Restaurant[] = [
  { code: 'MCD', name: "McDonald's" },
  { code: 'POP', name: 'Popeyes' },
  { code: 'SUB', name: 'Subway' },
];

export const cities: City[] = [
  { code: 'NYC', name: 'New York, NY', slug: 'new-york' },
  { code: 'HOU', name: 'Houston, TX', slug: 'houston' },
];

// Base items – nutrition is the same regardless of city.
// Categories simplified: Sandwich, Side (for now).
export const menuItems: MenuItem[] = [
  // McDonald's
  {
    id: 'mcd-big-mac',
    restaurantCode: 'MCD',
    name: 'Big Mac',
    category: 'Sandwich', // burger -> Sandwich
    calories: 590,
    proteinGrams: 25,
  },
  {
    id: 'mcd-fries-medium',
    restaurantCode: 'MCD',
    name: 'Medium Fries',
    category: 'Side',
    calories: 320,
    proteinGrams: 4,
  },
  {
    id: 'mcd-mcnuggets-10',
    restaurantCode: 'MCD',
    name: '10 pc Chicken McNuggets',
    category: 'Side', // treat nuggets as Side for now
    calories: 440,
    proteinGrams: 23,
  },

  // Popeyes
  {
    id: 'pop-classic-sandwich',
    restaurantCode: 'POP',
    name: 'Classic Chicken Sandwich',
    category: 'Sandwich',
    calories: 699,
    proteinGrams: 28,
  },
  {
    id: 'pop-spicy-sandwich',
    restaurantCode: 'POP',
    name: 'Spicy Chicken Sandwich',
    category: 'Sandwich',
    calories: 700,
    proteinGrams: 28,
  },
  {
    id: 'pop-tenders-3pc',
    restaurantCode: 'POP',
    name: '3 pc Handcrafted Tenders',
    category: 'Side',
    calories: 445,
    proteinGrams: 28,
  },

  // Subway
  {
    id: 'sub-italian-bmt-6in',
    restaurantCode: 'SUB',
    name: 'Italian B.M.T. 6"',
    category: 'Sandwich',
    calories: 410,
    proteinGrams: 20,
  },
  {
    id: 'sub-turkey-6in',
    restaurantCode: 'SUB',
    name: 'Turkey Breast 6"',
    category: 'Sandwich',
    calories: 280,
    proteinGrams: 18,
  },
  {
    id: 'sub-meatball-marinara-6in',
    restaurantCode: 'SUB',
    name: 'Meatball Marinara 6"',
    category: 'Sandwich',
    calories: 460,
    proteinGrams: 20,
  },
];

// --- rest of fakeData.ts (prices, helpers) stays the same ---


// Per-city prices (totally tweakable later when we have real data).
export const menuItemPricesByCity: MenuItemPriceByCity[] = [
  // McDonald's – NYC
  {
    id: 'mcd-big-mac-nyc',
    menuItemId: 'mcd-big-mac',
    cityCode: 'NYC',
    price: 6.49,
  },
  {
    id: 'mcd-fries-medium-nyc',
    menuItemId: 'mcd-fries-medium',
    cityCode: 'NYC',
    price: 3.79,
  },
  {
    id: 'mcd-mcnuggets-10-nyc',
    menuItemId: 'mcd-mcnuggets-10',
    cityCode: 'NYC',
    price: 6.19,
  },

  // McDonald's – Houston
  {
    id: 'mcd-big-mac-hou',
    menuItemId: 'mcd-big-mac',
    cityCode: 'HOU',
    price: 5.99,
  },
  {
    id: 'mcd-fries-medium-hou',
    menuItemId: 'mcd-fries-medium',
    cityCode: 'HOU',
    price: 3.29,
  },
  {
    id: 'mcd-mcnuggets-10-hou',
    menuItemId: 'mcd-mcnuggets-10',
    cityCode: 'HOU',
    price: 5.69,
  },

  // Popeyes – NYC
  {
    id: 'pop-classic-sandwich-nyc',
    menuItemId: 'pop-classic-sandwich',
    cityCode: 'NYC',
    price: 5.49,
  },
  {
    id: 'pop-spicy-sandwich-nyc',
    menuItemId: 'pop-spicy-sandwich',
    cityCode: 'NYC',
    price: 5.49,
  },
  {
    id: 'pop-tenders-3pc-nyc',
    menuItemId: 'pop-tenders-3pc',
    cityCode: 'NYC',
    price: 6.29,
  },

  // Popeyes – Houston
  {
    id: 'pop-classic-sandwich-hou',
    menuItemId: 'pop-classic-sandwich',
    cityCode: 'HOU',
    price: 4.99,
  },
  {
    id: 'pop-spicy-sandwich-hou',
    menuItemId: 'pop-spicy-sandwich',
    cityCode: 'HOU',
    price: 4.99,
  },
  {
    id: 'pop-tenders-3pc-hou',
    menuItemId: 'pop-tenders-3pc',
    cityCode: 'HOU',
    price: 5.79,
  },

  // Subway – NYC
  {
    id: 'sub-italian-bmt-6in-nyc',
    menuItemId: 'sub-italian-bmt-6in',
    cityCode: 'NYC',
    price: 7.49,
  },
  {
    id: 'sub-turkey-6in-nyc',
    menuItemId: 'sub-turkey-6in',
    cityCode: 'NYC',
    price: 7.19,
  },
  {
    id: 'sub-meatball-marinara-6in-nyc',
    menuItemId: 'sub-meatball-marinara-6in',
    cityCode: 'NYC',
    price: 7.29,
  },

  // Subway – Houston
  {
    id: 'sub-italian-bmt-6in-hou',
    menuItemId: 'sub-italian-bmt-6in',
    cityCode: 'HOU',
    price: 6.49,
  },
  {
    id: 'sub-turkey-6in-hou',
    menuItemId: 'sub-turkey-6in',
    cityCode: 'HOU',
    price: 6.19,
  },
  {
    id: 'sub-meatball-marinara-6in-hou',
    menuItemId: 'sub-meatball-marinara-6in',
    cityCode: 'HOU',
    price: 6.29,
  },
];

export function getRestaurantName(code: RestaurantCode): string {
  return restaurants.find((r) => r.code === code)?.name ?? code;
}

export function getCityName(code: CityCode): string {
  return cities.find((c) => c.code === code)?.name ?? code;
}
