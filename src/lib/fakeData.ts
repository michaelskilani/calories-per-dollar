// src/lib/fakeData.ts
import {
  City,
  CityCode,
  MenuItem,
  MenuItemPriceByCity,
  Restaurant,
  RestaurantCode,
} from './types';

// ---------- RESTAURANTS ----------

export const restaurants: Restaurant[] = [
  { code: 'MCD', name: "McDonald's" },
  { code: 'SBX', name: 'Starbucks' },
  { code: 'SUB', name: 'Subway' },
  { code: 'KFC', name: 'KFC' },
  { code: 'DMO', name: "Domino's" },
  { code: 'BKG', name: 'Burger King' },
  { code: 'PZH', name: 'Pizza Hut' },
  { code: 'DNK', name: 'Dunkin\'' },
  { code: 'KKR', name: 'Krispy Kreme' },
  { code: 'TCB', name: 'Taco Bell' },
];

export function getRestaurantName(code: RestaurantCode): string {
  return restaurants.find((r) => r.code === code)?.name ?? code;
}

// ---------- CITIES ----------

export const cities: City[] = [
  { code: 'NYC', name: 'New York', slug: 'new-york' },
  { code: 'LAX', name: 'Los Angeles', slug: 'los-angeles' },
  { code: 'CHI', name: 'Chicago', slug: 'chicago' },
  { code: 'HOU', name: 'Houston', slug: 'houston' },
  { code: 'PHX', name: 'Phoenix', slug: 'phoenix' },
  { code: 'PHL', name: 'Philadelphia', slug: 'philadelphia' },
  { code: 'SAN', name: 'San Diego', slug: 'san-diego' },
  { code: 'DAL', name: 'Dallas', slug: 'dallas' },
  { code: 'SFO', name: 'San Francisco', slug: 'san-francisco' },
  { code: 'AUS', name: 'Austin', slug: 'austin' },
];

export function getCityName(code: CityCode): string {
  return cities.find((c) => c.code === code)?.name ?? code;
}

// City price multipliers (very rough cost-of-living / menu adjustments).
const cityPriceMultipliers: Record<CityCode, number> = {
  NYC: 1.20,
  LAX: 1.15,
  CHI: 1.10,
  HOU: 1.00,
  PHX: 1.00,
  PHL: 1.10,
  SAN: 1.12,
  DAL: 1.00,
  SFO: 1.22,
  AUS: 1.05,
};

// ---------- MENU ITEMS ----------
// NOTE: All calories/protein/basePrice are approximate placeholders, not exact per-store values.

