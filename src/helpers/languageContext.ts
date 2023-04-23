import i18n from 'i18next';
import React, { createContext } from 'react';

interface TranslationContextValue {
  t: (key: string, options?: {}) => string;
  i18n: typeof i18n;
}

export const LanguageContext = createContext<TranslationContextValue>({
  t: (key: string) => key,
  i18n: i18n,
});
