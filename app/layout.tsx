import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

const appName = process.env.NEXT_PUBLIC_APP_NAME ?? 'Phoenix Legacy Welcome';
const appDescription =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ??
  'Interactive presentation app for authors and organizations.';

export const metadata: Metadata = {
  title: appName,
  description: appDescription,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
