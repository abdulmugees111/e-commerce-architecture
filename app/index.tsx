import { Link } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Button, Card } from "../components";
import { useLocalization } from "../contexts/LocalizationContext";
import { styles } from "./styles";

export default function HomeScreen() {
  const { t } = useLocalization();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Card padding="xl" elevated={false}>
        <Text style={styles.title}>🛍️ E-Commerce App</Text>
        <Text style={styles.subtitle}>
          Welcome to our store! Browse products and manage your favorites.
        </Text>

        <View style={styles.buttonsContainer}>
          <Link href="/products" asChild>
            <Button
              title={t("navigation.products")}
              onPress={() => {}}
              variant="primary"
              size="large"
              fullWidth
            />
          </Link>

          <Link href="/favorites" asChild>
            <Button
              title={t("navigation.favorites")}
              onPress={() => {}}
              variant="outline"
              size="large"
              fullWidth
            />
          </Link>
        </View>

        <View style={styles.features}>
          <Text style={styles.featuresTitle}>Features:</Text>
          <Text style={styles.feature}>• Product catalog with details</Text>
          <Text style={styles.feature}>• Favorite products management</Text>
          <Text style={styles.feature}>• Multi-language support</Text>
          <Text style={styles.feature}>• Professional architecture</Text>
        </View>
      </Card>
    </ScrollView>
  );
}