// 5 popular-ish items per restaurant.
export const menuItems: MenuItem[] = [
  // ----- McDonald's -----
  {
    id: 'mcd-big-mac',
    restaurantCode: 'MCD',
    name: 'Big Mac',
    category: 'Sandwich',
    calories: 580,        // McD official nutrition approx
    proteinGrams: 25,
    basePrice: 6.19,
  },
  {
    id: 'mcd-quarter-pounder-cheese',
    restaurantCode: 'MCD',
    name: 'Quarter Pounder with Cheese',
    category: 'Sandwich',
    calories: 520,
    proteinGrams: 30,
    basePrice: 6.69,
  },
  {
    id: 'mcd-10pc-mcnuggets',
    restaurantCode: 'MCD',
    name: '10 pc Chicken McNuggets',
    category: 'Side',
    calories: 440,
    proteinGrams: 23,
    basePrice: 6.39,
  },
  {
    id: 'mcd-medium-fries',
    restaurantCode: 'MCD',
    name: 'Medium Fries',
    category: 'Side',
    calories: 320,
    proteinGrams: 4,
    basePrice: 3.59,
  },
  {
    id: 'mcd-mcchicken',
    restaurantCode: 'MCD',
    name: 'McChicken',
    category: 'Sandwich',
    calories: 400,
    proteinGrams: 14,
    basePrice: 2.99,
  },

  // ----- Starbucks -----
  {
    id: 'sbx-grande-caffe-latte',
    restaurantCode: 'SBX',
    name: 'Caffè Latte (Grande)',
    category: 'Drink',
    calories: 190,        // ~190 cal, ~12–13g protein for 16oz latte with milk
    proteinGrams: 12,
    basePrice: 4.95,
  },
  {
    id: 'sbx-grande-caramel-macchiato',
    restaurantCode: 'SBX',
    name: 'Caramel Macchiato (Grande)',
    category: 'Drink',
    calories: 250,
    proteinGrams: 10,
    basePrice: 5.75,
  },
  {
    id: 'sbx-grande-cold-brew',
    restaurantCode: 'SBX',
    name: 'Cold Brew Coffee (Grande)',
    category: 'Drink',
    calories: 5,
    proteinGrams: 0,
    basePrice: 4.45,
  },
  {
    id: 'sbx-grande-mocha-frappuccino',
    restaurantCode: 'SBX',
    name: 'Mocha Frappuccino (Grande)',
    category: 'Drink',
    calories: 370,
    proteinGrams: 6,
    basePrice: 5.95,
  },
  {
    id: 'sbx-grande-vanilla-protein-latte',
    restaurantCode: 'SBX',
    name: 'Vanilla Protein Latte (Grande)',
    category: 'Drink',
    calories: 260,
    proteinGrams: 27,
    basePrice: 6.45,
  },

  // ----- Subway -----
  {
    id: 'sub-italian-bmt-6in',
    restaurantCode: 'SUB',
    name: 'Italian B.M.T. 6"',
    category: 'Sandwich',
    calories: 410,
    proteinGrams: 20,
    basePrice: 6.79,
  },
  {
    id: 'sub-turkey-6in',
    restaurantCode: 'SUB',
    name: 'Turkey Breast 6"',
    category: 'Sandwich',
    calories: 280,
    proteinGrams: 18,
    basePrice: 6.49,
  },
  {
    id: 'sub-tuna-6in',
    restaurantCode: 'SUB',
    name: 'Tuna 6"',
    category: 'Sandwich',
    calories: 450,
    proteinGrams: 19,
    basePrice: 6.99,
  },
  {
    id: 'sub-italian-bmt-footlong',
    restaurantCode: 'SUB',
    name: 'Italian B.M.T. Footlong',
    category: 'Sandwich',
    calories: 820,
    proteinGrams: 40,
    basePrice: 10.99,
  },
  {
    id: 'sub-veggie-delite-6in',
    restaurantCode: 'SUB',
    name: 'Veggie Delite 6"',
    category: 'Sandwich',
    calories: 200,
    proteinGrams: 8,
    basePrice: 5.49,
  },

  // ----- KFC -----
  {
    id: 'kfc-original-breast-combo',
    restaurantCode: 'KFC',
    name: '2 pc Original Recipe Combo (Breast & Wing)',
    category: 'Sandwich',
    calories: 780, // chicken + sides etc (approx)
    proteinGrams: 45,
    basePrice: 8.49,
  },
  {
    id: 'kfc-3pc-tenders-combo',
    restaurantCode: 'KFC',
    name: '3 pc Tenders Combo',
    category: 'Sandwich',
    calories: 800,
    proteinGrams: 45,
    basePrice: 9.29,
  },
  {
    id: 'kfc-chicken-sandwich-combo',
    restaurantCode: 'KFC',
    name: 'KFC Chicken Sandwich Combo',
    category: 'Sandwich',
    calories: 950,
    proteinGrams: 40,
    basePrice: 9.49,
  },
  {
    id: 'kfc-famous-bowl',
    restaurantCode: 'KFC',
    name: 'Famous Bowl',
    category: 'Side',
    calories: 720,
    proteinGrams: 26,
    basePrice: 6.49,
  },
  {
    id: 'kfc-popcorn-nuggets',
    restaurantCode: 'KFC',
    name: 'Popcorn Nuggets (Large)',
    category: 'Side',
    calories: 620,
    proteinGrams: 25,
    basePrice: 5.79,
  },

  // ----- Domino's -----
  {
    id: 'dmo-med-hand-tossed-cheese',
    restaurantCode: 'DMO',
    name: 'Medium Hand Tossed Cheese Pizza',
    category: 'Pizza',
    calories: 1920, // ~240 cal * 8 slices
    proteinGrams: 96, // ~12g * 8
    basePrice: 13.99,
  },
  {
    id: 'dmo-med-hand-tossed-pepperoni',
    restaurantCode: 'DMO',
    name: 'Medium Hand Tossed Pepperoni Pizza',
    category: 'Pizza',
    calories: 2080,
    proteinGrams: 104,
    basePrice: 15.49,
  },
  {
    id: 'dmo-med-specialty-extravaganzza',
    restaurantCode: 'DMO',
    name: 'Medium Extravaganzza Specialty Pizza',
    category: 'Pizza',
    calories: 2200,
    proteinGrams: 110,
    basePrice: 17.99,
  },
  {
    id: 'dmo-stuffed-cheesy-bread',
    restaurantCode: 'DMO',
    name: 'Stuffed Cheesy Bread',
    category: 'Side',
    calories: 1440,
    proteinGrams: 60,
    basePrice: 7.99,
  },
  {
    id: 'dmo-8pc-wings',
    restaurantCode: 'DMO',
    name: '8 pc Wings (Hot Buffalo)',
    category: 'Side',
    calories: 640,
    proteinGrams: 56,
    basePrice: 9.99,
  },

  // ----- Burger King -----
  {
    id: 'bkg-whopper',
    restaurantCode: 'BKG',
    name: 'Whopper',
    category: 'Sandwich',
    calories: 670,
    proteinGrams: 29,
    basePrice: 6.49,
  },
  {
    id: 'bkg-whopper-jr',
    restaurantCode: 'BKG',
    name: 'Whopper Jr.',
    category: 'Sandwich',
    calories: 310,
    proteinGrams: 13,
    basePrice: 3.49,
  },
  {
    id: 'bkg-bacon-king',
    restaurantCode: 'BKG',
    name: 'Bacon King',
    category: 'Sandwich',
    calories: 1150,
    proteinGrams: 61,
    basePrice: 8.99,
  },
  {
    id: 'bkg-10pc-nuggets',
    restaurantCode: 'BKG',
    name: '10 pc Chicken Nuggets',
    category: 'Side',
    calories: 480,
    proteinGrams: 22,
    basePrice: 2.99,
  },
  {
    id: 'bkg-medium-fries',
    restaurantCode: 'BKG',
    name: 'Medium Fries',
    category: 'Side',
    calories: 380,
    proteinGrams: 5,
    basePrice: 3.39,
  },

  // ----- Pizza Hut -----
  {
    id: 'pzh-med-pan-cheese',
    restaurantCode: 'PZH',
    name: 'Medium Pan Cheese Pizza',
    category: 'Pizza',
    calories: 2000,
    proteinGrams: 100,
    basePrice: 14.49,
  },
  {
    id: 'pzh-med-pan-pepperoni',
    restaurantCode: 'PZH',
    name: 'Medium Pan Pepperoni Pizza',
    category: 'Pizza',
    calories: 2140,
    proteinGrams: 108,
    basePrice: 15.99,
  },
  {
    id: 'pzh-stuffed-crust-large-pepperoni',
    restaurantCode: 'PZH',
    name: 'Large Stuffed Crust Pepperoni Pizza',
    category: 'Pizza',
    calories: 3080,
    proteinGrams: 152,
    basePrice: 19.99,
  },
  {
    id: 'pzh-breadsticks-5pc',
    restaurantCode: 'PZH',
    name: 'Breadsticks (5 pc)',
    category: 'Side',
    calories: 800,
    proteinGrams: 24,
    basePrice: 6.49,
  },
  {
    id: 'pzh-cinnabon-mini-rolls',
    restaurantCode: 'PZH',
    name: 'Cinnabon Mini Rolls',
    category: 'Dessert',
    calories: 930,
    proteinGrams: 14,
    basePrice: 7.49,
  },

  // ----- Dunkin' -----
  {
    id: 'dnk-med-hot-coffee',
    restaurantCode: 'DNK',
    name: 'Medium Hot Coffee',
    category: 'Drink',
    calories: 10,
    proteinGrams: 1,
    basePrice: 2.89,
  },
  {
    id: 'dnk-med-iced-coffee',
    restaurantCode: 'DNK',
    name: 'Medium Iced Coffee',
    category: 'Drink',
    calories: 15,
    proteinGrams: 1,
    basePrice: 3.49,
  },
  {
    id: 'dnk-glazed-donut',
    restaurantCode: 'DNK',
    name: 'Glazed Donut',
    category: 'Dessert',
    calories: 260,
    proteinGrams: 4,
    basePrice: 1.79,
  },
  {
    id: 'dnk-bacon-egg-cheese-bagel',
    restaurantCode: 'DNK',
    name: 'Bacon Egg & Cheese on Bagel',
    category: 'Breakfast',
    calories: 520,
    proteinGrams: 21,
    basePrice: 5.49,
  },
  {
    id: 'dnk-med-latte',
    restaurantCode: 'DNK',
    name: 'Medium Latte',
    category: 'Drink',
    calories: 190,
    proteinGrams: 10,
    basePrice: 4.39,
  },

  // ----- Krispy Kreme -----
  {
    id: 'kkr-original-glazed',
    restaurantCode: 'KKR',
    name: 'Original Glazed Doughnut',
    category: 'Dessert',
    calories: 190,
    proteinGrams: 3,
    basePrice: 1.59,
  },
  {
    id: 'kkr-dozen-original-glazed',
    restaurantCode: 'KKR',
    name: 'Dozen Original Glazed',
    category: 'Dessert',
    calories: 2280, // 190 * 12
    proteinGrams: 36,
    basePrice: 12.99,
  },
  {
    id: 'kkr-chocolate-iced-glazed',
    restaurantCode: 'KKR',
    name: 'Chocolate Iced Glazed Doughnut',
    category: 'Dessert',
    calories: 250,
    proteinGrams: 3,
    basePrice: 1.89,
  },
  {
    id: 'kkr-glazed-kreme-filled',
    restaurantCode: 'KKR',
    name: 'Glazed Kreme Filled Doughnut',
    category: 'Dessert',
    calories: 320,
    proteinGrams: 3,
    basePrice: 1.99,
  },
  {
    id: 'kkr-brewed-coffee',
    restaurantCode: 'KKR',
    name: 'Brewed Coffee (Medium)',
    category: 'Drink',
    calories: 10,
    proteinGrams: 1,
    basePrice: 2.49,
  },

  // ----- Taco Bell -----
  {
    id: 'tcb-crunchy-taco',
    restaurantCode: 'TCB',
    name: 'Crunchy Taco',
    category: 'Sandwich',
    calories: 170,
    proteinGrams: 8,
    basePrice: 2.19,
  },
  {
    id: 'tcb-crunchwrap-supreme',
    restaurantCode: 'TCB',
    name: 'Crunchwrap Supreme',
    category: 'Sandwich',
    calories: 530,
    proteinGrams: 16,
    basePrice: 5.59,
  },
  {
    id: 'tcb-chicken-quesadilla',
    restaurantCode: 'TCB',
    name: 'Chicken Quesadilla',
    category: 'Sandwich',
    calories: 520,
    proteinGrams: 27,
    basePrice: 6.29,
  },
  {
    id: 'tcb-beef-burrito',
    restaurantCode: 'TCB',
    name: 'Beef Burrito',
    category: 'Sandwich',
    calories: 430,
    proteinGrams: 14,
    basePrice: 2.99,
  },
  {
    id: 'tcb-nachos-bellgrande',
    restaurantCode: 'TCB',
    name: 'Nachos BellGrande',
    category: 'Side',
    calories: 730,
    proteinGrams: 18,
    basePrice: 6.29,
  },
];

// ---------- CITY PRICES ----------

function roundToCents(value: number): number {
  return Math.round(value * 100) / 100;
}

export const menuItemPricesByCity: MenuItemPriceByCity[] = menuItems.flatMap(
  (item) =>
    cities.map((city) => ({
      id: `${item.id}-${city.code.toLowerCase()}`,
      menuItemId: item.id,
      cityCode: city.code,
      price: roundToCents(item.basePrice * cityPriceMultipliers[city.code]),
    })),
);
