use anchor_lang::prelude::*;

declare_id!("");

#[program]
pub mod obscura_analytics {
    use super::*;

    pub fn emit_whale(
        ctx: Context<EmitEvent>,
        amount: u64,
        destination: String,
    ) -> Result<()> {
        emit!(WhaleTransferDetected {
            wallet: ctx.accounts.user.key(),
            amount,
            destination,
        });
        Ok(())
    }

    pub fn emit_mev(
        _ctx: Context<EmitEvent>,
        token: String,
        tx_signature: String,
    ) -> Result<()> {
        emit!(SandwichDetected { token, tx_signature });
        Ok(())
    }

    pub fn emit_flow(
        _ctx: Context<EmitEvent>,
        from_token: String,
        to_token: String,
        amount: u64,
    ) -> Result<()> {
        emit!(SmartMoneyFlow {
            from_token,
            to_token,
            amount,
        });
        Ok(())
    }
}

#[derive(Accounts)]
pub struct EmitEvent<'info> {
    #[account(mut)]
    pub user: Signer<'info>,
    #[account(init_if_needed, payer = user, space = 8 + 8)]
    pub state: Account<'info, AnalyticsState>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct AnalyticsState {
    pub last_event: u64,
}

#[event]
pub struct WhaleTransferDetected {
    pub wallet: Pubkey,
    pub amount: u64,
    pub destination: String,
}

#[event]
pub struct SandwichDetected {
    pub token: String,
    pub tx_signature: String,
}

#[event]
pub struct SmartMoneyFlow {
    pub from_token: String,
    pub to_token: String,
    pub amount: u64,
}
