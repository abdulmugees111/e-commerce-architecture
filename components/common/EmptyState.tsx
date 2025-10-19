import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { spacing } from '../../constants/spacing';
import { theme } from '../../constants/theme';
import { typography } from '../../constants/typography';

interface EmptyStateProps {
  title: string;
  message?: string;
  icon?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ title, message, icon }) => {
  return (
    <View style={styles.container}>
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <Text style={styles.title}>{title}</Text>
      {message && <Text style={styles.message}>{message}</Text>}
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
  iconContainer: {
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.semibold,
    color: theme.colors.text.primary,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  message: {
    fontSize: typography.sizes.sm,
    color: theme.colors.text.secondary,
    textAlign: 'center',
    lineHeight: typography.lineHeights.loose,
  },
});