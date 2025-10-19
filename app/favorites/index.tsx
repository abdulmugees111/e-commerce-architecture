import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { EmptyState, ProductList } from '../../components';
import { theme } from '../../constants/theme';
import { useFavorites } from '../../contexts/FavoritesContext';
import { useLocalization } from '../../contexts/LocalizationContext';

export default function FavoritesScreen() {
  const router = useRouter();
  const { favorites } = useFavorites();
  const { t } = useLocalization();

  const handleProductPress = (product: {id: number}) => {
    router?.push(`/products/${product.id}`);
  };

  if (favorites.length === 0) {
    return (
      <EmptyState
        title={t('favorites.noFavorites')}
        message="Browse products and add some to your favorites!"
      />
    );
  }

  return (
    <View style={styles.container}>
      <ProductList
        products={favorites}
        loading={false}
        error={null}
        onRetry={() => {}}
        onProductPress={handleProductPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surface,
  },
});