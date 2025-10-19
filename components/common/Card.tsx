import React from 'react';
import { View, StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';
import { spacing } from '../../constants/spacing';

interface CardProps {
  children: React.ReactNode;
  padding?: keyof typeof spacing;
  margin?: keyof typeof spacing;
  elevated?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  padding = 'md',
  margin = 'sm',
  elevated = true,
}) => {
  return (
    <View
      style={[
        styles.card,
        {
          padding: spacing[padding],
          margin: spacing[margin],
        },
        elevated && styles.elevated,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.lg,
  },
  elevated: {
    ...theme.shadows.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
});