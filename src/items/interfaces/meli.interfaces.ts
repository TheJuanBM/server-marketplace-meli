export type Result = {
  id: string;
  title: string;
  prices: {
    prices: {
      amount: number;
      currency_id: string;
    }[];
  };
  address: {
    city_name: string;
  };
  thumbnail: string;
  condition: string;
  category_id: string;
  shipping: {
    free_shipping: boolean;
  };
};

export type ResultDetailFetch = {
  id: string;
  title: string;
  price: number;
  picture: string;
  condition: string;
  sold_quantity: number;
  free_shipping: boolean;
  currency_id: string;
  category_id: string;
  secure_thumbnail: string;
  shipping: {
    free_shipping: boolean;
  };
};

export type ResultDetail = {
  id: string;
  title: string;
  price: {
    amount: number;
    currency: string;
  };
  picture: string;
  condition: string;
  description: string;
  sold_quantity: number;
  free_shipping: boolean;
  categories: Category[];
};

export interface ItemsResponse {
  results: Result[];
  filters: {
    values: {
      path_from_root: {
        id: string;
        name: string;
      }[];
    }[];
  }[];
}

export interface Category {
  id: string;
  name: string;
}

export type Categories = {
  path_from_root: {
    id: string;
    name: string;
  }[];
};
