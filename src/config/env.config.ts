export const EnvConfiguration = () => ({
  enviroment: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || '3001',
  endpoint: process.env.ENDPOINT,
  endpointDetaild: process.env.ENDPOINT_DETAILD,
});

export const endpoints = {
  search: (search: string, limit = 4) =>
    `${process.env.ENDPOINT}/search?q=${search}&limit=${limit}`,
  categories: `${process.env.ENDPOINT}/categories`,
  category: (category: string) =>
    `${process.env.ENDPOINT_DETAILD}/categories/${category}`,
  detail: (id: string) => `${process.env.ENDPOINT_DETAILD}/items/${id}`,
  description: (id: string) =>
    `${process.env.ENDPOINT_DETAILD}/items/${id}/description`,
};
