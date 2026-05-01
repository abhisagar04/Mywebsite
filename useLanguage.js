// src/hooks/useLanguage.js
import { useState, createContext, useContext } from 'react';
import { translations } from '../data/translations';

export const LanguageContext = createContext(null);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}

export function useLanguageState() {
  const [lang, setLang] = useState('en');
  const t = (key) => translations[lang]?.[key] || translations['en'][key] || key;
  return { lang, setLang, t };
}
