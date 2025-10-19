import { useQuery } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { ProductList } from "../../components";
import { theme } from "../../constants/theme";
import { useApp } from "../../contexts/AppContext";
import { useToast } from "../../hooks/useToast";
import { productsApi } from "../../services/api/products";
import { Product } from "../../types";

export default function ProductsScreen() {
  const router = useRouter();
  const { showError } = useToast();
  const { setLoading } = useApp();

  const {
    data: products = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: productsApi.getAllProducts,
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);

  useEffect(() => {
    if (error) {
      showError(error.message);
    }
  }, [error, showError]);

  const handleProductPress = (product: Product) => {
    router.push(`/products/${product.id}`);
  };

  const handleRetry = () => {
    refetch();
  };

  return (
    <View style={styles.container}>
      <ProductList
        products={products}
        loading={isLoading}
        error={error ? error.message : null}
        onRetry={handleRetry}
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
