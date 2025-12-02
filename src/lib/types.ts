// src/lib/types.ts

export type RestaurantCode =
  | 'MCD'  // McDonald's
  | 'SBX'  // Starbucks
  | 'SUB'  // Subway
  | 'KFC'  // KFC
  | 'DMO'  // Domino's
  | 'BKG'  // Burger King
  | 'PZH'  // Pizza Hut
  | 'DNK'  // Dunkin'
  | 'KKR'  // Krispy Kreme
  | 'TCB'; // Taco Bell

export interface Restaurant {
  code: RestaurantCode;
  name: string;
}

export type CityCode =
  | 'NYC' // New York
  | 'LAX' // Los Angeles
  | 'CHI' // Chicago
  | 'HOU' // Houston
  | 'PHX' // Phoenix
  | 'PHL' // Philadelphia
  | 'SAN' // San Diego
  | 'DAL' // Dallas
  | 'SFO' // San Francisco
  | 'AUS'; // Austin

export interface City {
  code: CityCode;
  name: string; // "New York, NY"
  slug: string; // "new-york"
}

// Base menu item definition (location-independent).
export interface MenuItem {
  id: string;
  restaurantCode: RestaurantCode;
  name: string;
  category: 'Sandwich' | 'Side' | 'Pizza' | 'Drink' | 'Dessert' | 'Breakfast';
  calories: number;      // approx per serving
  proteinGrams: number;  // approx per serving
  basePrice: number;     // approximate national average price in USD
}

// Location-specific pricing for each item.
export interface MenuItemPriceByCity {
  id: string;
  menuItemId: string;
  cityCode: CityCode;
  price: number; // USD
}
