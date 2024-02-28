window.BENCHMARK_DATA = {
  "lastUpdate": 1709115350904,
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
          "id": "0804bab4c9b43f2e22be6d77be127415a9a0532f",
          "message": "perf(cmd-api-server): add demonstration of continuous benchmarking\n\nPrimary change:\n---------------\n\nThis is the ice-breaker for some work that got stuck related to this issue:\nhttps://github.com/hyperledger/cacti/issues/2672\n\nThe used benchamking library (benchmark.js) is old but solid and has\nalmost no dependencies which means that we'll be in the clear longer term\nwhen it comes to CVEs popping up.\n\nThe benchmarks added here are very simple and measure the throughput of\nthe API server's Open API spec providing endpoints.\n\nThe GitHub action that we use is designed to do regression detection and\nreporting but this is hard to verify before actually putting it in place\nas we cannot simulate the CI environment's clone on a local environment.\n\nThe hope is that this change will make it so that if someone tries to\nmake a code change that will lower performance significantly, then we\ncan catch that at the review stage instead of having to find out later.\n\nSecondary change:\n-----------------\n\n1. Started using tsx in favor of ts-node because it appers to be about\n5% faster when looking at the benchmark execution. It also claims to have\nless problems with ESM compared to ts-node so if this initial trial\ngoes well we could later on decide to swap out ts-node with it project-wide.\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-02-02T00:09:44-08:00",
          "tree_id": "741d7ddf0400698b2fdfb3d8ac58c18e884a4afe",
          "url": "https://github.com/zondervancalvez/cactus/commit/0804bab4c9b43f2e22be6d77be127415a9a0532f"
        },
        "date": 1707202982258,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 622,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 380,
            "range": "±1.93%",
            "unit": "ops/sec",
            "extra": "181 samples"
          }
        ]
      },
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
          "id": "2dc0de86bf1c2add57b95edab571f34b75d86c44",
          "message": "build(deps-dev): bump vite in /packages/cacti-ledger-browser-react\n\nBumps [vite](https://github.com/vitejs/vite/tree/HEAD/packages/vite) from 5.0.8 to 5.0.12.\n- [Release notes](https://github.com/vitejs/vite/releases)\n- [Changelog](https://github.com/vitejs/vite/blob/v5.0.12/packages/vite/CHANGELOG.md)\n- [Commits](https://github.com/vitejs/vite/commits/v5.0.12/packages/vite)\n\n---\nupdated-dependencies:\n- dependency-name: vite\n  dependency-type: direct:development\n...\n\nCo-authored-by: Peter Somogyvari <peter.somogyvari@accenture.com>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-02-26T17:55:29-08:00",
          "tree_id": "e8d108948d869f1173857dfb0e1770faed743f5e",
          "url": "https://github.com/zondervancalvez/cactus/commit/2dc0de86bf1c2add57b95edab571f34b75d86c44"
        },
        "date": 1709020854789,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 610,
            "range": "±1.71%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 385,
            "range": "±1.55%",
            "unit": "ops/sec",
            "extra": "182 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andre.augusto@tecnico.ulisboa.pt",
            "name": "André Augusto",
            "username": "AndreAugusto11"
          },
          "committer": {
            "email": "9387513+outSH@users.noreply.github.com",
            "name": "Michal Bajer",
            "username": "outSH"
          },
          "distinct": true,
          "id": "f57ab70412a61f943b6a4ac88baa074f5893fc45",
          "message": "test(test-tooling): fix FabricTestLedger INVALID_ENDORSER_TRANSACTION\n\n* reverts changes of commit 3371772c582389f6ee0c6fb66af875dd93cc94c6,\nwhich seems to be breaking the Fabric Test Ledger\n\nResults of further investigation into the root cause done by Peter:\n1. The URLs we specify have the `grpcs://` protocol specified meaning that\nTLS is used for securing the connection.\n2. Certificates that are generated by the Fabric-provided boostrap scripts\nwhen setting up crypto materials for the ledger are generated with `localhost`\nas the hostname instead of the IP address of localhost.\n3. The C++ gRPC implementation does not support mixing IP addresses and\nhostnames when it comes to connections that are using TLS, e.g. if the\ncertificate we are using was made out for `localhost` then it won't work\nfor `127.0.0.1` even though technically from our perspective they meaning\nthe same thing (do note however that technically localhost could be set\nup to resolve to something other than 127.0.0.1 in a DNS server so the\ndifference is meaningful).\n\nSource: https://github.com/grpc/grpc/issues/2691\n\ncloses #3009\n\nCo-authored-by: Peter Somogyvari <peter.somogyvari@accenture.com>\n\nSigned-off-by: André Augusto <andre.augusto@tecnico.ulisboa.pt>\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-02-28T10:52:27+01:00",
          "tree_id": "cd8fd97c24f621973d23107f70892bbace4f3448",
          "url": "https://github.com/zondervancalvez/cactus/commit/f57ab70412a61f943b6a4ac88baa074f5893fc45"
        },
        "date": 1709115348867,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 605,
            "range": "±1.62%",
            "unit": "ops/sec",
            "extra": "176 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 376,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "180 samples"
          }
        ]
      }
    ]
  }
}