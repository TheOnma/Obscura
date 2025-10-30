import { Connection, PublicKey } from '@solana/web3.js';

const HELIUS_DEVNET = process.env.HELIUS_RPC || 'https://devnet.helius-rpc.com/?api-key=YOUR_KEY';
export const connection = new Connection(HELIUS_DEVNET, 'confirmed');

const PROGRAM_ID = new PublicKey(process.env.PROGRAM_ID || 'ReplaceWithYourID');

function parseLog(line: string) {
  // Very naive parse; replace with robust parser over time
  const amountMatch = line.match(/amount:(\d+)/);
  return { raw: line, amount: amountMatch ? Number(amountMatch[1]) : 0 } as any;
}

export function subscribeToEvents(callback: (event: any) => void) {
  const id = connection.onLogs(PROGRAM_ID, (logs) => {
    logs.logs.forEach((log) => {
      if (log.includes('WhaleTransferDetected')) callback({ type: 'whale', ...parseLog(log) });
      if (log.includes('SandwichDetected')) callback({ type: 'mev', ...parseLog(log) });
      if (log.includes('SmartMoneyFlow')) callback({ type: 'flow', ...parseLog(log) });
    });
  });
  return () => connection.removeOnLogsListener(id).catch(() => {});
}
