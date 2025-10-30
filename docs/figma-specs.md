# Figma Design Specifications — Obscura Live

## Design System

### Colors
**Dark Theme (Primary)**
- Background: `#252525` (oklch(0.145 0 0)) - Pure black #000000
- Card/Surface: `#333333` (oklch(0.205 0 0))
- Text Primary: `#FFFFFF` (oklch(0.985 0 0))
- Text Secondary: `#888888` (oklch(0.708 0 0))
- Border: `rgba(255,255,255,0.1)`

**Brand Colors**
- Primary Green (Whale/Charts): `#00FF88`
- MEV Red: `#FF4D4F`
- Phantom Purple: `#AB9FF2` (or `#9333EA`)
- Accent Blue: `#3B82F6`

### Typography
- Font Family: SF Pro / System (iOS), Roboto (Android)
- Headings: 24px, 20px, 18px (Semibold/Bold)
- Body: 16px, 14px (Regular)
- Caption: 12px (Regular)

### Spacing
- Screen Padding: 16px
- Component Gap: 12px
- Section Gap: 24px
- Border Radius: 12px (cards), 8px (buttons)

### Components
- Button Height: 48px
- Tab Bar Height: 64px
- Status Bar: 44px (iOS), varies (Android)

---

## Screen 1: Splash

**Dimensions:** 375x812 (iPhone 13 Standard)

**Layout:**
```
┌─────────────────────┐
│                     │
│      (Logo)         │  ← Top 40% from top
│   Obscura Live      │  ← 24px, White, Bold
│                     │
│  Loading alpha…     │  ← 16px, Gray #888
│                     │
│                     │
│  [Connect Phantom]  │  ← 48px height, Purple bg
│                     │
└─────────────────────┘
```

**Elements:**
1. **Logo/Icon** (128x128px center)
   - Dark icon or abstract "O" shape
   - Position: Y = 200px from top

2. **Title** 
   - Text: "Obscura Live"
   - Size: 32px, Bold
   - Color: #FFFFFF
   - Position: 24px below logo

3. **Subtitle**
   - Text: "Loading alpha…"
   - Size: 16px, Regular
   - Color: #888888
   - Position: 16px below title

4. **Connect Button**
   - Background: #9333EA (Purple-600)
   - Text: "Connect Phantom" (white, 16px semibold)
   - Width: 280px, Height: 48px
   - Border Radius: 12px
   - Position: Center horizontally, 120px from bottom

