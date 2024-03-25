window.BENCHMARK_DATA = {
  "lastUpdate": 1711349202262,
  "repoUrl": "https://github.com/zondervancalvez/cactus",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "f5293ec87f34a07caba9998103022e8837f77a76",
          "message": "build(deps): bump crypto-js\n\nBumps [crypto-js](https://github.com/brix/crypto-js) from 4.1.1 to 4.2.0.\n- [Commits](https://github.com/brix/crypto-js/compare/4.1.1...4.2.0)\n\n---\nupdated-dependencies:\n- dependency-name: crypto-js\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2024-03-14T17:29:00-07:00",
          "tree_id": "8c7b76386095edb44f653291f56f2c54c18198c1",
          "url": "https://github.com/zondervancalvez/cactus/commit/f5293ec87f34a07caba9998103022e8837f77a76"
        },
        "date": 1710484881787,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 594,
            "range": "±1.92%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 377,
            "range": "±1.71%",
            "unit": "ops/sec",
            "extra": "182 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "peter.somogyvari@accenture.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "e87e57791024824bb19830c66b9f3d2eaed6d629",
          "message": "feat(core-api): add IPluginGrpcService type & user-defined type guard\n\n1. This will be used by the upcoming functionality of the API server that\nallows all plugins to register their own gRPC services as part of the API\nserver's own gRPC service.\n2. The above mechanism will largely be the same conceptually as the one\nwe have for HTTP and SocketIO endpoints already.\n3. It is optional for plugins to implement gRPC services and therefore\nthe interface is a standalone one instead of being baked into the more\ngeneric IPluginWebService interface for example.\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-03-21T10:12:36-07:00",
          "tree_id": "297b3df27500cbf4b1dbe5b5c5d872665072a06f",
          "url": "https://github.com/zondervancalvez/cactus/commit/e87e57791024824bb19830c66b9f3d2eaed6d629"
        },
        "date": 1711349200324,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 582,
            "range": "±1.57%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 357,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "181 samples"
          }
        ]
      }
    ]
  }
}