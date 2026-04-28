import type { Metadata } from 'next';
import { Home } from '@/src/app/components/Home';
import { getSiteUrl } from '@/src/lib/site';

const pageDescription =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ??
  'Платформа для исторической реконструкции изображений и сохранения культурного наследия, ИИ-реконструкции.';

export const metadata: Metadata = {
  title: 'Знакомство с платформой',
  description: pageDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: getSiteUrl().href,
    title: 'Феникс.Наследие — знакомство с платформой',
    description: pageDescription,
  },
  twitter: {
    title: 'Феникс.Наследие — знакомство с платформой',
    description: pageDescription,
  },
};

export default function Page() {
  return <Home />;
}
