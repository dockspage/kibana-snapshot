FROM tarampampam/node:alpine
git clone https://github.com/dockspage/kibana-snapshot.git

WORKDIR /kibana-snapshot
COPY package*.json ./
COPY yarn.lock ./
RUN yarn

COPY . .

ENV NODE_ENV production

ENTRYPOINT ["node", "src/cli"]