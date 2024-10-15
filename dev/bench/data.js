window.BENCHMARK_DATA = {
  "lastUpdate": 1728983652029,
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
          "id": "6994e5b7a43b4f3e06535babb17edd466c4d4abc",
          "message": "fix(weaver-go-sdk): revert fabric-protos-go-apiv2 dep to fabric-protos-go\n\n    * Added a script to manually change go package names inside fabric-protos\n      to fabric-protos-go-apiv2 (for future migration apiv2).\n    * Added more unit and build tests covering all go modules\n    * Added tools/go-mod-tidy.sh script to fix go.mod by running go mod tidy\n\nSigned-off-by: Sandeep Nishad <sandeep.nishad1@ibm.com>",
          "timestamp": "2024-05-24T12:02:26-07:00",
          "tree_id": "d362d441cc6cadaf31b7851a6c4578c64fe3adcd",
          "url": "https://github.com/zondervancalvez/cactus/commit/6994e5b7a43b4f3e06535babb17edd466c4d4abc"
        },
        "date": 1716796516094,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 586,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "179 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 367,
            "range": "±1.44%",
            "unit": "ops/sec",
            "extra": "181 samples"
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
          "id": "6994e5b7a43b4f3e06535babb17edd466c4d4abc",
          "message": "fix(weaver-go-sdk): revert fabric-protos-go-apiv2 dep to fabric-protos-go\n\n    * Added a script to manually change go package names inside fabric-protos\n      to fabric-protos-go-apiv2 (for future migration apiv2).\n    * Added more unit and build tests covering all go modules\n    * Added tools/go-mod-tidy.sh script to fix go.mod by running go mod tidy\n\nSigned-off-by: Sandeep Nishad <sandeep.nishad1@ibm.com>",
          "timestamp": "2024-05-24T12:02:26-07:00",
          "tree_id": "d362d441cc6cadaf31b7851a6c4578c64fe3adcd",
          "url": "https://github.com/zondervancalvez/cactus/commit/6994e5b7a43b4f3e06535babb17edd466c4d4abc"
        },
        "date": 1716797555528,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 737,
            "range": "±2.91%",
            "unit": "ops/sec",
            "extra": "177 samples"
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
          "id": "13f457c82fddfef513ad6fff5e8a75648682a851",
          "message": "build(yarn): add plugin-interactive-filter to manage deps per-package\n\nThis plugin allows to resolve some CVEs more surgically that are found in indirect\ndependencies which are difficult to upgrade without triggering a large change\nneeded and potential migrations, breaking changes to the public APIs of packages.\n\nThe reason why the above problem happens is because `yarn up` and `yarn up -R`\nare blunt instruments when it comes to managing a monorepo such as ours:\nThey do their upgrade all-or-nothing, e.g. you can't upgrade a single dependency\nin a single monorepo package, you must upgrade the dependency project-wide\nwith the mentioned tools, but sometimes we need to perform the upgrade just in a\nsingle monorepo package.\n\nFor example to the above, about 20 packages use web3 but only about 5 of those\nare using v4.x versions of web3. A new CVE came out covering v4.1.x and so\nI needed to upgrade web3 only in those packages where web3 was already above\nv4.0.0 and leave the older ones alone (surgical upgrades).\n\nTo accomplish this I've found no way to do it with stock yarn CLI commands, but\nsomeone who had the exact same problem had written a plugin for solving it.\n\nThe original issue reported to yarn with the same problem we are having:\nhttps://github.com/yarnpkg/berry/issues/2591\n\nThe repository where the plugin resides that we are adding in this commit in\norder to remediate the problem of lack of surgical (per-package) upgrades:\nhttps://github.com/eyolas/yarn-plugin-interractive-filter\n\nThe original CVE that I was investigating as I stumbled upon the solution:\n- https://github.com/hyperledger/cacti/pull/3264\n- https://github.com/hyperledger/cacti/security/dependabot/987\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-06-06T10:40:27-07:00",
          "tree_id": "977482c9f5dc0d8760dc86424c55ff05b34ca170",
          "url": "https://github.com/zondervancalvez/cactus/commit/13f457c82fddfef513ad6fff5e8a75648682a851"
        },
        "date": 1717747253798,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 591,
            "range": "±1.76%",
            "unit": "ops/sec",
            "extra": "177 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 363,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "180 samples"
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
          "id": "13f457c82fddfef513ad6fff5e8a75648682a851",
          "message": "build(yarn): add plugin-interactive-filter to manage deps per-package\n\nThis plugin allows to resolve some CVEs more surgically that are found in indirect\ndependencies which are difficult to upgrade without triggering a large change\nneeded and potential migrations, breaking changes to the public APIs of packages.\n\nThe reason why the above problem happens is because `yarn up` and `yarn up -R`\nare blunt instruments when it comes to managing a monorepo such as ours:\nThey do their upgrade all-or-nothing, e.g. you can't upgrade a single dependency\nin a single monorepo package, you must upgrade the dependency project-wide\nwith the mentioned tools, but sometimes we need to perform the upgrade just in a\nsingle monorepo package.\n\nFor example to the above, about 20 packages use web3 but only about 5 of those\nare using v4.x versions of web3. A new CVE came out covering v4.1.x and so\nI needed to upgrade web3 only in those packages where web3 was already above\nv4.0.0 and leave the older ones alone (surgical upgrades).\n\nTo accomplish this I've found no way to do it with stock yarn CLI commands, but\nsomeone who had the exact same problem had written a plugin for solving it.\n\nThe original issue reported to yarn with the same problem we are having:\nhttps://github.com/yarnpkg/berry/issues/2591\n\nThe repository where the plugin resides that we are adding in this commit in\norder to remediate the problem of lack of surgical (per-package) upgrades:\nhttps://github.com/eyolas/yarn-plugin-interractive-filter\n\nThe original CVE that I was investigating as I stumbled upon the solution:\n- https://github.com/hyperledger/cacti/pull/3264\n- https://github.com/hyperledger/cacti/security/dependabot/987\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-06-06T10:40:27-07:00",
          "tree_id": "977482c9f5dc0d8760dc86424c55ff05b34ca170",
          "url": "https://github.com/zondervancalvez/cactus/commit/13f457c82fddfef513ad6fff5e8a75648682a851"
        },
        "date": 1717748140820,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 716,
            "range": "±3.15%",
            "unit": "ops/sec",
            "extra": "179 samples"
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
          "id": "497ea3226631fdcad763e6281ee058d91ca01988",
          "message": "test(test-tooling): add container image builder utilities\n\n1. Currently our integration tests depend on pre-published container\nimages to be on the official registry (ghcr.io). This has pros and cons.\nThe pro is that we can pin the tests to a specific ledger version and\nthen have confidence that the test code works with that specific image.\nOn the other hand if the image itself has problems we won't know it until\nafter it was published and then tests were executed with it (unless we\nperform manual testing which is a lot of effrot as it requires the\nmanual modification of the test cases).\n2. In order to gives us the ability to test against the container image\ndefinitions as they are in the current revision of the source code,\nwe are adding here a couple of utility functions to streamline writing\ntest cases that build the container images for themselves as part of the\ntest case.\n\nAn example of how to use it in a test case:\n\n```typescript\nconst imgConnectorJvm = await buildImageConnectorCordaServer({\n    logLevel,\n});\n\n// ...\n\nconnector = new CordaConnectorContainer({\n    logLevel,\n    imageName: imgConnectorJvm.imageName,\n    imageVersion: imgConnectorJvm.imageVersion,\n    envVars: [envVarSpringAppJson],\n});\n\n```\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-07-17T17:31:23-07:00",
          "tree_id": "59d3d8a612cce5ee7e4b23eb014491baec319e68",
          "url": "https://github.com/zondervancalvez/cactus/commit/497ea3226631fdcad763e6281ee058d91ca01988"
        },
        "date": 1721288621530,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 566,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "177 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 351,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "181 samples"
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
            "email": "sandeepn.official@gmail.com",
            "name": "Sandeep Nishad",
            "username": "sandeepnRES"
          },
          "distinct": true,
          "id": "30cde8bc3b1b1ca9ba7ebe1eb6e3d181551df0a8",
          "message": "chore: updating golang version in docs, and proto-grpc dependencies\n\nSigned-off-by: Sandeep Nishad <sandeep.nishad1@ibm.com>",
          "timestamp": "2024-08-15T01:03:09+05:30",
          "tree_id": "9ddb9aef4da5f33d5a7f1d46c68186b4551febc7",
          "url": "https://github.com/zondervancalvez/cactus/commit/30cde8bc3b1b1ca9ba7ebe1eb6e3d181551df0a8"
        },
        "date": 1723797037602,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 609,
            "range": "±1.62%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 356,
            "range": "±2.00%",
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
            "email": "sandeepn.official@gmail.com",
            "name": "Sandeep Nishad",
            "username": "sandeepnRES"
          },
          "distinct": true,
          "id": "30cde8bc3b1b1ca9ba7ebe1eb6e3d181551df0a8",
          "message": "chore: updating golang version in docs, and proto-grpc dependencies\n\nSigned-off-by: Sandeep Nishad <sandeep.nishad1@ibm.com>",
          "timestamp": "2024-08-15T01:03:09+05:30",
          "tree_id": "9ddb9aef4da5f33d5a7f1d46c68186b4551febc7",
          "url": "https://github.com/zondervancalvez/cactus/commit/30cde8bc3b1b1ca9ba7ebe1eb6e3d181551df0a8"
        },
        "date": 1723798093526,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 638,
            "range": "±3.85%",
            "unit": "ops/sec",
            "extra": "176 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adrian.batuto@accenture.com",
            "name": "adrianbatuto",
            "username": "adrianbatuto"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "ec9683d38670fe5d657b602db8215e602fd4209d",
          "message": "feat(corda): support 5.1 via TS/HTTP (no JVM)\nFixes #2978\nFixes #3293\n\nSigned-off-by: adrianbatuto <adrian.batuto@accenture.com>",
          "timestamp": "2024-08-19T14:43:10-07:00",
          "tree_id": "530c66f1928ba9481fcc2d1d760582bf58be6677",
          "url": "https://github.com/zondervancalvez/cactus/commit/ec9683d38670fe5d657b602db8215e602fd4209d"
        },
        "date": 1724146888496,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 565,
            "range": "±1.87%",
            "unit": "ops/sec",
            "extra": "176 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 332,
            "range": "±2.26%",
            "unit": "ops/sec",
            "extra": "179 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adrian.batuto@accenture.com",
            "name": "adrianbatuto",
            "username": "adrianbatuto"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "ec9683d38670fe5d657b602db8215e602fd4209d",
          "message": "feat(corda): support 5.1 via TS/HTTP (no JVM)\nFixes #2978\nFixes #3293\n\nSigned-off-by: adrianbatuto <adrian.batuto@accenture.com>",
          "timestamp": "2024-08-19T14:43:10-07:00",
          "tree_id": "530c66f1928ba9481fcc2d1d760582bf58be6677",
          "url": "https://github.com/zondervancalvez/cactus/commit/ec9683d38670fe5d657b602db8215e602fd4209d"
        },
        "date": 1724147698713,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 728,
            "range": "±2.91%",
            "unit": "ops/sec",
            "extra": "182 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jagpreetsinghsasan@accenture.com",
            "name": "jagpreetsinghsasan"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "7b327917f580b4a583445dce9b38356c8224ea57",
          "message": "ci(github): skip commit parity for bots\n\n    Primary Changes\n    ---------------\n    1. Updated the workflow to include a skip\n       when the PR author is dependabot\n    2. Updated the pr-commit parity script to\n       include Levenshtein Distance string metric\n       instead of importing a package to reduce\n       workflow runtime\n\n    Changes required to incorporate 1)\n    3. Updated workflows/pr-commit-parity.yaml with\n       a conditional statement\n\n    Changes required to incorporate 2)\n    4. Updated the script with the functions,\n       levensheteinDistance and stringSimilarity\n       to have the required functionality\n    5. Updated the package.json with removal of the\n       package dependency of string-similarity-js\n    6. Updated the workflow and removed steps to\n       parse the project, thus reducing workflow\n       runtime\n\nFixes #3469\n\nSigned-off-by: jagpreetsinghsasan <jagpreetsinghsasan@accenture.com>",
          "timestamp": "2024-09-09T11:24:09-07:00",
          "tree_id": "667a848806e0d2fb3ad30fa2abf242a135a74c3c",
          "url": "https://github.com/zondervancalvez/cactus/commit/7b327917f580b4a583445dce9b38356c8224ea57"
        },
        "date": 1725941777895,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 570,
            "range": "±1.77%",
            "unit": "ops/sec",
            "extra": "176 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 319,
            "range": "±2.01%",
            "unit": "ops/sec",
            "extra": "179 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jagpreetsinghsasan@accenture.com",
            "name": "jagpreetsinghsasan"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "7b327917f580b4a583445dce9b38356c8224ea57",
          "message": "ci(github): skip commit parity for bots\n\n    Primary Changes\n    ---------------\n    1. Updated the workflow to include a skip\n       when the PR author is dependabot\n    2. Updated the pr-commit parity script to\n       include Levenshtein Distance string metric\n       instead of importing a package to reduce\n       workflow runtime\n\n    Changes required to incorporate 1)\n    3. Updated workflows/pr-commit-parity.yaml with\n       a conditional statement\n\n    Changes required to incorporate 2)\n    4. Updated the script with the functions,\n       levensheteinDistance and stringSimilarity\n       to have the required functionality\n    5. Updated the package.json with removal of the\n       package dependency of string-similarity-js\n    6. Updated the workflow and removed steps to\n       parse the project, thus reducing workflow\n       runtime\n\nFixes #3469\n\nSigned-off-by: jagpreetsinghsasan <jagpreetsinghsasan@accenture.com>",
          "timestamp": "2024-09-09T11:24:09-07:00",
          "tree_id": "667a848806e0d2fb3ad30fa2abf242a135a74c3c",
          "url": "https://github.com/zondervancalvez/cactus/commit/7b327917f580b4a583445dce9b38356c8224ea57"
        },
        "date": 1725942899371,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 678,
            "range": "±3.32%",
            "unit": "ops/sec",
            "extra": "180 samples"
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
          "id": "c331a633abef5502cfb5b1538b43b1f1a109a558",
          "message": "ci(github): enable manual publishing of custom git tags via input args\n\nThe `all-nodejs-packages-publish.yaml` workflow now has an input parameter\nwhere one can specify an arbitrary release git tag (such as v2.0.0-rc.5)\nto be the one to be published.\n\nThis will help us in scenarios where the release automation script failed to\nrun on GitHub and we have no way of publishing the given release manually\nfrom a local machine (since we do not have access to the npm/ghcr) tokens\nof the foundation (which is good security posture that we are happy to have)\n\nIn the scenario described above, in the future this will (should) allow us\nto fix bugs in the release automation script in commits that come **after**\nthe failed release and then manually trigger the updated (now functional)\npublish job for the older release version.\n\nThis will (hopefully) grant us the ability to ensure that releases are not\nmissing from the registries despite sometimes the automation breaking down.\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-10-03T18:56:06-07:00",
          "tree_id": "241384b891c90ea822f184f716f31574fb4699c1",
          "url": "https://github.com/zondervancalvez/cactus/commit/c331a633abef5502cfb5b1538b43b1f1a109a558"
        },
        "date": 1728289258080,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 735,
            "range": "±2.97%",
            "unit": "ops/sec",
            "extra": "179 samples"
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
          "id": "a4ec6118ed356fe12d35c2a6eddfd9eab1a37141",
          "message": "docs: change github org from hyperledger to hyperledger-cacti\n\nThe diff here came to be by doing a simple search & replace repo-wise\nwhere \"https://github.com/hyperledger/cacti/\" got replaced with\n\"https://github.com/hyperledger-cacti/cacti/\"\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-10-14T22:39:18-07:00",
          "tree_id": "34515692c43b0a7d5934932967012bd8f1902fc5",
          "url": "https://github.com/zondervancalvez/cactus/commit/a4ec6118ed356fe12d35c2a6eddfd9eab1a37141"
        },
        "date": 1728983649954,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 534,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "175 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 646,
            "range": "±3.24%",
            "unit": "ops/sec",
            "extra": "178 samples"
          }
        ]
      }
    ]
  }
}