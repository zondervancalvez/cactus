window.BENCHMARK_DATA = {
  "lastUpdate": 1713249951377,
  "repoUrl": "https://github.com/zondervancalvez/cactus",
  "entries": {
    "Benchmark": [
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
          "id": "ab9eedf318281a8ce825be8be5adb8645c88c344",
          "message": "test(connector-besu): migrate OpenAPI validation test case to Jest\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-04-02T12:35:06-07:00",
          "tree_id": "0df2609f64beabde3a659693b742c0b7da5dfc69",
          "url": "https://github.com/zondervancalvez/cactus/commit/ab9eedf318281a8ce825be8be5adb8645c88c344"
        },
        "date": 1712135988704,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 590,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "179 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 365,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "182 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zondervan.v.calvez@accenture.com",
            "name": "zondervancalvez",
            "username": "zondervancalvez"
          },
          "committer": {
            "email": "zondervan.v.calvez@accenture.com",
            "name": "zondervancalvez",
            "username": "zondervancalvez"
          },
          "distinct": true,
          "id": "acca13e0d6b6589d6c0efb8d78bbfdfb4ec91377",
          "message": "Merge branch 'main' of https://github.com/zondervancalvez/cactus into main",
          "timestamp": "2024-04-16T14:29:28+08:00",
          "tree_id": "461594c31d3cfc53eb6e0654040483304488f172",
          "url": "https://github.com/zondervancalvez/cactus/commit/acca13e0d6b6589d6c0efb8d78bbfdfb4ec91377"
        },
        "date": 1713249948188,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 576,
            "range": "±1.82%",
            "unit": "ops/sec",
            "extra": "177 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 362,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "179 samples"
          }
        ]
      }
    ]
  }
}