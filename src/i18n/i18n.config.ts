import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './en';
import { es } from './es';

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React already does escaping
  },
  returnObjects: true,
});

export default i18n;
