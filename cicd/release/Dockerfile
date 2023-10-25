FROM node:18-alpine as builder
WORKDIR /app
COPY yarn.lock .env ./
COPY package.deps.json package.json
RUN yarn install
COPY . .
RUN yarn prisma migrate deploy
RUN yarn build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app .
ENTRYPOINT ["yarn", "start:prod"]
