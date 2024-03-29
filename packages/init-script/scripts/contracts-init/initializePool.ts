import { bn, NativeAssetId } from 'fuels';

import type { PoolContractAbi, RouterContractAbi, TokenContractAbi } from '../../contracts';

const { TOKEN_AMOUNT, ETH_AMOUNT } = process.env;

export async function initializePool(
  routerContract: RouterContractAbi,
  tokenContract: TokenContractAbi,
  poolContract: PoolContractAbi,
  overrides: any
) {
  const wallet = tokenContract.wallet!;
  const tokenAmount = bn(TOKEN_AMOUNT || '0x44364C5BB');
  const ethAmount = bn(ETH_AMOUNT || '0xE8F272');
  const address = {
    value: wallet.address,
  };
  const tokenId = {
    value: tokenContract.id,
  };

  console.log('Minting tokens')
  await tokenContract.functions
    .mint()
    .txParams({
      ...overrides,
      variableOutputs: 1,
    })
    .call();

  console.log('Balances');
  console.log('ETH', await wallet.getBalance(NativeAssetId));
  console.log('Token', await wallet.getBalance(tokenContract.id.toB256()));

  if (ethAmount.gt(await wallet.getBalance(NativeAssetId))) {
    throw new Error('Insufficient ETH');
  }
  if (tokenAmount.gt(await wallet.getBalance(tokenContract.id.toB256()))) {
    throw new Error('Insufficient Tokens');
  }

  const startPoolInfo = await poolContract.functions.get_pool_info().get();
  console.log(startPoolInfo.value)

  if (startPoolInfo.value.lp_token_supply.gt(0)) {
    console.log('Pool already has liquidity, skipping');
    return
  }

  console.log('Initialize pool');

  const addLiq = await routerContract
    .multiCall([
      routerContract.functions.null().callParams({
        forward: [ethAmount, NativeAssetId],
      }),
      routerContract.functions.null().callParams({
        forward: [tokenAmount, tokenContract.id.toB256()],
      }),
      routerContract.functions.add_liquidity(
        poolContract.id.toB256(), // pool
        ethAmount, // amount_a_desired
        tokenAmount, // amount_b_desired
        0, // amount_a_min
        0, // amount_b_min
        { Address: { value: wallet.address.toB256() } }, // recipient
      ),
    ])
    .txParams({
      ...overrides,
      variableOutputs: 3,
      gasLimit: 100_000_000,
    })
    .addContracts([
      poolContract.id,
    ])
    .call();

  console.log(`Added liquidity (${addLiq.transactionId}`);

  const poolInfo = await poolContract.functions.get_pool_info().get();
  console.log(poolInfo.value);

  console.log('Running test swap');
}
