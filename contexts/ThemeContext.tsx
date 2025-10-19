import React, { createContext, ReactNode, useContext, useState } from 'react';
import { theme } from '../constants/theme';
import { ThemeMode } from '../types';

interface ThemeContextType {
  themeMode: ThemeMode;
  toggleTheme: () => void;
  currentTheme: typeof theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');

  const toggleTheme = () => {
    setThemeMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  const value: ThemeContextType = {
    themeMode,
    toggleTheme,
    currentTheme: theme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};