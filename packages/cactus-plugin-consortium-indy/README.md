# `@hyperledger/cactus-plugin-consortium-indy`

TODO

Items:

1. Create an Indy all-in-one test ledger, similar to all the other test ledgers that are located under packages/cactus-test-tooling/src/main/typescript which are classes that are pulling up containers which are mostly defined in the Dockerfiles under `tools/docker/*all-in-one`
2. Then select an Indy client library (Javascript/Typescript based, one that has Typescript types is preferred but not mandatory)
3. Create a test case where the pristine Indy ledger gets pulled up, 
4. Populate Indy ledger with some test data that defines a dummy consortium
5. Instantiate the consortium plugin within the test case with the connection details of the Indy ledger
6. Instantiate an API client of the consortium plugin (packages/cactus-plugin-consortium-indy/src/main/typescript/generated/openapi/typescript-axios => `DefaultApi` class)
7. Use API client to invoke `getNodeJws()` and `getConsortiumJws()` methods of the plugin via HTTP
8. Assert that the data has been retrieved successfully.
9. Test case passed.
10. Open Pull request.


A good example of a containerized ledger is in this Dockerfile: tools/docker/iroha-all-in-one/Dockerfile