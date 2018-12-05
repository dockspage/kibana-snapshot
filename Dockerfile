FROM node:lts-alpine

WORKDIR /
COPY package*.json ./
COPY yarn.lock ./
RUN yarn

COPY . .

ENV NODE_ENV production

ENTRYPOINT ["node", "src/cli"]