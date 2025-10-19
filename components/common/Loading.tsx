import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';
import { spacing } from '../../constants/spacing';
import { typography } from '../../constants/typography';
import { useLocalization } from '../../contexts/LocalizationContext';

export const Loading: React.FC = () => {
  const { t } = useLocalization();

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
      <Text style={styles.text}>{t('common.loading')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  text: {
    marginTop: spacing.md,
    fontSize: typography.sizes.md,
    color: theme.colors.text.secondary,
  },
});