import React, { createContext, useContext, useState, ReactNode } from 'react';
import { locales, Locale } from '../constants/locales';

interface LocalizationContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

interface LocalizationProviderProps {
  children: ReactNode;
}

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>('en');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = locales[locale];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const value: LocalizationContextType = {
    locale,
    setLocale,
    t,
  };

  return <LocalizationContext.Provider value={value}>{children}</LocalizationContext.Provider>;
};

export const useLocalization = (): LocalizationContextType => {
  const context = useContext(LocalizationContext);
  if (context === undefined) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};