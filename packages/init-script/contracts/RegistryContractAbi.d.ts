/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type {
  Interface,
  FunctionFragment,
  DecodedValue,
  Contract,
  BytesLike,
  BigNumberish,
  InvokeFunction,
  BN,
} from 'fuels';

import type { Enum, Option } from './common';

export type OptionalB256Input = Option<string>;

export type OptionalB256Output = Option<string>;

interface RegistryContractAbiInterface extends Interface {
  functions: {
    add_pool_contract: FunctionFragment;
    get_pool_contract: FunctionFragment;
    initialize: FunctionFragment;
    is_pool: FunctionFragment;
    pool_contract_root: FunctionFragment;
    vault: FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'add_pool_contract', values: [string]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_pool_contract', values: [string, string]): Uint8Array;
  encodeFunctionData(functionFragment: 'initialize', values: [string]): Uint8Array;
  encodeFunctionData(functionFragment: 'is_pool', values: [string]): Uint8Array;
  encodeFunctionData(functionFragment: 'pool_contract_root', values?: undefined): Uint8Array;
  encodeFunctionData(functionFragment: 'vault', values?: undefined): Uint8Array;

  decodeFunctionData(functionFragment: 'add_pool_contract', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_pool_contract', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'initialize', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'is_pool', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'pool_contract_root', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'vault', data: BytesLike): DecodedValue;
}

export class RegistryContractAbi extends Contract {
  interface: RegistryContractAbiInterface;
  functions: {
    add_pool_contract: InvokeFunction<[pool_id: string], void>;

    get_pool_contract: InvokeFunction<[token_a: string, token_b: string], OptionalB256Output>;

    initialize: InvokeFunction<[template_pool_id: string], void>;

    is_pool: InvokeFunction<[addr: string], boolean>;

    pool_contract_root: InvokeFunction<[], string>;

    vault: InvokeFunction<[], string>;
  };
}
