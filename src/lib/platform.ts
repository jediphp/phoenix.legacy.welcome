/**
 * URL основного приложения Phoenix.Legacy (frontend).
 * CTAs инструкции ведут в «Исследовать», ЛК и создание реконструкции.
 */
export const DEFAULT_PLATFORM_URL = 'https://phoenixlegacy.ru';

export function getPlatformUrl(): URL {
  const raw = process.env.NEXT_PUBLIC_PLATFORM_URL ?? DEFAULT_PLATFORM_URL;
  try {
    return new URL(raw.endsWith('/') ? raw.slice(0, -1) : raw);
  } catch {
    return new URL(DEFAULT_PLATFORM_URL);
  }
}

export function platformPath(path: string): string {
  const base = getPlatformUrl().origin;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
}
