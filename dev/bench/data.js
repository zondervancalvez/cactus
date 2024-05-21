window.BENCHMARK_DATA = {
  "lastUpdate": 1716274329192,
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
      },
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
        "date": 1715927366035,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 740,
            "range": "±2.68%",
            "unit": "ops/sec",
            "extra": "179 samples"
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
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "eacaef3cc52512b74b11cdc1b8c1b09e4d82460e",
          "message": "chore(github): shorten ci.yaml workflow and job names\n\nce - cactus-example\ncp - cactus-plugin\ncpk - cactus-plugin-keychain\ncpl - cactus-plugin-ledger\ncplc - cactus-plugin-ledger-connector\nplc - plugin-ledger-connector\ncpp - cactus-plugin-persistence\nct - cactus-test\nctp - cactus-test-plugin\n\nFixes: hyperledger#2624\n\nSigned-off-by: zondervancalvez <zondervan.v.calvez@accenture.com>",
          "timestamp": "2024-05-18T16:17:18-07:00",
          "tree_id": "36312b30100d2d6e1069e72c17470d211eadc167",
          "url": "https://github.com/zondervancalvez/cactus/commit/eacaef3cc52512b74b11cdc1b8c1b09e4d82460e"
        },
        "date": 1716274326808,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 574,
            "range": "±1.60%",
            "unit": "ops/sec",
            "extra": "176 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 344,
            "range": "±1.54%",
            "unit": "ops/sec",
            "extra": "180 samples"
          }
        ]
      }
    ]
  }
}