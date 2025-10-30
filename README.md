# Obscura Live

See the chain. Stay unseen.

## Stack
- Anchor (Rust) program: `obscura_analytics`
- Next.js template (existing)
- React Native + Expo (mobile): `mobile/`
- Helius Devnet RPC + logs subscription
- Victory Native charts

## Prerequisites
- Node 18+, pnpm/npm, Rust toolchain
- Anchor CLI, Solana CLI configured for devnet
- Expo CLI (`npm i -g expo`)

## 1) Anchor — Build & Deploy (Devnet)
Update program id in:
- `Anchor.toml` → `[programs.devnet].obscura_analytics`
- `programs/obscura-analytics/src/lib.rs` → `declare_id!("YOUR_ID")`

Then run:
```bash
bash scripts/deploy.sh
```
Copy the deployed program id into `.env` files as `PROGRAM_ID` if needed.

## 2) Simulate 50 Events
```bash
node scripts/simulate_events.ts
# or
tsx scripts/simulate_events.ts
```
Set env vars if needed:
```bash
export PROGRAM_ID=YOUR_ID
export RPC_URL=https://api.devnet.solana.com
```

## 3) Mobile App — Expo Go (QR)
In one terminal:
```bash
cd mobile
npm install
npm run start
```
Scan the QR code with the Expo Go app (iOS/Android). First screen is Splash → tap "Connect Phantom" → Tabs.

Configure Helius:
- Set `HELIUS_RPC` env when starting: `HELIUS_RPC=https://devnet.helius-rpc.com/?api-key=YOUR_KEY npm run start`

## Screens
- Splash: logo + Phantom button
- Home: VictoryBar (Top 5 Whales) + live list
- Alerts: VictoryLine (MEV/hour)
- Flow: VictorySankey (SOL → Jito)
- Pro: Toggle + blurred chart (paywall demo)

## Notifications (Expo)
`mobile/services/notifications.ts` contains a helper to request permissions and obtain an Expo push token.

## Phantom Connect (Mobile)
MVP deep-links to Phantom. Replace with Wallet Adapter Mobile for production secure signing.

## Hints
- Devnet only for MVP
- Use `subscribeToEvents` in `mobile/services/solana.ts` to stream logs and update charts

## Submission Links (fill in)
- Repo: github.com/yourname/obscura-live
- Video: 2-min Loom (QR → install → whale alert)
- Deck: `docs/deck-outline.md`
- QR: Expo Go QR from `npm run start`
- Explorer: Devnet program + 50 events

## License
MIT
