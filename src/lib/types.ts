export type RestaurantCode = 'MCD' | 'POP' | 'SUB';

export interface Restaurant {
  code: RestaurantCode;
  name: string;
}

export type CityCode = 'NYC' | 'HOU';

export interface City {
  code: CityCode;
  name: string;      // e.g. "New York, NY"
  slug: string;      // e.g. "new-york", "houston"
}

// Base menu item definition (location-independent).
export interface MenuItem {
  id: string;
  restaurantCode: RestaurantCode;
  name: string;
  category: string;
  calories: number;
  proteinGrams: number;
}

// Location-specific pricing for each item.
export interface MenuItemPriceByCity {
  id: string;
  menuItemId: string;
  cityCode: CityCode;
  price: number;     // in USD
}