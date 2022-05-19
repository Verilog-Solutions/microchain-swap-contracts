/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Provider, Wallet } from 'fuels';
import { Interface, Contract } from 'fuels';
import type { TokenContractAbi, TokenContractAbiInterface } from '../TokenContractAbi';
const _abi = [
  {
    type: 'function',
    inputs: [
      {
        name: 'mint_amount',
        type: 'u64',
        components: null,
      },
    ],
    name: 'mint_coins',
    outputs: [
      {
        name: '',
        type: '()',
        components: null,
      },
    ],
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'burn_amount',
        type: 'u64',
        components: null,
      },
    ],
    name: 'burn_coins',
    outputs: [
      {
        name: '',
        type: '()',
        components: null,
      },
    ],
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'coins',
        type: 'u64',
        components: null,
      },
      {
        name: 'asset_id',
        type: 'struct ContractId',
        components: [
          {
            name: 'value',
            type: 'b256',
            components: null,
          },
        ],
      },
      {
        name: 'target',
        type: 'struct ContractId',
        components: [
          {
            name: 'value',
            type: 'b256',
            components: null,
          },
        ],
      },
    ],
    name: 'force_transfer_coins',
    outputs: [
      {
        name: '',
        type: '()',
        components: null,
      },
    ],
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'coins',
        type: 'u64',
        components: null,
      },
      {
        name: 'asset_id',
        type: 'struct ContractId',
        components: [
          {
            name: 'value',
            type: 'b256',
            components: null,
          },
        ],
      },
      {
        name: 'recipient',
        type: 'struct Address',
        components: [
          {
            name: 'value',
            type: 'b256',
            components: null,
          },
        ],
      },
    ],
    name: 'transfer_coins_to_output',
    outputs: [
      {
        name: '',
        type: '()',
        components: null,
      },
    ],
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'target',
        type: 'struct ContractId',
        components: [
          {
            name: 'value',
            type: 'b256',
            components: null,
          },
        ],
      },
      {
        name: 'asset_id',
        type: 'struct ContractId',
        components: [
          {
            name: 'value',
            type: 'b256',
            components: null,
          },
        ],
      },
    ],
    name: 'get_balance',
    outputs: [
      {
        name: '',
        type: 'u64',
        components: null,
      },
    ],
  },
];

export class TokenContractAbi__factory {
  static readonly abi = _abi;
  static createInterface(): TokenContractAbiInterface {
    return new Interface(_abi) as TokenContractAbiInterface;
  }
  static connect(id: string, walletOrProvider: Wallet | Provider): TokenContractAbi {
    return new Contract(id, _abi, walletOrProvider) as TokenContractAbi;
  }
}