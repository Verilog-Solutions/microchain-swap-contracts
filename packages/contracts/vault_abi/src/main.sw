library exchange_abi;

use std::{
    contract_id::ContractId,
    identity::Identity,
};

pub struct VaultFee {
    start_time: u32,
    start_fee: u16,
    current_fee: u16,
    change_rate: u16,
}

abi Vault {
    ////////////////////
    // Read only
    ////////////////////
    /// Get information on the liquidity pool.
    #[storage(read)]
    fn get_fees() -> VaultFee;

    #[storage(read, write)]
    fn set_fees(start_fee: u16, change_rate: u16);
    
    fn claim_fees(pool: b256);
    
    #[storage(read, write)]
    fn withdraw(recipient: Identity, token: b256) -> u64;
}
