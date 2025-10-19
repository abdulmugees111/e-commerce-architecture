import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import { Error, Loading, ProductDetail } from '../../components';
import { useApp } from '../../contexts/AppContext';
import { useToast } from '../../hooks/useToast';
import { productsApi } from '../../services/api/products';

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const { showError } = useToast();
  const { setLoading } = useApp();

  const productId = parseInt(Array.isArray(id) ? id[0] : id || '0');

  const {
    data: product,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => productsApi.getProduct(productId),
    enabled: productId > 0,
    staleTime: 10 * 60 * 1000, 
  });

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);

  useEffect(() => {
    if (error) {
      showError(error.message);
    }
  }, [error, showError]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} onRetry={refetch} />;
  }

  if (!product) {
    return <Error message="Product not found" onRetry={refetch} />;
  }

  return <ProductDetail product={product} />;
}