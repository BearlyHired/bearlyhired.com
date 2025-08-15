import { en } from './en';

// Type for the translation resources
export type TranslationResources = typeof en;

// Helper type to create dot notation paths
type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never;

type Leaves<T> = T extends object
  ? { [K in keyof T]-?: Join<K, Leaves<T[K]>> }[keyof T]
  : '';

export type TranslationKey = Leaves<TranslationResources>;

// Declare module for react-i18next to provide type safety
declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
    returnObjects: true;
    resources: TranslationResources;
  }
}