import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';
import { spacing } from '../../constants/spacing';
import { typography } from '../../constants/typography';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  fullWidth = false,
}) => {
  const getButtonStyle = () => {
    const baseStyle = [
      styles.button,
      styles[`${variant}Button`],
      styles[`${size}Button`],
      fullWidth && styles.fullWidth,
      disabled && styles.disabled,
    ];

    return baseStyle;
  };

  const getTextStyle = () => {
    return [styles.text, styles[`${variant}Text`], styles[`${size}Text`]];
  };

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'outline' ? theme.colors.primary : theme.colors.text.inverse}
        />
      ) : (
        <Text style={getTextStyle()}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: theme.borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
  },
  secondaryButton: {
    backgroundColor: theme.colors.secondary,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  smallButton: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
  },
  mediumButton: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  largeButton: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: 0.6,
  },
  text: {
    textAlign: 'center',
    fontWeight: typography.weights.medium,
  },
  primaryText: {
    color: theme.colors.text.inverse,
  },
  secondaryText: {
    color: theme.colors.text.inverse,
  },
  outlineText: {
    color: theme.colors.primary,
  },
  smallText: {
    fontSize: typography.sizes.sm,
  },
  mediumText: {
    fontSize: typography.sizes.md,
  },
  largeText: {
    fontSize: typography.sizes.lg,
  },
});