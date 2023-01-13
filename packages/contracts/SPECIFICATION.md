Table of Contents
- [Overview](#overview)
- [Use Cases](#use-cases)
    - [Actions that users are able to perform](#actions-that-users-are-able-to-perform)
        - [Pool Contract](#pool-contract)
            - [Core Functionality](#core-functionality-1)
                - [`initialize()`](#initialize)
                - [`cache_vault_fees()`](#cache_vault_fees)
                - [`add_liquidity(recipient: Identity) -> u64`](#add_liquidity)
                - [`remove_liquidity(recipient: Identity) -> RemoveLiquidityInfo`](#remove_liquidity)
                - [`swap(amount_0_out: u64, amount_1_out: u64, recipient: Identity)`](#swap)
                - [`expand_twap_buffer(new_total_slots: u64)`](#expand_twap_buffer)
                - [`withdraw_protocol_fees(recipient: Identity) -> (u64, u64)`](#withdraw_protocol_fees)
            - [State Checks](#state-checks-1)
                - [`get_pool_info() -> PoolInfo`](#get_pool_info)
                - [`get_vault_info() -> VaultInfo`](#get_vault_info)
                - [`get_fee_info() -> FeeInfo`](#get_fee_info)
                - [`get_twap_info() -> TWAPInfo`](#get_twap_info)
                - [`get_tokens() -> (b256, b256)`](#get_tokens)
                - [`get_observation(slot: u64) -> Observation`](#get_observation)
        - [Router Contract](#router-contract)
            - [Core Functionality](#core-functionality-2)
            - [State Checks](#state-checks-2)
- [Sequence Diagram](#sequence-diagram)

# Overview

The Microchain exchange system is structured similar to Uniswap V2, with some adjustments to fit Fuel architecture and add additional functionality.

Similar to Uniswap, the core functionality is held in a series of "pool" contract. Each contract holds liquidity for two tokens,allows liquidity to be added and removed, and swaps to be performed. User-facing transactions are typically routed through a "router" contract, which adds additional safeguards for trades (such as slippage checks) and allows multi-pool trades.

Unlike Uniswap, which as a factory smart contract responsible for deploying new pools, Microchain uses a "registry" contract. Users deploy new pools independently, but must register them with the registry for them to become "official" pools.

Microchain adds a protocol-fee, which can decrease linearly over time. This fee is dictated by a "vault" contract, but is stored internally by each pool. The pool contract is responsible for collecting these fees, which can be withdrawn back to the vault contract.

### Pool Contract

The pool contract is the core contract that custodies liquidity and enables trading. The primary functions of this contract are swapping between 2 assets, as well as managing the liquidity provided in the pool. The pool contract also captures price observations, which can be used for a time-weighted average price oracle (TWAP).

This contract is derived from the [Uniswap V2 "Pair" contract](https://docs.uniswap.org/contracts/v2/reference/smart-contracts/pair).

#### Core Functionality 

##### `initialize()`

Called once by the contract deployer to initialize the vault value

**Requirements**

* If the contract has not yet been initialized 

Note: While the contract deployer may specify any vault, the "registry" contract will only accept
pools that are initialized with the specified vault.

##### `cache_vault_fees()`

Reads the fee value from the vault contract, and stores the fee values in this contract's state. This allows the contract to calculate the current vault swap fee, without needing to make an external contract call

##### `add_liquidity(recipient: Identity) -> u64`

Adds liquidity to the pool using the untracked assets held by the pool contract, and mints new LP tokens to the recipient

**Requirements**

* If additional amounts of both tokens have been sent to the pool

##### `remove_liquidity(recipient: Identity) -> RemoveLiquidityInfo`

Redeems LP tokens for the share of underlying assets in the pool

**Requirements**

* The sender has sent LP tokens to the contract
* The amount of both assets redeemed is greater than 0 (can't redeem dust amounts of LP tokens)

##### `swap(amount_0_out: u64, amount_1_out: u64, recipient: Identity)`

Swaps one asset in the pool for the other asset. The caller must transfer the input asset to the pool, setting an output value of "0" for the input asset, and the calculated output amount for the output asset. The output asset will be transferred to the recipient.

**Requirements**

* There is sufficient liquidity in the pool to facilitate the swap
* Sufficient input assets have been transferred to the pool
* The input & output amounts (with the fees factored) maintain the pool invariant balance

**Fees**

There are 2 fees charged in a given swap:

* A 0.3% fee for liquidity providers
* A variable fee for the protocol, which is defined by the vault

##### `expand_twap_buffer(new_total_slots: u64)`

Increases the size of the storage buffer for the time-weighted average price oracle (TWAP).

##### `withdraw_protocol_fees(recipient: Identity) -> (u64, u64)`

Withdraws the protocol fees that have been collected by the pool to a given address.

**Requirements**

The function is called by the vault.

#### State Checks

##### `get_pool_info() -> PoolInfo`

Returns the basic state of the pool: the amount of both tokens held in reserve, and the total supply of LP tokens.

##### `get_vault_info() -> VaultInfo`

Returns all information related to the vault:

* The address of the vault contract
* The current amount of un-withdrawn tokens collected as protocol fees
* Cached fee data (the current fee, change rate, and the last time updated)

##### `get_fee_info() -> FeeInfo`

Returns data related to the current protocol fee captured in trades (the current fee, change rate, and the last time updated).

##### `get_twap_info() -> TWAPInfo`

Returns metadata about the pool's time-weighted average price oracle (TWAP), such as the current and future size of the TWAP buffer, and the current position in the buffer queue.

##### `get_tokens() -> (b256, b256)`

Returns the addresses of the two tokens held by this pool.

*Note: The token addresses should always be sorted, where token0 > token1. This is not enforced by the exchange contract, but rather enforced by the registry contract.*

##### `get_observation(slot: u64) -> Observation`

Returns a single "observation", consisting of the cumulative token prices, as well as the timestamp of the observation. Two observations can be used to calculate the time-weighted average price over a period of time.

#### Router Contract

The router contract is the user-facing interface for interacting with the pool contracts. It allows simple swaps and multi-hop swaps, as well as the ability to add & remove liquidity from any pool.

##### `add_liquidity(pool: b256, amount_0_desired: u64, amount_1_desired: u64, amount_0_min: u64, amount_1_min: u64, recipient: Identity) -> LiquidityOutput;`

Adds liquidity to a given pool, and returns the minted LP tokens to the recipients. Specifies the required amount of tokens to deposit, as well as the minimum accepted tokens for slippage protection.

The function will return the amount of liquidity added to the pool, as well as the amount of LP tokens sent to the recipient.

_Note: since users can not include multiple assets in a contract call, they must transfer both tokens to the router contract before calling `add_liquidity`. Any leftover assets will be returned to the caller, **not** to the recipient._

**Requirements**

* The specified pool exists and conforms to the standard "Pool" interface
* Sufficient tokens have been sent to the router contract
* The reserve ratio of the pool has not changed sufficiently, causing the amount of input assets to drop below the specified minimums

##### `remove_liquidity(amount_0_min: u64, amount_1_min: u64, recipient: Identity) -> LiquidityOutput;`

Removes liquidity from a pool, accepting the LP token from that pool and returning the corresponding tokens to the recipient address.

**Requirements**

* The call includes LP tokens from the desired pool, which conforms to the standard "Pool" interface
* The reserve ratio of the pool has not changed sufficiently, causing the amount of removed assets to drop below the specified minimums

##### `swap_exact_input(pool: b256, min_amount_out: u64, recipient: Identity) -> SwapOutput;`

Swaps one token for another token, via a single pool. The input amount is specified by the amount of tokens included in the contract call. The output tokens are sent to the "recipient" address.

**Requirements**

* The call includes one of the two tokens included in the pool  
* The calculated output (based on input amount, pool reserves & fees) is greater than or equal to the specified minimum output

##### `swap_exact_output(pool: b256, amount_out: u64, max_amount_in: u64, recipient: Identity) -> SwapOutput;`

Swaps one token for another token, via a single pool. The output tokens are sent to the "recipient" address.

**Requirements**

* The call includes one of the two tokens included in the pool
* The calculated input (based on pool reserves & fees) is less than or equal to the specified minimum input 
* The calculated input (based on pool reserves & fees) is less than or equal to the amount of tokens included in the call

##### `swap_exact_input_multihop(pools: Vec<b256>, min_amount_out: u64, recipient: Identity) -> SwapOutput;`

Swaps one token for another token, via a multiple pools. The input amount is specified by the amount of tokens included in the contract call. The output tokens are sent to the "recipient" address.

**Requirements**

* The call includes one of the two tokens included in the first pool
* All subsequent pools include the output token of the previous pool (example, pool 0 holds token A & B, pool 1 holds tokens B & C, and pool 2 hols tokens C & D)
* The calculated output (based on input amount, pool reserves & fees) is greater than or equal to the specified minimum output

##### `swap_exact_output_multihop(pools: Vec<b256>, amount_out: u64, max_amount_in: u64, recipient: Identity) -> SwapOutput;`

Swaps one token for another token, via a multiple pools. The output tokens are sent to the "recipient" address.

**Requirements**

* The call includes one of the two tokens included in the first pool
* All subsequent pools include the output token of the previous pool (example, pool 0 holds token A & B, pool 1 holds tokens B & C, and pool 2 hols tokens C & D)
* The calculated input (based on output amount, pool reserves & fees) is less than or equal to the specified minimum input
* The calculated input (based on output amount, pool reserves & fees) is less than or equal to the amount of tokens included in the call

##### `null();`

This helper function does nothing.

Given that it is not possible to include more than one asset in a contract call, we must pre-transfer tokens. Having a stub function makes this easy.

### Registry Contract

Typical EVM AMMs such as Uniswap use a "factory pattern", where any user may create a new pool by calling a function on a factory contract. This factory contract ensures that certain criteria are met (such as only 1 pool per token pair, and an immutable set of code for the contract). These factories also act as registries of all pools that have been deployed.

However, Fuel does not support this "factory pattern". Instead, users wishing to create a new pool will send a simple contract deployment transaction to create the pool. A "registry" contract stores the "official" list of poolsa, and enforces certain guidelines (described in the `add_pool_contract` section).

#### Core Functionality

#### `initialize(template_pool_id: b256)`

Initializes the registry by storing the code hash of a pool and the pool's vault address. All pools that are added to the registry must have matching code hashes and vault addresses.

**Requirements**

* The contract has not yet been initialized

#### `add_pool_contract(pool_id: b256)`

Stores a new pool in the registry.

**Requirements**

* The contract code of the pool matches the contract passed to the `initialize` function
* The address of `token0` in the pool is less than the address of `token1` in the pool
* No pools have been added to the registry with the pairing of token0 & token1.
* The pool's LP token supply is 0, meaning the pool hasn't yet been initialized

#### `get_pool_contract(token_a: b256, token_b: b256) -> Option<b256>`

Returns the address of the registered pool for two given tokens. The order of tokens passed to this function doesn't matter. Will return `None` if no registered pool matches the two tokens.

#### `is_pool(addr: b256) -> bool`

Returns `true` if the provided address is a registered pool, otherwise returns `false`.

#### `pool_contract_root() -> b256`

The "code root" of the pool contract passed as a template to `initialize`. In other words, the hash of the contract code of a pool contract, which all new pools must match.

#### `vault() -> b256`

The address of the vault contract that all pools are expected to have.

### Vault Contract

All pools will collect a variable fee from every trade, which is allocated to the protocol treasury. The "vault" contract is responsible for setting the fee rates, and has the ability to withdraw collected fees from the pools.

#### Core Functionality

##### `get_fees() -> VaultFee`

Gets the current information regarding fee rates. This is composed of the following components:

* `start_time`: The timestamp that the fee was updated
* `start_fee`: The fee at the start time
* `change_rate`: The rate at which the fee should decrease every second.

These 3 values allow the fee to decrease linearly over time.

The unit for fees is 1,000,000 = 100%. So for example, a start_fee of 10,000 means that the starting fee is 1%.

##### `set_fees(start_fee: u16, change_rate: u16)`

Updates the fee and the rate at which the fee changes.

**Requirements**

* Must be called by the vault administrator. If not administrator is set, this function will set the administrator role.

##### `claim_fees(pool: b256)`

Claims fees from a pool contract, to the vault contract.

This can be called by any account, to any pool.

##### `withdraw(recipient: Identity, token: b256) -> u64`

Withdraws the full balance of a token, to the provided recipient.

**Requirements**

* Must be called by the vault administrator.
