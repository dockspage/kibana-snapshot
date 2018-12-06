# Kibana

This Kibana is a stripped-down version of OSS version of Kibana downloaded as a snapshot. It does not have Webpack and Babel and has only those dependencies that are used to start the server. It also adds a proxy server to enable authorization via password.

The server will run on port 5000 so that it can be installed easily with Dokku. The `ELASTIC_SEARCH` and `PASSWORD` environment variables need to be set on the container.

```docker
FROM artdeco/kibana
ENTRYPOINT node src/cli -e="http://$ELASTIC_SEARCH:9200"
```

## Modification

To remove dependencies used for building bundles, some changes are made.

- [x] `src/server/kbn_server.js`: remove Optimize plugin to disable webpack. Comment out https://github.com/elastic/kibana/blob/v6.5.0/src/optimize/base_optimizer.js dependency. Since webpack is removed, our proxy will serve the optimized bundles as well.
- [x] `src/cli/index.js`: Start the proxy server on 5000 beforehand (implemented in `lib-src/proxy-server.js` to serve optimized bundles and provide Kibana proxy with authorization via the `PASSWORD` environment variable).
- [x] files in `optimize`: replace `__REPLACE_WITH_PUBLIC_PATH__` with `''`.