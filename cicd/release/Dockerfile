FROM node:18-alpine
RUN apk add openssl
WORKDIR /app
COPY yarn.lock .env ./
COPY package.deps.json package.json
RUN yarn install
COPY . .
RUN yarn prisma migrate deploy & yarn prisma generate & yarn build
ENTRYPOINT ["yarn", "start:prod"]
