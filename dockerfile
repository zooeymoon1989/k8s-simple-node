
FROM node:22-slim AS deps
WORKDIR /app
COPY package*.json pnpm-lock.yaml* yarn.lock* ./
RUN corepack enable
RUN --mount=type=cache,target=/root/.npm \
    if [ -f package-lock.json ]; then npm ci; \
    else npm i --package-lock-only && npm ci; fi

FROM deps AS build
COPY . .
RUN npm run build
RUN npm ci --omit=dev --ignore-scripts

# distroless 运行时
FROM gcr.io/distroless/nodejs22-debian12:nonroot AS runtime
WORKDIR /app
COPY --from=build /app/index.js ./index.js
COPY --from=build /app/package.json .
COPY --from=build /app/node_modules ./node_modules
USER nonroot
EXPOSE 3000
CMD ["index.js"]