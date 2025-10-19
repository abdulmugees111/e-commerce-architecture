import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { spacing } from '../../constants/spacing';
import { theme } from '../../constants/theme';
import { typography } from '../../constants/typography';
import { useFavorites } from '../../contexts/FavoritesContext';
import { useLocalization } from '../../contexts/LocalizationContext';
import { Product } from '../../types';
import { Button } from '../common/Button';
import { Card } from '../common/Card';

interface ProductCardProps {
  product: Product;
  onPress: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const { t } = useLocalization();

  const favorite = isFavorite(product.id);

  const handleFavoritePress = () => {
    if (favorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <Card padding="md" margin="sm" elevated>
      <TouchableOpacity onPress={() => onPress(product)} style={styles.touchable}>
        <Image source={{ uri: product.image }} style={styles.image}   resizeMode="contain"
/>
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={2}>
            {product.title}
          </Text>
          <Text style={styles.category}>{product.category}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>
              ⭐ {product.rating.rate} ({product.rating.count})
            </Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.price}>${product.price}</Text>
            <Button
              title={favorite ? t('products.removeFromFavorites') : t('products.addToFavorites')}
              onPress={handleFavoritePress}
              variant={favorite ? 'outline' : 'primary'}
              size="small"
            />
          </View>
        </View>
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  touchable: {
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: theme.borderRadius.md,
    marginRight: spacing.md,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.medium,
    color: theme.colors.text.primary,
    marginBottom: spacing.xs,
  },
  category: {
    fontSize: typography.sizes.sm,
    color: theme.colors.text.secondary,
    textTransform: 'capitalize',
    marginBottom: spacing.sm,
  },
  ratingContainer: {
    marginBottom: spacing.md,
  },
  rating: {
    fontSize: typography.sizes.sm,
    color: theme.colors.text.secondary,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.bold,
    color: theme.colors.primary,
  },
});