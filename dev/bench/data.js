window.BENCHMARK_DATA = {
  "lastUpdate": 1715926298605,
  "repoUrl": "https://github.com/zondervancalvez/cactus",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "sandeep.nishad1@ibm.com",
            "name": "Sandeep Nishad",
            "username": "sandeepnRES"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "caa2b3a50ab7928942e72341ebc7e5511e3054f7",
          "message": "fix(corda-simple-app): use correct bond asset flows and contracts for bond asset exchange\n\n    corda-simple-app: fix typo for partyb twice in initNetworkId.sh\n\nSigned-off-by: Sandeep Nishad <sandeep.nishad1@ibm.com>",
          "timestamp": "2024-05-16T21:25:53-07:00",
          "tree_id": "93b26c979a99de08a324dc8c2802d4002c0bd719",
          "url": "https://github.com/zondervancalvez/cactus/commit/caa2b3a50ab7928942e72341ebc7e5511e3054f7"
        },
        "date": 1715926295554,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 574,
            "range": "±1.65%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 360,
            "range": "±1.37%",
            "unit": "ops/sec",
            "extra": "180 samples"
          }
        ]
      }
    ]
  }
}