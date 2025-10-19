import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Product } from '../../types';
import { ProductCard } from './ProductCard';
import { Loading } from '../common/Loading';
import { Error } from '../common/Error';
import { EmptyState } from '../common/EmptyState';
import { useLocalization } from '../../contexts/LocalizationContext';

interface ProductListProps {
  products: Product[];
  loading: boolean;
  error: string | null;
  onRetry: () => void;
  onProductPress: (product: Product) => void;
}

export const ProductList: React.FC<ProductListProps> = ({
  products,
  loading,
  error,
  onRetry,
  onProductPress,
}) => {
  const { t } = useLocalization();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} onRetry={onRetry} />;
  }

  if (products.length === 0) {
    return <EmptyState title={t('products.noProducts')} />;
  }

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <ProductCard product={item} onPress={onProductPress} />
      )}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
});