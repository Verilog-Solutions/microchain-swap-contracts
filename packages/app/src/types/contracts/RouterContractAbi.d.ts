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

export type AddressInput = { value: string };

export type AddressOutput = { value: string };

export type ContractIdInput = { value: string };

export type ContractIdOutput = { value: string };

export type AddLiquidityOutputInput = {
  amount_a: BigNumberish;
  amount_b: BigNumberish;
  liquidity: BigNumberish;
};

export type AddLiquidityOutputOutput = {
  amount_a: BN;
  amount_b: BN;
  liquidity: BN;
};

export type SwapOutputInput = {
  input_amount: BigNumberish;
  output_amount: BigNumberish;
};

export type SwapOutputOutput = { input_amount: BN; output_amount: BN };

export type RawVecInput = { ptr: BigNumberish; cap: BigNumberish };

export type RawVecOutput = { ptr: BN; cap: BN };

export type VecInput = { buf: RawVecInput; len: BigNumberish };

export type VecOutput = { buf: RawVecOutput; len: BN };

export type IdentityInput = Enum<{
  Address: AddressInput;
  ContractId: ContractIdInput;
}>;

export type IdentityOutput = Enum<{
  Address: AddressOutput;
  ContractId: ContractIdOutput;
}>;

interface RouterContractAbiInterface extends Interface {
  functions: {
    add_liquidity: FunctionFragment;
    swap_exact_input: FunctionFragment;
    swap_exact_output: FunctionFragment;
    swap_exact_input_multihop: FunctionFragment;
    swap_exact_output_multihop: FunctionFragment;
    null: FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'add_liquidity',
    values: [string, BigNumberish, BigNumberish, BigNumberish, BigNumberish, IdentityInput]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: 'swap_exact_input',
    values: [string, BigNumberish, IdentityInput]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: 'swap_exact_output',
    values: [string, BigNumberish, BigNumberish, IdentityInput]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: 'swap_exact_input_multihop',
    values: [VecInput, BigNumberish, IdentityInput]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: 'swap_exact_output_multihop',
    values: [VecInput, BigNumberish, BigNumberish, IdentityInput]
  ): Uint8Array;
  encodeFunctionData(functionFragment: 'null', values?: undefined): Uint8Array;

  decodeFunctionData(functionFragment: 'add_liquidity', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'swap_exact_input', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'swap_exact_output', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'swap_exact_input_multihop', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'swap_exact_output_multihop', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'null', data: BytesLike): DecodedValue;
}

export class RouterContractAbi extends Contract {
  interface: RouterContractAbiInterface;
  functions: {
    add_liquidity: InvokeFunction<
      [
        pool: string,
        amount_a_desired: BigNumberish,
        amount_b_desired: BigNumberish,
        amount_a_min: BigNumberish,
        amount_b_min: BigNumberish,
        recipient: IdentityInput
      ],
      AddLiquidityOutputOutput
    >;

    swap_exact_input: InvokeFunction<
      [pool: string, min_amount_out: BigNumberish, recipient: IdentityInput],
      SwapOutputOutput
    >;

    swap_exact_output: InvokeFunction<
      [
        pool: string,
        amount_out: BigNumberish,
        max_amount_in: BigNumberish,
        recipient: IdentityInput
      ],
      SwapOutputOutput
    >;

    swap_exact_input_multihop: InvokeFunction<
      [pools: VecInput, min_amount_out: BigNumberish, recipient: IdentityInput],
      SwapOutputOutput
    >;

    swap_exact_output_multihop: InvokeFunction<
      [
        pools: VecInput,
        amount_out: BigNumberish,
        max_amount_in: BigNumberish,
        recipient: IdentityInput
      ],
      SwapOutputOutput
    >;

    null: InvokeFunction<[], void>;
  };
}
