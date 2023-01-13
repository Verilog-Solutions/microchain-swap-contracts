contract;

use std::{
    constants::ZERO_B256,
    contract_id::ContractId,
    external::bytecode_root,
    option::Option,
    storage::StorageMap,
};
use pool_abi::Pool;

enum Error {
    UnorderedTokens: (),
    AlreadyInitialized: (),
    AlreadyRegistered: (),
    InvalidContractCode: (),
    InvalidVault: (),
    PoolInitialized: (),
}

abi PoolRegistry {
    #[storage(write, read)]
    fn initialize(template_pool_id: b256);
    // Add pool contract to the token
    #[storage(write, read)]
    fn add_pool_contract(pool_id: b256);
    // Get pool contract for desired token
    #[storage(read)]
    fn get_pool_contract(token_a: b256, token_b: b256) -> Option<b256>;
    #[storage(read)]
    fn is_pool(addr: b256) -> bool;
    #[storage(read)]
    fn pool_contract_root() -> b256;
    #[storage(read)]
    fn vault() -> b256;
}

storage {
    expected_contract_root: b256 = ZERO_B256,
    expected_vault: b256 = ZERO_B256,
    pools: StorageMap<(b256, b256), b256> = StorageMap {},
    is_pool: StorageMap<b256, bool> = StorageMap {},
}

impl PoolRegistry for Contract {
    #[storage(write, read)]
    fn initialize(template_pool_id: b256) {
        require(storage.expected_contract_root == ZERO_B256, Error::AlreadyInitialized);
        let root = bytecode_root(ContractId::from(template_pool_id));
        storage.expected_contract_root = root;

        let pool = abi(Pool, template_pool_id);
        let vault_info = pool.get_vault_info();
        storage.expected_vault = vault_info.vault;
    }

    #[storage(write, read)]
    fn add_pool_contract(pool_id: b256) {
        let pool = abi(Pool, pool_id);

        let root = bytecode_root(ContractId::from(pool_id));
        require(root == storage.expected_contract_root, Error::InvalidContractCode);

        let (token0, token1) = pool.get_tokens();
        require(token0 < token1, Error::UnorderedTokens);

        let existing_pool = storage.pools.get((token0, token1));
        require(existing_pool == b256::min(), Error::AlreadyRegistered);

        let pool_info = pool.get_pool_info();
        require(pool_info.lp_token_supply == 0, Error::PoolInitialized);

        let vault_info = pool.get_vault_info();
        require(vault_info.vault == storage.expected_vault, Error::InvalidVault);

        storage.pools.insert((token0, token1), pool_id);
        storage.is_pool.insert(pool_id, true);
    }

    #[storage(read)]
    fn get_pool_contract(token_a: b256, token_b: b256) -> Option<b256> {
        let (token0, token1) = if token_a < token_b {
            (token_a, token_b)
        } else {
            (token_b, token_a)
        };
        let pool = storage.pools.get((token0, token1));

        if (pool == b256::min()) {
            Option::None
        } else {
            Option::Some(pool)
        }
    }

    #[storage(read)]
    fn is_pool(addr: b256) -> bool {
        storage.is_pool.get(addr)
    }

    #[storage(read)]
    fn pool_contract_root() -> b256 {
        storage.expected_contract_root
    }

    #[storage(read)]
    fn vault() -> b256 {
        storage.expected_vault
    }
}
