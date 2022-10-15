/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Provider, Wallet, AbstractAddress } from 'fuels';
import { Interface, Contract } from 'fuels';
import type { ExchangeContractAbi, ExchangeContractAbiInterface } from '../ExchangeContractAbi';
const _abi = [
  {
    type: 'function',
    name: 'get_pool_info',
    inputs: [],
    outputs: [
      {
        type: 'struct PoolInfo',
        name: '',
        components: [
          {
            type: 'u64',
            name: 'token_0_reserve',
          },
          {
            type: 'u64',
            name: 'token_1_reserve',
          },
          {
            type: 'u64',
            name: 'lp_token_supply',
          },
        ],
      },
    ],
  },
  {
    type: 'function',
    name: 'get_add_liquidity_token_amount',
    inputs: [
      {
        type: 'u64',
        name: 'token_0_amount',
      },
    ],
    outputs: [
      {
        type: 'u64',
        name: '',
      },
    ],
  },
  {
    type: 'function',
    name: 'add_liquidity',
    inputs: [
      {
        type: 'enum Identity',
        name: 'recipient',
        components: [
          {
            type: 'struct Address',
            name: 'Address',
            components: [
              {
                type: 'b256',
                name: 'value',
              },
            ],
          },
          {
            type: 'struct ContractId',
            name: 'ContractId',
            components: [
              {
                type: 'b256',
                name: 'value',
              },
            ],
          },
        ],
      },
    ],
    outputs: [
      {
        type: 'u64',
        name: '',
      },
    ],
  },
  {
    type: 'function',
    name: 'remove_liquidity',
    inputs: [
      {
        type: 'enum Identity',
        name: 'recipient',
        components: [
          {
            type: 'struct Address',
            name: 'Address',
            components: [
              {
                type: 'b256',
                name: 'value',
              },
            ],
          },
          {
            type: 'struct ContractId',
            name: 'ContractId',
            components: [
              {
                type: 'b256',
                name: 'value',
              },
            ],
          },
        ],
      },
    ],
    outputs: [
      {
        type: 'struct RemoveLiquidityInfo',
        name: '',
        components: [
          {
            type: 'u64',
            name: 'token_0_amount',
          },
          {
            type: 'u64',
            name: 'token_1_amount',
          },
        ],
      },
    ],
  },
  {
    type: 'function',
    name: 'swap',
    inputs: [
      {
        type: 'u64',
        name: 'amount_0_out',
      },
      {
        type: 'u64',
        name: 'amount_1_out',
      },
      {
        type: 'enum Identity',
        name: 'recipient',
        components: [
          {
            type: 'struct Address',
            name: 'Address',
            components: [
              {
                type: 'b256',
                name: 'value',
              },
            ],
          },
          {
            type: 'struct ContractId',
            name: 'ContractId',
            components: [
              {
                type: 'b256',
                name: 'value',
              },
            ],
          },
        ],
      },
    ],
    outputs: [
      {
        type: '()',
        name: '',
        components: [],
      },
    ],
  },
  {
    type: 'function',
    name: 'get_tokens',
    inputs: [],
    outputs: [
      {
        type: '(_, _)',
        name: 'tokens',
        components: [
          {
            type: 'b256',
            name: '__tuple_element',
          },
          {
            type: 'b256',
            name: '__tuple_element',
          },
        ],
      },
    ],
  },
  {
    type: 'function',
    name: 'get_swap_with_minimum',
    inputs: [
      {
        type: 'u64',
        name: 'amount',
      },
    ],
    outputs: [
      {
        type: 'struct PreviewInfo',
        name: '',
        components: [
          {
            type: 'u64',
            name: 'amount',
          },
          {
            type: 'bool',
            name: 'has_liquidity',
          },
        ],
      },
    ],
  },
  {
    type: 'function',
    name: 'get_swap_with_maximum',
    inputs: [
      {
        type: 'u64',
        name: 'amount',
      },
    ],
    outputs: [
      {
        type: 'struct PreviewInfo',
        name: '',
        components: [
          {
            type: 'u64',
            name: 'amount',
          },
          {
            type: 'bool',
            name: 'has_liquidity',
          },
        ],
      },
    ],
  },
];

export class ExchangeContractAbi__factory {
  static readonly abi = _abi;
  static createInterface(): ExchangeContractAbiInterface {
    return new Interface(_abi) as unknown as ExchangeContractAbiInterface;
  }
  static connect(
    id: string | AbstractAddress,
    walletOrProvider: Wallet | Provider
  ): ExchangeContractAbi {
    return new Contract(id, _abi, walletOrProvider) as unknown as ExchangeContractAbi;
  }
}
