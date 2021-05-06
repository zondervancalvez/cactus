/* tslint:disable */
/* eslint-disable */
/**
 * Hyperledger Core API
 * Contains/describes the core API types for Cactus. Does not describe actual endpoints on its own as this is left to the implementing plugins who can import and re-use commonly needed type definitions from this specification. One example of said commonly used type definitions would be the types related to consortium management, cactus nodes, ledgers, etc..
 *
 * The version of the OpenAPI document: 0.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * A Cactus node can be a single server, or a set of servers behind a load balancer acting as one.
 * @export
 * @interface CactusNode
 */
export interface CactusNode {
    /**
     * 
     * @type {string}
     * @memberof CactusNode
     */
    nodeApiHost: string;
    /**
     * The PEM encoded public key that was used to generate the JWS included in the response (the jws property)
     * @type {string}
     * @memberof CactusNode
     */
    publicKeyPem: string;
    /**
     * 
     * @type {string}
     * @memberof CactusNode
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof CactusNode
     */
    consortiumId: string;
    /**
     * 
     * @type {string}
     * @memberof CactusNode
     */
    memberId: string;
    /**
     * Stores an array of Ledger entity IDs that are reachable (routable) via this Cactus Node. This information is used by the client side SDK API client to figure out at runtime where to send API requests that are specific to a certain ledger such as requests to execute transactions.
     * @type {Array<string>}
     * @memberof CactusNode
     */
    ledgerIds: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CactusNode
     */
    pluginInstanceIds: Array<string>;
}
/**
 * 
 * @export
 * @interface CactusNodeAllOf
 */
export interface CactusNodeAllOf {
    /**
     * 
     * @type {string}
     * @memberof CactusNodeAllOf
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof CactusNodeAllOf
     */
    consortiumId: string;
    /**
     * 
     * @type {string}
     * @memberof CactusNodeAllOf
     */
    memberId: string;
    /**
     * Stores an array of Ledger entity IDs that are reachable (routable) via this Cactus Node. This information is used by the client side SDK API client to figure out at runtime where to send API requests that are specific to a certain ledger such as requests to execute transactions.
     * @type {Array<string>}
     * @memberof CactusNodeAllOf
     */
    ledgerIds: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CactusNodeAllOf
     */
    pluginInstanceIds: Array<string>;
}
/**
 * A Cactus node meta information
 * @export
 * @interface CactusNodeMeta
 */
export interface CactusNodeMeta {
    /**
     * 
     * @type {string}
     * @memberof CactusNodeMeta
     */
    nodeApiHost: string;
    /**
     * The PEM encoded public key that was used to generate the JWS included in the response (the jws property)
     * @type {string}
     * @memberof CactusNodeMeta
     */
    publicKeyPem: string;
}
/**
 * Enumerates a list of consensus algorithm families that do not provide immediate finality
 * @export
 * @enum {string}
 */
export enum ConsensusAlgorithmFamiliesWithOutTxFinality {
    WORK = 'org.hyperledger.cactus.consensusalgorithm.PROOF_OF_WORK'
}

/**
 * Enumerates a list of consensus algorithm families that provide immediate finality
 * @export
 * @enum {string}
 */
export enum ConsensusAlgorithmFamiliesWithTxFinality {
    AUTHORITY = 'org.hyperledger.cactus.consensusalgorithm.PROOF_OF_AUTHORITY',
    STAKE = 'org.hyperledger.cactus.consensusalgorithm.PROOF_OF_STAKE'
}

/**
 * Enumerates a list of consensus algorithm families in existence. Does not intend to be an exhaustive list, just a practical one, meaning that we only include items here that are relevant to Hyperledger Cactus in fulfilling its own duties. This can be extended later as more sophisticated features of Cactus get implemented. This enum is meant to be first and foremost a useful abstraction for achieving practical tasks, not an encyclopedia and therefore we ask of everyone that this to be extended only in ways that serve a practical purpose for the runtime behavior of Cactus or Cactus plugins in general. The bottom line is that we can accept this enum being not 100% accurate as long as it 100% satisfies what it was designed to do.
 * @export
 * @enum {string}
 */
export enum ConsensusAlgorithmFamily {
    AUTHORITY = 'org.hyperledger.cactus.consensusalgorithm.PROOF_OF_AUTHORITY',
    STAKE = 'org.hyperledger.cactus.consensusalgorithm.PROOF_OF_STAKE',
    WORK = 'org.hyperledger.cactus.consensusalgorithm.PROOF_OF_WORK'
}

/**
 * 
 * @export
 * @interface Consortium
 */
export interface Consortium {
    /**
     * 
     * @type {string}
     * @memberof Consortium
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Consortium
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Consortium
     */
    mainApiHost: string;
    /**
     * The collection (array) of primary keys of consortium member entities that belong to this Consortium.
     * @type {Array<string>}
     * @memberof Consortium
     */
    memberIds: Array<string>;
}
/**
 * 
 * @export
 * @interface ConsortiumDatabase
 */
