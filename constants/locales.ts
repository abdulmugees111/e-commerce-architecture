export const locales = {
  en: {
    common: {
      loading: 'Loading...',
      error: 'Something went wrong',
      retry: 'Try Again',
      cancel: 'Cancel',
      save: 'Save',
      delete: 'Delete',
    },
    navigation: {
      home: 'Home',
      products: 'Products',
      favorites: 'Favorites',
      back: 'Back',
    },
    products: {
      title: 'Products',
      description: 'Product Description',
      price: 'Price',
      category: 'Category',
      rating: 'Rating',
      addToFavorites: 'Add to Favorites',
      removeFromFavorites: 'Remove from Favorites',
      noProducts: 'No products found',
      loadMore: 'Load More',
    },
    favorites: {
      title: 'Favorites',
      noFavorites: 'No favorite products yet',
      remove: 'Remove',
    },
    errors: {
      networkError: 'Network error occurred',
      serverError: 'Server error occurred',
      unknownError: 'Unknown error occurred',
    },
  },
} as const;

export type Locale = keyof typeof locales;
export type TranslationKey = keyof typeof locales.en;