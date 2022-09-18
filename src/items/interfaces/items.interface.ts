export type Price = {
  amount: number;
  currency: string;
  decimals: number;
};

export type Item = {
  id: string;
  price: Price;
  title: string;
};

export type Author = {
  name: string;
  lastname: string;
};

export interface Response {
  items: Item[];
  author: Author;
  picture: string;
  address: string;
  condition: string;
  categories: string[];
  free_shipping: boolean;
}
