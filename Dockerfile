FROM node:alpine
RUN wget -qO- https://github.com/dockspage/kibana-snapshot/archive/v1.5.tar.gz | tar xvz

WORKDIR /kibana-snapshot-1.5
RUN yarn

ENV NODE_ENV production

ENTRYPOINT node src/cli --elasticsearch.url="http://$ELASTIC_SEARCH:9200"