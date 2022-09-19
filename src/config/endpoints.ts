export const ENDPOINT = 'https://api.mercadolibre.com/sites/MLA';
export const ENDPOINT_DETAILD = 'https://api.mercadolibre.com/items';

export const endpoints = {
  search: (search: string) => `${ENDPOINT}/search?q=${search}`,
  categories: `${ENDPOINT}/categories`,
  detail: (id: string) => `${ENDPOINT_DETAILD}/${id}`,
  description: (id: string) => `${ENDPOINT_DETAILD}/${id}/description`,
};
