import { Connection, Keypair, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';

const RPC = process.env.RPC_URL || 'https://api.devnet.solana.com';
const connection = new Connection(RPC, 'confirmed');

const PROGRAM_ID = new PublicKey(process.env.PROGRAM_ID || 'ReplaceWithYourID');

async function simulate() {
  for (let i = 0; i < 50; i++) {
    const payer = Keypair.generate();
    const to = Keypair.generate().publicKey;

    const transferIx = SystemProgram.transfer({
      fromPubkey: payer.publicKey,
      toPubkey: to,
      lamports: 100_000 + i * 10_000,
    });

    const tx = new Transaction().add(transferIx);
    try {
      await connection.requestAirdrop(payer.publicKey, 1_000_000_000);
      await new Promise((r) => setTimeout(r, 1500));
      const sig = await connection.sendTransaction(tx, [payer]);
      console.log(`Event ${i} sent: ${sig}`);
    } catch (e) {
      console.error(`Failed at ${i}`, e);
    }
    await new Promise((r) => setTimeout(r, 1000));
  }
}

simulate();
