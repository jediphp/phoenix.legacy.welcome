import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { getSiteUrl } from '@/src/lib/site';

const defaultTitle =
  process.env.NEXT_PUBLIC_APP_NAME ?? 'Феникс.Наследие — Welcome';
const defaultDescription =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ??
  'Платформа для исторической реконструкции изображений и сохранения культурного наследия, ИИ-реконструкции.';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: defaultTitle,
    template: '%s · Феникс.Наследие',
  },
  description: defaultDescription,
  applicationName: 'Феникс.Наследие',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: siteUrl,
    siteName: 'Феникс.Наследие',
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: 'summary',
    title: defaultTitle,
    description: defaultDescription,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
