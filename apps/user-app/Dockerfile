FROM user-app-base-image:nx-base AS builder

ARG NODE_ENV
ARG BUILD_FLAG
WORKDIR /app/builder
COPY . .
RUN npx nx build user-app production

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/builder/dist/apps/user-app ./
COPY --from=builder /app/builder/apps/user-app/nginx.conf /etc/nginx/nginx.conf