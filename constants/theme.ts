export const theme = {
  colors: {
    primary: '#3B82F6',
    primaryDark: '#1D4ED8',
    secondary: '#10B981',
    background: '#FFFFFF',
    surface: '#F8FAFC',
    error: '#EF4444',
    warning: '#F59E0B',
    success: '#10B981',
    text: {
      primary: '#1F2937',
      secondary: '#6B7280',
      disabled: '#9CA3AF',
      inverse: '#FFFFFF',
    },
    border: '#E5E7EB',
    divider: '#F3F4F6',
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    xxl: 24,
  },
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 4,
    },
  },
} as const;

export type Theme = typeof theme;