export interface ConsortiumDatabase {
    /**
     * A collection of Consortium entities. In practice this should only ever contain a single consortium, but we defined it as an array to keep the convention up with the rest of the collections defined in the Consortium data in general. Also, if we ever decide to somehow have some sort of consortium to consortium integration (which does not make much sense in the current frame of mind of the author in the year 2020) then having this as an array will have proven itself to be an excellent long term compatibility/extensibility decision indeed.
     * @type {Array<Consortium>}
     * @memberof ConsortiumDatabase
     */
    consortium: Array<Consortium>;
    /**
     * The complete collection of all ledger entities in existence within the consortium.
     * @type {Array<Ledger>}
     * @memberof ConsortiumDatabase
     */
    ledger: Array<Ledger>;
    /**
     * The complete collection of all consortium member entities in existence within the consortium.
     * @type {Array<ConsortiumMember>}
     * @memberof ConsortiumDatabase
     */
    consortiumMember: Array<ConsortiumMember>;
    /**
     * The complete collection of all cactus nodes entities in existence within the consortium.
     * @type {Array<CactusNode>}
     * @memberof ConsortiumDatabase
     */
    cactusNode: Array<CactusNode>;
    /**
     * The complete collection of all plugin instance entities in existence within the consortium.
     * @type {Array<PluginInstance>}
     * @memberof ConsortiumDatabase
     */
    pluginInstance: Array<PluginInstance>;
}
/**
 * 
 * @export
 * @interface ConsortiumMember
 */
export interface ConsortiumMember {
    /**
     * 
     * @type {string}
     * @memberof ConsortiumMember
     */
    id: string;
    /**
     * The human readable name a Consortium member can be referred to while making it easy for humans to distinguish this particular consortium member entity from any other ones.
     * @type {string}
     * @memberof ConsortiumMember
     */
    name: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ConsortiumMember
     */
    nodeIds: Array<string>;
}
/**
 * 
 * @export
 * @enum {string}
 */
export enum Constants {
    SocketIoConnectionPathV1 = '/api/v1/async/socket-io/connect'
}

/**
 * 
 * @export
 * @interface GetKeychainEntryRequest
 */
export interface GetKeychainEntryRequest {
    /**
     * The key for the entry to get from the keychain.
     * @type {string}
     * @memberof GetKeychainEntryRequest
     */
    key: string;
}
/**
 * 
 * @export
 * @interface GetKeychainEntryResponse
 */
export interface GetKeychainEntryResponse {
    /**
     * The key that was used to retrieve the value from the keychain.
     * @type {string}
     * @memberof GetKeychainEntryResponse
     */
    key: string;
    /**
     * The value associated with the requested key on the keychain.
     * @type {string}
     * @memberof GetKeychainEntryResponse
     */
    value: string;
}
/**
 * 
 * @export
 * @interface JWSGeneral
 */
export interface JWSGeneral {
    /**
     * 
     * @type {string}
     * @memberof JWSGeneral
     */
    payload: string;
    /**
     * 
     * @type {Array<JWSRecipient>}
     * @memberof JWSGeneral
     */
    signatures: Array<JWSRecipient>;
}
/**
 * A JSON Web Signature. See: https://tools.ietf.org/html/rfc7515 for info about standard.
 * @export
 * @interface JWSRecipient
 */
export interface JWSRecipient {
    /**
     * 
     * @type {string}
     * @memberof JWSRecipient
     */
    signature: string;
    /**
     * 
     * @type {string}
     * @memberof JWSRecipient
     */
    protected?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof JWSRecipient
     */
    header?: { [key: string]: object; };
}
/**
 * 
 * @export
 * @interface Ledger
 */
export interface Ledger {
    /**
     * 
     * @type {string}
     * @memberof Ledger
     */
    id: string;
    /**
     * 
     * @type {LedgerType}
     * @memberof Ledger
     */
    ledgerType: LedgerType;
    /**
     * 
     * @type {string}
     * @memberof Ledger
     */
    consortiumMemberId?: string;
}
/**
 * Enumerates the different ledger vendors and their major versions encoded within the name of the LedgerType. For example \"BESU_1X\" involves all of the [1.0.0;2.0.0) where 1.0.0 is included and anything up until, but not 2.0.0. See: https://stackoverflow.com/a/4396303/698470 for further explanation.
 * @export
 * @enum {string}
 */
export enum LedgerType {
    BESU1X = 'BESU_1X',
    BESU2X = 'BESU_2X',
    BURROW0X = 'BURROW_0X',
    CORDA4X = 'CORDA_4X',
    FABRIC14X = 'FABRIC_14X',
    FABRIC2 = 'FABRIC_2',
    QUORUM2X = 'QUORUM_2X',
    SAWTOOTH1X = 'SAWTOOTH_1X'
}

/**
 * 
 * @export
 * @interface PluginImport
 */
export interface PluginImport {
    /**
     * 
     * @type {string}
     * @memberof PluginImport
     */
    packageName: string;
    /**
     * 
     * @type {PluginImportType}
     * @memberof PluginImport
     */
    type: PluginImportType;
    /**
     * 
     * @type {any}
     * @memberof PluginImport
     */
    options?: any | null;
}
/**
 * 
 * @export
 * @enum {string}
 */
export enum PluginImportType {
    LOCAL = 'org.hyperledger.cactus.plugin_import_type.LOCAL',
    REMOTE = 'org.hyperledger.cactus.plugin_import_type.REMOTE'
}

/**
 * 
 * @export
 * @interface PluginInstance
 */
export interface PluginInstance {
    /**
     * 
     * @type {string}
     * @memberof PluginInstance
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof PluginInstance
     */
    packageName: string;
}
/**
 * 
 * @export
 * @interface SetKeychainEntryRequest
 */
export interface SetKeychainEntryRequest {
    /**
     * The key for the entry to set on the keychain.
     * @type {string}
     * @memberof SetKeychainEntryRequest
     */
    key: string;
    /**
     * The value that will be associated with the key on the keychain.
     * @type {string}
     * @memberof SetKeychainEntryRequest
     */
    value: string;
}
/**
 * 
 * @export
 * @interface SetKeychainEntryResponse
 */
export interface SetKeychainEntryResponse {
    /**
     * The key that was used to set the value on the keychain.
     * @type {string}
     * @memberof SetKeychainEntryResponse
     */
    key: string;
}

