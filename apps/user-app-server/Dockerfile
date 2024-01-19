FROM user-app-base-image:nx-base AS builder

ARG NODE_ENV
ARG BUILD_FLAG
WORKDIR /app/builder
COPY . .
RUN npx nx run user—app-server:build:production

FROM user-app-base-image:nx-base

WORKDIR /app
COPY --from=builder /app/builder ./
ENV NODE_ENV=$NODE_ENV

CMD ["node", "./dist/apps/user-app-server/main.js"]