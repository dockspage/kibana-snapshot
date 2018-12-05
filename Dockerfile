FROM node:10.14.1-alpine

WORKDIR /

COPY . .

ENV NODE_ENV production

ENTRYPOINT ["node", "/src/cli"]