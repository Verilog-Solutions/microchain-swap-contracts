/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Provider, BaseWalletLocked, AbstractAddress } from 'fuels';
import { Interface, Contract } from 'fuels';
import type { TokenContractAbi, TokenContractAbiInterface } from '../TokenContractAbi';
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
          name: 'AddressAlreadyMint',
          type: 0,
          typeArguments: null,
        },
        {
          name: 'CannotReinitialize',
          type: 0,
          typeArguments: null,
        },
        {
          name: 'MintIsClosed',
          type: 0,
          typeArguments: null,
        },
        {
          name: 'NotOwner',
          type: 0,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 3,
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
      typeId: 4,
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
      typeId: 5,
      type: 'u64',
      components: null,
      typeParameters: null,
    },
  ],
  functions: [
    {
      inputs: [
        {
          name: 'burn_amount',
          type: 5,
          typeArguments: null,
        },
      ],
      name: 'burn_coins',
      output: {
        name: '',
        type: 0,
        typeArguments: null,
      },
    },
    {
      inputs: [],
      name: 'get_balance',
      output: {
        name: '',
        type: 5,
        typeArguments: null,
      },
    },
    {
      inputs: [],
      name: 'get_mint_amount',
      output: {
        name: '',
        type: 5,
        typeArguments: null,
      },
    },
    {
      inputs: [],
      name: 'get_owner',
      output: {
        name: '',
        type: 3,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: 'asset_id',
          type: 4,
          typeArguments: null,
        },
      ],
      name: 'get_token_balance',
      output: {
        name: '',
        type: 5,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: 'mint_amount',
          type: 5,
          typeArguments: null,
        },
        {
          name: 'address',
          type: 3,
          typeArguments: null,
        },
      ],
      name: 'initialize',
      output: {
        name: '',
        type: 0,
        typeArguments: null,
      },
    },
    {
      inputs: [],
      name: 'mint',
      output: {
        name: '',
        type: 0,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: 'mint_amount',
          type: 5,
          typeArguments: null,
        },
      ],
      name: 'mint_coins',
      output: {
        name: '',
        type: 0,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: 'mint_amount',
          type: 5,
          typeArguments: null,
        },
      ],
      name: 'set_mint_amount',
      output: {
        name: '',
        type: 0,
        typeArguments: null,
      },
    },
    {
      inputs: [
        {
          name: 'coins',
          type: 5,
          typeArguments: null,
        },
        {
          name: 'address',
          type: 3,
          typeArguments: null,
        },
      ],
      name: 'transfer_coins',
      output: {
        name: '',
        type: 0,
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
        type: 2,
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
        type: 2,
        typeArguments: [],
      },
    },
    {
      logId: 6,
      loggedType: {
        name: '',
        type: 2,
        typeArguments: [],
      },
    },
  ],
};

export class TokenContractAbi__factory {
  static readonly abi = _abi;
  static createInterface(): TokenContractAbiInterface {
    return new Interface(_abi) as unknown as TokenContractAbiInterface;
  }
  static connect(
    id: string | AbstractAddress,
    walletOrProvider: BaseWalletLocked | Provider
  ): TokenContractAbi {
    return new Contract(id, _abi, walletOrProvider) as unknown as TokenContractAbi;
  }
}
