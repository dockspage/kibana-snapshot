# Kibana

This Kibana is a stripped-down version of OSS version of Kibana downloaded as a snapshot. It has those dependencies that are not used to start the server removed, and adds a proxy server to enable authorization.

The server will run on port 5000 so that it can be installed easily with Dokku. The `ELASTIC_SEARCH` and `PASSWORD` environment variables need to be set on the container.

```docker
FROM artdeco/kibana
ENTRYPOINT node src/cli --elasticsearch.url="http://$ELASTIC_SEARCH:9200"
```