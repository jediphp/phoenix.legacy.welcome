# Phoenix Legacy Welcome (Next.js)

Next.js (App Router) используется для разработки и статической сборки. Production обслуживает Nginx без Node.js.

## Быстрый старт

1. Установите зависимости:
   ```bash
   npm ci
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
- `next start` не используется для `output: export`; production запускается через Docker Compose с Nginx
- `npm run lint` — linting через Next.js

## Переменные окружения

Используются публичные переменные:

- `NEXT_PUBLIC_SITE_URL` — канонический базовый URL сайта (без завершающего `/`), нужен для `metadataBase`, Open Graph, `sitemap.xml` и `robots.txt`. На проде укажите реальный домен welcome-сайта.
- `NEXT_PUBLIC_APP_NAME` — название по умолчанию для `<title>` и превью
- `NEXT_PUBLIC_APP_DESCRIPTION` — основное описание проекта для SEO и соцсетей

См. файл `.env.example`.


## Безопасное восстановление после инцидента 2026-09-07

Production welcome восстановлен 2026-09-07 как статический сайт. Старый контейнер `phoenix_welcome_incident_20260907` сохранён остановленным; его не запускать. [Отчёт инцидента](../ai/audit/welcome-incident-2026-09-07.md).

Проверена и развёрнута статическая сборка: `npm ci && npm run build` создаёт `out/` для `/`, `/author`, `/org`, `/start`, robots и sitemap. Node/Next.js нужны только при сборке. Runtime Dockerfile — Nginx, user 101, read-only rootfs, tmpfs `/tmp`, без runtime env/secrets, с лимитами CPU/RAM/PIDs и healthcheck. HTTP порт остаётся 3000; неизвестные пути — 404, POST — 405. Изображения выдаются статически, без image optimizer.

Next.js обновлён до 15.5.24. `npm audit --omit=dev` всё ещё сообщает advisories в цепочке сборочных зависимостей (Next/PostCSS/nanoid/sharp); они не входят в Nginx runtime, но не считаются устранёнными обновлением. Не обрабатывать недоверенные исходники или CSS в builder. Для всех будущих обновлений повторять audit и проверку security-релизов.

Публичные URL передаются build args `NEXT_PUBLIC_SITE_URL` и `NEXT_PUBLIC_PLATFORM_URL`. `.env*` исключены из Docker context; смена значений требует пересборки. Персональные ключи в build args не передавать.

Сеть `phoenix_welcome_edge` создаётся как external internal network; подключаются только welcome и edge nginx. PostgreSQL/Redis/frontend в ней не нужны. Перед восстановлением новый образ проверить отдельно; старый контейнер сохранить для расследования под другим именем, не использовать его writable layer. Текущий deployment использует Compose project `phoenix-welcome-static`; старый проект не запускать. Образ `phoenix-legacy-welcome:static-20260907` построен из проверенного локального `out/` для linux/amd64. При сохранении релиза также проверена полная многостадийная сборка Dockerfile для linux/amd64. Её отдельный контейнер прошёл проверки 6 страниц, UID 101, отсутствия Node, healthy и POST → 405 с production-ограничениями. Этот проверочный образ на production не заменял уже работающий образ.

Проверки восстановления: 6 публичных адресов совпали по SHA-256 с локальным экспортом; локально проверены 38 ресурсов, 404/403/405 и HEAD; production healthcheck healthy, POST → 405. Рабочая память после запуска ~2.4 MiB, лимит 128 MiB, CPU 0.25. Соответствие Git-коммитов и production images хранится в [манифесте релиза](../ai/audit/releases/2026-09-07.json).

## Повторная сборка и восстановление

Из чистого checkout нужного commit (см. манифест) выполнить:

```bash
docker build --platform linux/amd64 -t phoenix-welcome-candidate:RELEASE .
```

Проверить кандидат в отдельном контейнере с параметрами read-only, tmpfs `/tmp`, cap_drop ALL, no-new-privileges, memory 128m, CPU 0.25 и pids 64 из compose; проверить 6 страниц, healthcheck и запрет POST. Не заменять production tag непроверенным кандидатом. Все необходимые PNG включены в Git; `.env*` в build context не попадают.

Точный уже работающий образ включён в `/opt/phoenix/release-artifacts/2026-09-07/runtime-images.tar`; перед `docker image load` проверить `SHA256SUMS` и сравнить с манифестом в Git. Изменяемые base tags и Alpine-пакеты не гарантируют побайтовое совпадение новой сборки; архив сохраняет точный image ID.

Для согласованного восстановления известного образа в существующем стеке (сеть `phoenix_welcome_edge` и edge nginx уже подготовлены):

```bash
docker compose -p phoenix-welcome-static -f docker-compose.yml up -d --no-build --pull never --wait welcome
```

Сохранить имя проекта `phoenix-welcome-static`; прежний инцидентный контейнер не запускать. Архив образов пока находится только на сервере и не заменяет независимое резервное копирование.
