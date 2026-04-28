/**
 * Публичный URL сайта welcome (без завершающего слэша в переменной окружения).
 * На проде задайте NEXT_PUBLIC_SITE_URL под реальный домен.
 */
export const DEFAULT_SITE_URL = 'https://welcome.phoenixlegacy.ru';

export function getSiteUrl(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
  try {
    return new URL(raw.endsWith('/') ? raw.slice(0, -1) : raw);
  } catch {
    return new URL(DEFAULT_SITE_URL);
  }
}
