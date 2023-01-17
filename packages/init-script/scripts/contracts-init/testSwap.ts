import { bn, NativeAssetId } from 'fuels';

import type { PoolContractAbi, RouterContractAbi, TokenContractAbi } from '../../contracts';

const { TOKEN_AMOUNT, ETH_AMOUNT } = process.env;

export async function testSwap(
  routerContract: RouterContractAbi,
  tokenContract: TokenContractAbi,
  poolContract: PoolContractAbi,
  overrides: any
) {
  const wallet = tokenContract.wallet!;

  console.log('Running test swap');

  // const result = await routerContract.functions.null(
  const result = await routerContract.functions.swap_exact_input(
        poolContract.id.toB256(),
        0,
        { Address: { value: wallet.address.toHexString() } },
      )
      .callParams({
        forward: [10, NativeAssetId],
        gasLimit: 10_000_000,
      })
      .addContracts([poolContract.id])
      .txParams({
        variableOutputs: 2,
        gasLimit: 100_000_000,
        gasPrice: 1,
      })
      .call();
  console.log(`Swap successful on pool ${poolContract.id.toHexString()} (tx ${result.transactionId})`);
}
