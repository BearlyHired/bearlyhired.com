import { useTranslation as useI18nextTranslation } from 'react-i18next';
import type { TranslationKey } from '@/i18n/types';

export const useTranslation = () => {
  const { t, i18n } = useI18nextTranslation();
  
  return {
    t: t as (key: TranslationKey, options?: any) => string,
    i18n,
    currentLanguage: i18n.language,
    changeLanguage: (lng: string) => i18n.changeLanguage(lng),
  };
};