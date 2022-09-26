export const BASE_URL = 'http://3.36.114.254:8000';

const API = {
  signUp: `${BASE_URL}/users/signup`,
  login: `${BASE_URL}/users/login`,
  mainData: `${BASE_URL}/products/list?second-category=5&limit=7`,
  timeSaleData: `${BASE_URL}/products/list?limit=1&sort=discount`,
  weekBestData: `${BASE_URL}/products/list?first-category=1&limit=7&sort=discount`,
  summerData: `${BASE_URL}/products/list?second-category=5&limit=7`,
  categories: `${BASE_URL}/categories`,
  products: `${BASE_URL}/products`,
  cart: `${BASE_URL}/cart`,
  orders: `${BASE_URL}/orders`,
};

export { API };
