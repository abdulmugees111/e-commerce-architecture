import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { spacing } from '../../constants/spacing';
import { theme } from '../../constants/theme';
import { typography } from '../../constants/typography';
import { useFavorites } from '../../contexts/FavoritesContext';
import { useLocalization } from '../../contexts/LocalizationContext';
import { Product } from '../../types';
import { Button } from '../common/Button';
import { Card } from '../common/Card';

interface ProductDetailProps {
  product: Product;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
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
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Card padding="lg" elevated={false}>
        <Image source={{ uri: product.image }} style={styles.image} />
        
        <View style={styles.header}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>

        <View style={styles.metaContainer}>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>{t('products.category')}:</Text>
            <Text style={styles.metaValue}>{product.category}</Text>
          </View>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>{t('products.rating')}:</Text>
            <Text style={styles.metaValue}>
              ⭐ {product.rating.rate} ({product.rating.count} {t('products.reviews')})
            </Text>
          </View>
        </View>

        <Card padding="md" margin='sm'>
          <Text style={styles.sectionTitle}>{t('products.description')}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </Card>

<View style={styles.buttonContainer}>
        <Button
          title={favorite ? t('products.removeFromFavorites') : t('products.addToFavorites')}
          onPress={handleFavoritePress}
          variant={favorite ? 'outline' : 'primary'}
          size="large"
          fullWidth
        />
        </View>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    borderRadius: theme.borderRadius.lg,
    marginBottom: spacing.lg,
  },
  header: {
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.bold,
    color: theme.colors.text.primary,
    marginBottom: spacing.sm,
  },
  price: {
    fontSize: typography.sizes.xxxl,
    fontWeight: typography.weights.bold,
    color: theme.colors.primary,
  },
  metaContainer: {
    marginBottom: spacing.lg,
  },
  buttonContainer: {
    margin: spacing.sm,
  },
  metaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.divider,
  },
  metaLabel: {
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.medium,
    color: theme.colors.text.primary,
  },
  metaValue: {
    fontSize: typography.sizes.md,
    color: theme.colors.text.secondary,
    textTransform: 'capitalize',
  },
  sectionTitle: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    color: theme.colors.text.primary,
    marginBottom: spacing.md,
  },
  description: {
    fontSize: typography.sizes.xs,
    color: theme.colors.text.secondary,
  },
});