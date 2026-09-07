FROM node:22-alpine AS builder
WORKDIR /app
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ARG NEXT_PUBLIC_SITE_URL=https://welcome.phoenixlegacy.ru
ARG NEXT_PUBLIC_PLATFORM_URL=https://phoenixlegacy.ru
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_PLATFORM_URL=$NEXT_PUBLIC_PLATFORM_URL
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Runtime serves static files only: no Node.js, server actions or application secrets.
FROM nginx:stable-alpine AS runner
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/out /usr/share/nginx/html
USER 101:101
EXPOSE 3000
HEALTHCHECK --interval=15s --timeout=3s --start-period=10s --retries=3 \
    CMD wget -q -O /dev/null http://127.0.0.1:3000/ || exit 1
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]
