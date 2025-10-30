# Component Breakdown — Code ↔ Design Mapping

## Design to Code Reference

This document maps Figma designs to React Native components.

---

## Screen 1: Splash → `mobile/app/(tabs)/splash.tsx`

| Figma Element | React Native Component | File Location |
|--------------|----------------------|---------------|
| Logo (128x128) | `<Image>` or SVG | `assets/icon.png` (128x128) |
| "Obscura Live" title | `<Text className="text-2xl">` | Line 12 |
| "Loading alpha…" | `<Text className="text-white mb-8">` | Line 13 |
| Connect Phantom button | `<Pressable className="bg-purple-600">` | Line 15, `wallet.ts` |
| Background | `<View className="bg-black">` | Line 9 |

**Action:** Button calls `connectPhantom()` → navigates to `/(tabs)/`

---

## Screen 2: Home → `mobile/app/(tabs)/index.tsx`

| Figma Element | React Native Component | File Location |
|--------------|----------------------|---------------|
| "Top 5 Whales" header | `<Text className="text-xl">` | Line 11 |
| VictoryBar chart | `<WhaleChart data={whales} />` | Line 12, `ChartWrapper.tsx` |
| Chart container | `<View>` (280px height) | Auto-sized by Victory |
| "Live" header | `<Text className="text-xl mt-4">` | Line 16 |
| Live list items | `<FlatList>` with items | Lines 17-22 |
| 🐋 emoji | Inline text | Line 20 |
| Wallet address | `item.wallet` (truncated) | Line 20 |
| Amount (green) | `item.amount` (styled) | Line 20 |
| Tab bar | `<Tabs>` from `_layout.tsx` | Root layout |

**State:** `whales` array, `list` array
**Subscription:** `subscribeToEvents()` in `useEffect`

---

## Screen 3: Alerts → `mobile/app/(tabs)/alerts.tsx`

| Figma Element | React Native Component | File Location |
|--------------|----------------------|---------------|
| "MEV / hour" header | `<Text className="text-xl mb-4">` | Line 7 |
| VictoryLine chart | `<VictoryLine data={data} />` | Line 8 |
| Line color (red) | `style={{ data: { stroke: '#ff4d4f' } }}` | Line 8 |
| Alert cards | Not implemented in MVP yet | Add `<View>` with card style |
| ⚠️ icon | Text emoji or icon | Placeholder |
| Timestamp | `<Text>` small gray | Placeholder |

**Note:** Alert cards are placeholder in current code. Add:
```tsx
<View className="bg-[#1A1A1A] rounded-xl p-4 mb-3">
  <Text className="text-white text-base font-semibold">⚠️ Sandwich Detected</Text>
  <Text className="text-gray-400 text-xs">Token: USDC • 2m ago</Text>
</View>
```

---

## Screen 4: Flow → `mobile/app/(tabs)/flow.tsx`

| Figma Element | React Native Component | File Location |
|--------------|----------------------|---------------|
| "Smart Money Flow" header | `<Text className="text-xl mb-4">` | Line 8 |
| VictorySankey chart | `<VictorySankey data={{ links }} />` | Line 9 |
| Stats list | `<Text>` items | Lines 11-13 |
| Number highlight (green) | Inline styled text | Manual color |

**Data Structure:**
```tsx
const links = [
  { source: 'SOL', target: 'Jito', value: 10 },
  { source: 'SOL', target: 'DEX', value: 4 },
  { source: 'DEX', target: 'Jito', value: 2 },
];
```

---

## Screen 5: Pro → `mobile/app/(tabs)/pro.tsx`

| Figma Element | React Native Component | File Location |
|--------------|----------------------|---------------|
| "Pro" header | `<Text className="text-xl">` | Line 11 |
| Toggle switch | `<Switch value={pro} />` | Line 11 |
| Chart container | Same `<WhaleChart>` as Home | Line 17 |
| Blur overlay | `<BlurView intensity={70} />` | Line 18 |
| "Go Pro $10/mo" text | `<Text>` conditional | Line 21 |

