/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Provider, BaseWalletLocked, AbstractAddress } from 'fuels';
import { Interface, Contract } from 'fuels';
import type { RouterContractAbi, RouterContractAbiInterface } from '../RouterContractAbi';
const _abi = {
  types: [
    {
      typeId: 0,
      type: '()',
      components: [],
      typeParameters: null,
    },
    {
      typeId: 1,
      type: 'b256',
      components: null,
      typeParameters: null,
    },
    {
      typeId: 2,
      type: 'enum Error',
      components: [
        {
          name: 'InsufficentReserves',
          type: 0,
          typeArguments: null,
        },
        {
          name: 'InsufficentAmount',
          type: 0,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 3,
      type: 'enum Error',
      components: [
        {
          name: 'InsufficentOutput',
          type: 0,
          typeArguments: null,
        },
        {
          name: 'ExcessiveInput',
          type: 0,
          typeArguments: null,
        },
        {
          name: 'InsufficentToken0',
          type: 0,
          typeArguments: null,
        },
        {
          name: 'InsufficentToken1',
          type: 0,
          typeArguments: null,
        },
        {
          name: 'InvalidToken',
          type: 0,
          typeArguments: null,
        },
        {
          name: 'InvalidInput',
          type: 0,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 4,
      type: 'enum Identity',
      components: [
        {
          name: 'Address',
          type: 7,
          typeArguments: null,
        },
        {
          name: 'ContractId',
          type: 8,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 5,
      type: 'generic T',
      components: null,
      typeParameters: null,
    },
    {
      typeId: 6,
      type: 'raw untyped ptr',
      components: null,
      typeParameters: null,
    },
    {
      typeId: 7,
      type: 'struct Address',
      components: [
        {
          name: 'value',
          type: 1,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 8,
      type: 'struct ContractId',
      components: [
        {
          name: 'value',
          type: 1,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 9,
      type: 'struct LiquidityOutput',
      components: [
        {
          name: 'amount_0',
          type: 13,
          typeArguments: null,
        },
        {
          name: 'amount_1',
          type: 13,
          typeArguments: null,
        },
        {
          name: 'liquidity',
          type: 13,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 10,
      type: 'struct RawVec',
      components: [
        {
          name: 'ptr',
          type: 6,
          typeArguments: null,
        },
        {
          name: 'cap',
          type: 13,
          typeArguments: null,
        },
      ],
      typeParameters: [5],
    },
    {
      typeId: 11,
      type: 'struct SwapOutput',
      components: [
        {
          name: 'input_amount',
          type: 13,
          typeArguments: null,
        },
        {
          name: 'output_amount',
          type: 13,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 12,
      type: 'struct Vec',
      components: [
        {
          name: 'buf',
          type: 10,
          typeArguments: [
            {
              name: '',
              type: 5,
              typeArguments: null,
            },
          ],
        },
        {
          name: 'len',
          type: 13,
          typeArguments: null,
        },
      ],
      typeParameters: [5],
    },
    {
      typeId: 13,
      type: 'u64',
      components: null,
      typeParameters: null,
    },
  ],
  functions: [
    {
      inputs: [
        {
          name: 'pool_address',
          type: 1,
          typeArguments: null,
        },
        {
          name: 'amount_0_desired',
          type: 13,
          typeArguments: null,
        },
        {
          name: 'amount_1_desired',
          type: 13,
          typeArguments: null,
        },
        {
          name: 'amount_0_min',
          type: 13,
          typeArguments: null,
        },
        {
          name: 'amount_1_min',
          type: 13,
          typeArguments: null,
        },
        {
          name: 'recipient',
          type: 4,
          typeArguments: null,
        },
      ],
      name: 'add_liquidity',
      output: {
        name: '',
        type: 9,
        typeArguments: null,
      },
    },
    {
      inputs: [],
      name: 'null',
      output: {
        name: '',
        type: 0,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: 'amount_0_min',
          type: 13,
          typeArguments: null,
        },
        {
          name: 'amount_1_min',
          type: 13,
          typeArguments: null,
        },
        {
          name: 'recipient',
          type: 4,
          typeArguments: null,
        },
      ],
      name: 'remove_liquidity',
      output: {
        name: '',
        type: 9,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: 'pool_address',
          type: 1,
          typeArguments: null,
        },
        {
          name: 'min_amount_out',
          type: 13,
          typeArguments: null,
        },
        {
          name: 'recipient',
          type: 4,
          typeArguments: null,
        },
      ],
      name: 'swap_exact_input',
      output: {
        name: '',
        type: 11,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: 'pools',
          type: 12,
          typeArguments: [
            {
              name: '',
              type: 1,
              typeArguments: null,
            },
          ],
        },
        {
          name: 'min_amount_out',
          type: 13,
          typeArguments: null,
        },
        {
          name: 'recipient',
          type: 4,
          typeArguments: null,
        },
      ],
      name: 'swap_exact_input_multihop',
      output: {
        name: '',
        type: 11,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: 'pool_address',
          type: 1,
          typeArguments: null,
        },
        {
          name: 'amount_out',
          type: 13,
          typeArguments: null,
        },
        {
          name: 'max_amount_in',
          type: 13,
          typeArguments: null,
        },
        {
          name: 'recipient',
          type: 4,
          typeArguments: null,
        },
      ],
      name: 'swap_exact_output',
      output: {
        name: '',
        type: 11,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: 'pools',
          type: 12,
          typeArguments: [
            {
              name: '',
              type: 1,
              typeArguments: null,
            },
          ],
        },
        {
          name: 'amount_out',
          type: 13,
          typeArguments: null,
        },
        {
          name: 'max_amount_in',
          type: 13,
          typeArguments: null,
        },
        {
          name: 'recipient',
          type: 4,
          typeArguments: null,
        },
      ],
      name: 'swap_exact_output_multihop',
      output: {
        name: '',
        type: 11,
        typeArguments: null,
      },
    },
  ],
  loggedTypes: [
    {
      logId: 0,
      loggedType: {
        name: '',
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 1,
      loggedType: {
        name: '',
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 2,
      loggedType: {
        name: '',
        type: 3,
        typeArguments: [],
      },
    },
    {
      logId: 3,
      loggedType: {
        name: '',
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 4,
      loggedType: {
        name: '',
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 5,
      loggedType: {
        name: '',
        type: 3,
        typeArguments: [],
      },
    },
    {
      logId: 6,
      loggedType: {
        name: '',
        type: 3,
        typeArguments: [],
      },
    },
    {
      logId: 7,
      loggedType: {
        name: '',
        type: 3,
        typeArguments: [],
      },
    },
    {
      logId: 8,
      loggedType: {
        name: '',
        type: 3,
        typeArguments: [],
      },
    },
    {
      logId: 9,
      loggedType: {
        name: '',
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 10,
      loggedType: {
        name: '',
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 11,
      loggedType: {
        name: '',
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 12,
      loggedType: {
        name: '',
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 13,
      loggedType: {
        name: '',
        type: 3,
        typeArguments: [],
      },
    },
    {
      logId: 14,
      loggedType: {
        name: '',
        type: 3,
        typeArguments: [],
      },
    },
    {
      logId: 15,
      loggedType: {
        name: '',
        type: 3,
        typeArguments: [],
      },
    },
    {
      logId: 16,
      loggedType: {
        name: '',
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 17,
      loggedType: {
        name: '',
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 18,
      loggedType: {
        name: '',
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 19,
      loggedType: {
        name: '',
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 20,
      loggedType: {
        name: '',
        type: 3,
        typeArguments: [],
      },
    },
    {
      logId: 21,
      loggedType: {
        name: '',
        type: 3,
        typeArguments: [],
      },
    },
    {
      logId: 22,
      loggedType: {
        name: '',
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 23,
      loggedType: {
        name: '',
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 24,
      loggedType: {
        name: '',
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 25,
      loggedType: {
        name: '',
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 26,
      loggedType: {
        name: '',
        type: 3,
        typeArguments: [],
      },
    },
    {
      logId: 27,
      loggedType: {
        name: '',
        type: 3,
        typeArguments: [],
      },
    },
    {
      logId: 28,
      loggedType: {
        name: '',
        type: 3,
        typeArguments: [],
      },
    },
    {
      logId: 29,
      loggedType: {
        name: '',
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 30,
      loggedType: {
        name: '',
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 31,
      loggedType: {
        name: '',
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 32,
      loggedType: {
        name: '',
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 33,
      loggedType: {
        name: '',
        type: 3,
        typeArguments: [],
      },
    },
  ],
  messagesTypes: [],
};

export class RouterContractAbi__factory {
  static readonly abi = _abi;
  static createInterface(): RouterContractAbiInterface {
    return new Interface(_abi) as unknown as RouterContractAbiInterface;
  }
  static connect(
    id: string | AbstractAddress,
    walletOrProvider: BaseWalletLocked | Provider
  ): RouterContractAbi {
    return new Contract(id, _abi, walletOrProvider) as unknown as RouterContractAbi;
  }
}
