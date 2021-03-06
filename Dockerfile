FROM node:alpine
RUN wget -qO- https://github.com/dockspage/kibana-snapshot/archive/v1.8.tar.gz | tar xz

WORKDIR /kibana-snapshot-1.8
RUN yarn

ENV NODE_ENV production

ENTRYPOINT node src/cli -e http://$ELASTIC_SEARCH:9200