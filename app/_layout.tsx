import { QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppProvider } from '../contexts/AppContext';
import { FavoritesProvider } from '../contexts/FavoritesContext';
import { LocalizationProvider } from '../contexts/LocalizationContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import { queryClient } from '../services/queryClient';

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <FavoritesProvider>
          <ThemeProvider>
            <LocalizationProvider>
              <StatusBar style="auto" />
              <Stack
                screenOptions={{
                  headerShown: false,
                }}
              />
            </LocalizationProvider>
          </ThemeProvider>
        </FavoritesProvider>
      </AppProvider>
    </QueryClientProvider>
  );
}
