import axios from 'axios';
import {Product, ProductApiResponse} from '../types/Product.type';

const API_URL =
  'https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get<ProductApiResponse>(API_URL);
  return response.data.data;
};
