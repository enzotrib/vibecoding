export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

/** Reads the locale from a URL's first path segment (e.g. /es/ -> "es"). */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first in languages) return first as Lang;
  return defaultLang;
}

export function getAltLang(lang: Lang): Lang {
  return lang === 'en' ? 'es' : 'en';
}

/** Root-relative path for a given locale's homepage. */
export function getLocalizedPath(lang: Lang): string {
  return lang === 'es' ? '/es/' : '/';
}
