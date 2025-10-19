import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product } from '../types';

interface FavoritesState {
  favorites: Product[];
}

interface FavoritesContextType extends FavoritesState {
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
  clearFavorites: () => void;
}

type FavoritesAction =
  | { type: 'ADD_FAVORITE'; payload: Product }
  | { type: 'REMOVE_FAVORITE'; payload: number }
  | { type: 'CLEAR_FAVORITES' };

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesReducer = (state: FavoritesState, action: FavoritesAction): FavoritesState => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      const exists = state.favorites.some(fav => fav.id === action.payload.id);
      if (exists) return state;
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(fav => fav.id !== action.payload),
      };
    case 'CLEAR_FAVORITES':
      return {
        ...state,
        favorites: [],
      };
    default:
      return state;
  }
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  const addToFavorites = (product: Product) => {
    dispatch({ type: 'ADD_FAVORITE', payload: product });
  };

  const removeFromFavorites = (productId: number) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: productId });
  };

  const isFavorite = (productId: number): boolean => {
    return state.favorites.some(fav => fav.id === productId);
  };

  const clearFavorites = () => {
    dispatch({ type: 'CLEAR_FAVORITES' });
  };

  const value: FavoritesContextType = {
    favorites: state.favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    clearFavorites,
  };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};