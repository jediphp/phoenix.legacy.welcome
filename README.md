# Phoenix Legacy Welcome (Next.js)

Проект переведён на **Next.js (App Router)** и готов к запуску как полноценное приложение.

## Быстрый старт

1. Установите зависимости:
   ```bash
   npm install
   ```
2. Создайте `.env.local` из примера:
   ```bash
   cp .env.example .env.local
   ```
3. Запустите dev-сервер:
   ```bash
   npm run dev
   ```

## Доступные скрипты

- `npm run dev` — запуск dev-сервера Next.js
- `npm run build` — production-сборка
- `npm run start` — запуск production-сборки
- `npm run lint` — linting через Next.js

## Переменные окружения

Используются публичные переменные:

- `NEXT_PUBLIC_SITE_URL` — канонический базовый URL сайта (без завершающего `/`), нужен для `metadataBase`, Open Graph, `sitemap.xml` и `robots.txt`. На проде укажите реальный домен welcome-сайта.
- `NEXT_PUBLIC_APP_NAME` — название по умолчанию для `<title>` и превью
- `NEXT_PUBLIC_APP_DESCRIPTION` — основное описание проекта для SEO и соцсетей

См. файл `.env.example`.