**Background:** Pure black (#000000)

---

## Screen 2: Home (Whale Bar)

**Tab Bar Icons:** Bar chart, Notifications, Git merge, Lock (bottom)

**Layout:**
```
┌─────────────────────┐
│ Top 5 Whales        │ ← 20px, White, Semibold, 16px padding
│ ┌─────────────────┐ │
│ │   [VictoryBar]  │ │ ← Green bars (#00FF88)
│ │   Chart Area    │ │   280px height
│ └─────────────────┘ │
│ Live                │ ← 20px, White, Semibold
│ ┌─────────────────┐ │
│ │ 🐋 A1B2... → D  │ │ ← FlatList items
│ │    1,000,000 SOL │ │   16px text, gray #888
│ │ 🐋 C3D4... → E  │ │
│ │    500,000 SOL   │ │
│ │ ...              │ │
│ └─────────────────┘ │
└─────────────────────┘
│ [Home][Alerts][Flow][Pro] │ ← Tab bar
└──────────────────────────┘
```

**Components:**
1. **Header Section**
   - Title: "Top 5 Whales"
   - Padding: 16px horizontal, 16px top

2. **VictoryBar Chart**
   - Container: Full width minus 32px padding
   - Height: 280px
   - Background: Transparent
   - Bar Color: #00FF88
   - Data: Array of {wallet: "A1B2", amount: 1000000}

3. **Live List Section**
   - Title: "Live" (20px, 16px bottom margin)
   - FlatList with:
     - Icon: 🐋 emoji (24px)
     - Wallet: Truncated address (14px, white)
     - Arrow: →
     - Destination: String (14px, gray)
     - Amount: Number with commas (16px, green #00FF88)
   - Item Height: 56px
   - Separator: 1px rgba(255,255,255,0.1)

**Background:** #000000

---

## Screen 3: Alerts (MEV Line)

**Layout:**
```
┌─────────────────────┐
│ MEV / hour           │ ← 20px, White, Semibold, 16px padding
│ ┌─────────────────┐ │
│ │                 │ │
│ │ [VictoryLine]   │ │ ← Red line (#FF4D4F)
│ │    Chart        │ │   320px height
│ │                 │ │
│ └─────────────────┘ │
│ ┌─────────────────┐ │
│ │ ⚠️ Sandwich #1   │ │ ← Alert cards
│ │   Token: USDC   │ │   16px padding, gray bg
│ │   2m ago        │ │   Rounded 12px
│ └─────────────────┘ │
│ ┌─────────────────┐ │
│ │ ⚠️ Sandwich #2   │ │
│ │   Token: SOL    │ │
│ │   5m ago        │ │
│ └─────────────────┘ │
└─────────────────────┘
│ [Home][Alerts][Flow][Pro] │
└──────────────────────────┘
```

**Components:**
1. **Chart Section**
   - Title: "MEV / hour"
   - VictoryLine Chart
     - Container: Full width, 320px height
     - Line Color: #FF4D4F
     - Stroke Width: 3px
     - Grid: Subtle gray lines (rgba(255,255,255,0.05))

2. **Alert Cards** (ScrollView)
   - Background: #1A1A1A
   - Padding: 16px
   - Border Radius: 12px
   - Margin Bottom: 12px
   - Content:
     - Icon: ⚠️ (24px)
     - Title: "Sandwich Detected" (16px, white, semibold)
     - Token: "Token: USDC" (14px, gray)
     - Timestamp: "2m ago" (12px, gray, right-aligned)

**Background:** #000000

---

## Screen 4: Flow (Sankey)

**Layout:**
```
┌─────────────────────┐
│ Smart Money Flow    │ ← 20px, White, Semibold, 16px padding
│ ┌─────────────────┐ │
│ │                 │ │
│ │ [VictorySankey] │ │ ← Multi-color flows
│ │    Chart        │ │   360px height
│ │                 │ │
│ └─────────────────┘ │
│ ┌─────────────────┐ │
│ │ SOL → Jito: 10  │ │ ← Stats cards
│ │ SOL → DEX: 4    │ │   16px text, green
│ │ DEX → Jito: 2   │ │
│ └─────────────────┘ │
└─────────────────────┘
│ [Home][Alerts][Flow][Pro] │
└──────────────────────────┘
```

**Components:**
1. **Chart Section**
   - Title: "Smart Money Flow"
   - VictorySankey Chart
     - Container: Full width, 360px height
     - Colors: Green (#00FF88), Blue (#3B82F6), Purple (#9333EA)
     - Flow Width: Proportional to value

2. **Stats Section**
   - Container: 16px padding, transparent
   - Items:
     - Text: "SOL → Jito: 10" (16px, white)
     - Highlight numbers: Green #00FF88
     - Spacing: 8px between items

**Background:** #000000

---

## Screen 5: Pro (Toggle + Blur)

**Layout:**
```
┌─────────────────────┐
│ Pro        [Toggle] │ ← 20px, White, Flex row, 16px padding
│ ┌─────────────────┐ │
│ │  [Blur Overlay] │ │ ← 70% intensity dark blur
│ │                 │ │
│ │   [Chart]       │ │ ← Same VictoryBar as Home
│ │   (blurred)     │ │
│ │                 │ │
│ └─────────────────┘ │
│                     │
│  Go Pro $10/mo      │ ← 16px, White, Centered (when off)
│                     │
└─────────────────────┘
│ [Home][Alerts][Flow][Pro] │
└──────────────────────────┘
```

**Components:**
1. **Header**
   - Title: "Pro" (left)
   - Toggle Switch (right)
     - Active: #00FF88
     - Inactive: Gray #333
     - Size: 51x31px (iOS standard)

2. **Chart Container**
   - Same VictoryBar as Home screen
   - When Pro = OFF:
     - BlurView overlay on top (intensity 70, dark tint)
     - Overlay covers entire chart area
     - Z-index: 1 (above chart)

3. **Paywall Text**
   - Text: "Go Pro $10/mo"
   - Size: 16px, White
   - Position: 24px below chart, centered
   - Only visible when Pro = OFF

**States:**
- **Pro OFF:** Chart blurred + paywall text visible
- **Pro ON:** Chart clear, no paywall text

**Background:** #000000

---

## Component Library

### Button
- Default: 280x48px, Border radius 12px
- Primary: Purple #9333EA background, white text
- Secondary: Gray #333 background, white text

### Tab Bar
- Height: 64px (iOS), 56px (Android)
- Background: #1A1A1A
- Icon Size: 24px
- Active Icon: White
- Inactive Icon: #666666
- Label Size: 10px

### Card
- Background: #1A1A1A
- Padding: 16px
- Border Radius: 12px
- Border: 1px rgba(255,255,255,0.1) (optional)

### Chart Containers
- Background: Transparent or #0A0A0A
- Padding: 0
- Border Radius: 12px (optional)

---

## Export Specs

**Frames:**
- iPhone 13 (375x812) or iPhone 14 Pro Max (430x932)
- Dark mode only (for MVP)

**Assets:**
- Logo: 128x128px, PNG with transparency
- App Icon: 1024x1024px (for App Store)

**Prototyping:**
- Splash → Home: Tap "Connect Phantom" button
- Tab navigation: Bottom tab bar
- Pro toggle: Switch toggles blur overlay

---

## Notes for Implementation

1. **Victory Charts** may need custom styling to match exact colors
2. **Blur Effect** uses `expo-blur` with `intensity={70}` and `tint="dark"`
3. **Dark Mode** is default; no light mode for MVP
4. **Typography** uses system fonts for performance
5. **Spacing** uses 4px base unit (4, 8, 12, 16, 24, 32)
6. **Charts** should animate on data update (<2s per PRD)

