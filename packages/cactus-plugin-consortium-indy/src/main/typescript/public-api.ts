export {
  GetConsortiumEndpointV1,
  IGetConsortiumJwsEndpointOptions,
} from "./consortium/get-consortium-jws-endpoint-v1";

export {
  GetNodeJwsEndpoint,
  IGetNodeJwsEndpointOptions,
} from "./consortium/get-node-jws-endpoint-v1";

export {
  PluginConsortiumIndy,
  IPluginConsortiumIndyOptions,
  IWebAppOptions,
} from "./plugin-consortium-indy";

export * from "./generated/openapi/typescript-axios/index";

export { PluginFactoryWebService } from "./plugin-factory-consortium-indy";

import { IPluginFactoryOptions } from "@hyperledger/cactus-core-api";
import { PluginFactoryWebService } from "./plugin-factory-consortium-indy";

export async function createPluginFactory(
  pluginFactoryOptions: IPluginFactoryOptions,
): Promise<PluginFactoryWebService> {
  return new PluginFactoryWebService(pluginFactoryOptions);
}
