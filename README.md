# Obscura Live

**See the chain. Stay unseen.** Obscura Live is a privacy-conscious, real-time Solana analytics assistant for degen traders and MEV researchers. The goal of this repo is to deliver a launch-ready product story that spans on-chain data capture, live mobile visualizations, and a lightweight marketing/web surface—all backed by reproducible scripts and docs.

---

## Product Narrative
- **Problem** — Live alpha on Solana is noisy, public, and farmed by bots. Users want signal without leaking their strategies.
- **Solution** — An on-device experience (Expo mobile app) that streams curated whale moves, MEV spikes, and “smart money” flows sourced from an Anchor program + Helius logs. Alerts arrive instantly, views stay local, and “Pro” mode teases monetization.
- **Audience** — 500k wallet-tracking degens plus ~10k full-time on-chain analysts who need faster situational awareness.
- **Demo Flow** — Scan QR → Expo → connect Phantom → watch whale bars animate → see MEV spike alert → inspect SOL→Jito flow → toggle Pro paywall.

---

## System Overview
| Surface | Purpose | Key Tech |
| --- | --- | --- |
| `programs/obscura-analytics` | Emits typed whale/MEV/flow events on-chain so we have a verifiable source of truth. | Anchor, Rust, Solana Devnet |
| `scripts/simulate_events.ts` | Fires 50 sample events so demo devices see live motion without waiting for real traffic. | Node, Anchor IDL, Solana RPC |
| `mobile/` | Expo + React Native client that renders charts, handles Phantom deep link, and subscribes to Helius logs. | Expo Router, NativeWind, Victory Native, Helius RPC |
| `webapp/` | Next.js marketing shell (currently a resources dashboard) where we’ll eventually host the landing page + docs. | Next.js 14, React Server Components, shadcn/ui |
| `docs/` | Narrative aides (deck outline, component mapping, Loom script, Figma specs) so judges/users grok the story fast. | Markdown |

Data edges:
1. Anchor program emits domain events (`WhaleTransferDetected`, `SandwichDetected`, `SmartMoneyFlow`).
2. Helius devnet RPC broadcasts those logs via WebSocket (`mobile/services/solana.ts`).
3. Mobile app charts update in real time and trigger push notifications (helper lives in `mobile/services/notifications.ts`).

---

## Feature Breakdown
- **Top 5 Whales** — VictoryBar chart + live list on the Home tab streams large transfers with context (wallet, amount, destination).
- **MEV Radar** — Alerts tab plots MEV/hour (VictoryLine) and will soon render card-style incident summaries.
- **Smart Money Flow** — Sankey (VictorySankey) highlights token routes like SOL → Jito or SOL → DEX.
- **Pro Paywall** — Blur overlay + toggle on the Pro tab prototypes a $10/mo tier; monetization copy + blur intensity live in `mobile/app/(tabs)/pro.tsx`.
- **Push + Wallet** — MVP deep-link to Phantom, plus Expo push-token helper for future alert delivery.
- **Docs-to-Code parity** — `docs/component-breakdown.md` maps every Figma element to the exact React Native component so designers/devs stay in sync.

---

## Repository Map
```
Obscura/
├── Anchor.toml               # Anchor + Solana config
├── programs/obscura-analytics# On-chain event emitter program
├── scripts/                  # Deploy + event simulation helpers
├── mobile/                   # Expo app (tabs: Home, Alerts, Flow, Pro)
├── webapp/                   # Next.js marketing site / dashboard starter
├── docs/                     # Pitch deck, component breakdown, Loom script
└── target/                   # Anchor build artifacts (IDL, keypairs, types)
```

---

## Getting Started
### Prereqs
- Node 18+, npm/pnpm
- Rust + Anchor CLI + Solana CLI (configured for devnet)
- Expo CLI (`npm i -g expo`)

### 1. Deploy/Update the Anchor Program
```bash
bash scripts/deploy.sh                    # builds + deploys to devnet
```
Update `Anchor.toml` (`[programs.devnet].obscura_analytics`) and `programs/obscura-analytics/src/lib.rs::declare_id!` with your new program id. Copy the id into any `.env` that needs it.

### 2. Seed Demo Data
```bash
PROGRAM_ID=<your_id> \
RPC_URL=https://api.devnet.solana.com \
node scripts/simulate_events.ts
```
Generates whale/MEV/flow events so charts have motion on demand.

### 3. Run the Mobile App
```bash
cd mobile
npm install
HELIUS_RPC=https://devnet.helius-rpc.com/?api-key=YOUR_KEY npm run start
```
Scan the QR with Expo Go. Splash → Connect Phantom → explore tabs.

### 4. (Optional) Web Landing Page
```bash
cd webapp
npm install
npm run dev
```
Serves the placeholder dashboard that will evolve into our marketing site + account explorer.

---

## Roadmap
- [ ] Alert cards (design spec in `docs/component-breakdown.md`)
- [ ] Real Phantom Wallet Adapter (replace deep link placeholder)
- [ ] 1-click push notification opt-in + MEV alert demo
- [ ] Flesh out `webapp/` with landing + account insights
- [ ] Expand `simulate_events.ts` to produce >50 varied scenarios

---

## License
MIT
