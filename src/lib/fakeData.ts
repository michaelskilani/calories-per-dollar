import { MenuItem, Restaurant, RestaurantCode } from './types';

export const restaurants: Restaurant[] = [
  { code: 'MCD', name: "McDonald's" },
  { code: 'POP', name: 'Popeyes' },
  { code: 'SUB', name: 'Subway' },
];

export const menuItems: MenuItem[] = [
  // McDonald's
  {
    id: 'mcd-big-mac',
    restaurantCode: 'MCD',
    name: 'Big Mac',
    category: 'Burger',
    price: 5.99,
    calories: 590,
    proteinGrams: 25,
  },
  {
    id: 'mcd-fries-medium',
    restaurantCode: 'MCD',
    name: 'Medium Fries',
    category: 'Side',
    price: 3.29,
    calories: 320,
    proteinGrams: 4,
  },
  {
    id: 'mcd-mcnuggets-10',
    restaurantCode: 'MCD',
    name: '10 pc Chicken McNuggets',
    category: 'Chicken',
    price: 5.49,
    calories: 440,
    proteinGrams: 23,
  },

  // Popeyes
  {
    id: 'pop-classic-sandwich',
    restaurantCode: 'POP',
    name: 'Classic Chicken Sandwich',
    category: 'Sandwich',
    price: 4.99,
    calories: 699,
    proteinGrams: 28,
  },
  {
    id: 'pop-spicy-sandwich',
    restaurantCode: 'POP',
    name: 'Spicy Chicken Sandwich',
    category: 'Sandwich',
    price: 4.99,
    calories: 700,
    proteinGrams: 28,
  },
  {
    id: 'pop-tenders-3pc',
    restaurantCode: 'POP',
    name: '3 pc Handcrafted Tenders',
    category: 'Chicken',
    price: 5.79,
    calories: 445,
    proteinGrams: 28,
  },

  // Subway
  {
    id: 'sub-italian-bmt-6in',
    restaurantCode: 'SUB',
    name: 'Italian B.M.T. 6"',
    category: 'Sub',
    price: 6.49,
    calories: 410,
    proteinGrams: 20,
  },
  {
    id: 'sub-turkey-6in',
    restaurantCode: 'SUB',
    name: 'Turkey Breast 6"',
    category: 'Sub',
    price: 6.19,
    calories: 280,
    proteinGrams: 18,
  },
  {
    id: 'sub-meatball-marinara-6in',
    restaurantCode: 'SUB',
    name: 'Meatball Marinara 6"',
    category: 'Sub',
    price: 6.29,
    calories: 460,
    proteinGrams: 20,
  },
];

// Helper: map code -> restaurant name
export function getRestaurantName(code: RestaurantCode): string {
  return restaurants.find((r) => r.code === code)?.name ?? code;
}
