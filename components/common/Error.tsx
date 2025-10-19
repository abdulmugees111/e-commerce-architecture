import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';
import { spacing } from '../../constants/spacing';
import { typography } from '../../constants/typography';
import { Button } from './Button';
import { useLocalization } from '../../contexts/LocalizationContext';

interface ErrorProps {
  message?: string;
  onRetry?: () => void;
}

export const Error: React.FC<ErrorProps> = ({ message, onRetry }) => {
  const { t } = useLocalization();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('common.error')}</Text>
      <Text style={styles.message}>{message || t('errors.unknownError')}</Text>
      {onRetry && (
        <Button
          title={t('common.retry')}
          onPress={onRetry}
          variant="primary"
          size="medium"
        />
      )}
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
  title: {
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.bold,
    color: theme.colors.text.primary,
    marginBottom: spacing.sm,
  },
  message: {
    fontSize: typography.sizes.md,
    color: theme.colors.text.secondary,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
});