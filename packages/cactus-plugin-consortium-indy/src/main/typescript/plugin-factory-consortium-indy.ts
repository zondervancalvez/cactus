import {
  IPluginFactoryOptions,
  PluginFactory,
} from "@hyperledger/cactus-core-api";
import {
  IPluginConsortiumIndyOptions,
  PluginConsortiumIndy,
} from "./plugin-consortium-indy";

export class PluginFactoryWebService extends PluginFactory<
  PluginConsortiumIndy,
  IPluginConsortiumIndyOptions,
  IPluginFactoryOptions
> {
  async create(
    pluginOptions: IPluginConsortiumIndyOptions,
  ): Promise<PluginConsortiumIndy> {
    return new PluginConsortiumIndy(pluginOptions);
  }
}
