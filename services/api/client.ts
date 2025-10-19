import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { ApiError, ApiResponse } from '../../types';

const BASE_URL = 'https://fakestoreapi.com';

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    this.client.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        const apiError: ApiError = {
          message: error.message,
          code: error.response?.status,
          details: error.response?.data,
        };
        return Promise.reject(apiError);
      }
    );
  }

  async get<T>(url: string, params?: unknown): Promise<ApiResponse<T>> {
    const response = await this.client.get<T>(url, { params });
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  }

  async post<T>(url: string, data?: unknown): Promise<ApiResponse<T>> {
    const response = await this.client.post<T>(url, data);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  }
}

export const apiClient = new ApiClient();