export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

export interface ApiError {
  message: string;
  code?: number;
  details?: unknown;
}

export interface AppState {
  isLoading: boolean;
  error: string | null;
}

export type ThemeMode = 'light' | 'dark';