**State:** `pro` boolean (line 8)
**Conditional:** Blur visible when `!pro`, text visible when `!pro`

---

## Reusable Components

### `mobile/components/ChartWrapper.tsx`

| Component | Victory Library | Usage |
|-----------|----------------|-------|
| `<WhaleChart>` | `VictoryBar` | Home & Pro screens |
| `<MevChart>` | `VictoryLine` | Alerts screen |
| `<FlowChart>` | `VictorySankey` | Flow screen |

**Styling:**
- Bar color: `#00ff88` (green)
- Line color: `#ff4d4f` (red)
- Sankey: Multi-color (config in data)

---

## Services

### `mobile/services/solana.ts`

| Function | Purpose | Returns |
|----------|---------|---------|
| `subscribeToEvents(callback)` | WebSocket logs subscription | Unsubscribe function |
| `connection.onLogs()` | Helius devnet log stream | Subscription ID |

**Event Types:**
- `{ type: 'whale', wallet, amount, destination }`
- `{ type: 'mev', token, tx_signature }`
- `{ type: 'flow', from_token, to_token, amount }`

### `mobile/services/wallet.ts`

| Function | Purpose |
|----------|---------|
| `connectPhantom()` | Deep link to Phantom app (MVP placeholder) |

### `mobile/services/notifications.ts`

| Function | Purpose |
|----------|---------|
| `registerForPushNotificationsAsync()` | Request permissions, get Expo push token |

---

## Styling (NativeWind/Tailwind)

All screens use Tailwind classes via NativeWind:

| Utility | Value | Usage |
|---------|-------|-------|
| `bg-black` | `#000000` | Background |
| `bg-[#1A1A1A]` | `#1A1A1A` | Cards |
| `text-white` | `#FFFFFF` | Primary text |
| `text-gray-400` | `#888888` | Secondary text |
| `bg-purple-600` | `#9333EA` | Phantom button |
| `rounded-xl` | `12px` | Border radius |

**Colors in Code:**
- Chart green: Hardcoded `#00ff88` in `ChartWrapper.tsx`
- MEV red: Hardcoded `#ff4d4f` in `alerts.tsx`
- Purple: `bg-purple-600` (Tailwind default)

---

## Navigation

### `mobile/app/(tabs)/_layout.tsx`

Tab structure:
1. `index.tsx` → Home (📊 icon)
2. `alerts.tsx` → Alerts (🔔 icon)
3. `flow.tsx` → Flow (🔀 icon)
4. `pro.tsx` → Pro (🔒 icon)

**Icons:** Using `@expo/vector-icons` Ionicons

---

## Assets Needed

1. **Logo/Icon:** `mobile/assets/icon.png` (1024x1024 for App Store, 128x128 for splash)
2. **Splash:** `mobile/assets/splash.png` (if not using default)
3. **Adaptive Icon:** `mobile/assets/adaptive-icon.png` (Android)

---

## Implementation Checklist

- [x] Splash screen with Phantom button
- [x] Home screen with VictoryBar
- [x] Alerts screen with VictoryLine
- [x] Flow screen with VictorySankey
- [x] Pro screen with toggle & blur
- [x] Tab navigation
- [x] Helius WebSocket subscription
- [ ] Alert cards UI (placeholders exist)
- [ ] Push notification integration (helper exists)
- [ ] Real Phantom Wallet Adapter (currently deep-link placeholder)
- [ ] Fake data simulation (50 events)

---

## Next Steps for Designers

1. **Export Icons:** Bar chart, bell, git-merge, lock (24x24px, SVG)
2. **Create Logo:** 128x128px PNG with transparency
3. **Chart Mockups:** Screenshot actual Victory charts from dev
4. **Asset Slices:** Export at 1x, 2x, 3x for all assets

---

## Notes

- All screens default to dark mode (`bg-black`)
- Charts auto-size to container; Victory handles responsive
- Tab bar height is 64px (iOS standard)
- Blur effect uses `expo-blur` with `intensity={70}` and `tint="dark"`

