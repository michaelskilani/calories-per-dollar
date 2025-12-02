export type RestaurantCode = 'MCD' | 'POP' | 'SUB';

export interface Restaurant {
  code: RestaurantCode;
  name: string;
}

export interface MenuItem {
  id: string;
  restaurantCode: RestaurantCode;
  name: string;
  category: string;
  price: number;      // in USD for now
  calories: number;
  proteinGrams: number;
}
