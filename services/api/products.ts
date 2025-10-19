import { apiClient } from './client';
import { Product } from '../../types';

export const productsApi = {
  getAllProducts: async (): Promise<Product[]> => {
    const response = await apiClient.get<Product[]>('/products');
    return response.data;
  },

  getProduct: async (id: number): Promise<Product> => {
    const response = await apiClient.get<Product>(`/products/${id}`);
    return response.data;
  },

  getCategories: async (): Promise<string[]> => {
    const response = await apiClient.get<string[]>('/products/categories');
    return response.data;
  },

  getProductsByCategory: async (category: string): Promise<Product[]> => {
    const response = await apiClient.get<Product[]>(`/products/category/${category}`);
    return response.data;
  },
};