# Quick Figma Import Guide

## Method 1: Copy-Paste into Figma

1. Open Figma Desktop
2. Create a new file: "Obscura Live MVP"
3. Create 5 frames: 375x812px (iPhone 13)
4. Use the specs below to build each screen

## Method 2: Use Figma Variables

### Create Color Variables
- `Background`: #000000
- `Surface`: #1A1A1A
- `Card`: #333333
- `Text`: #FFFFFF
- `TextSecondary`: #888888
- `Primary`: #00FF88 (Green)
- `MEV`: #FF4D4F (Red)
- `Phantom`: #9333EA (Purple)

### Create Text Styles
- Heading 1: 32px, Bold, #FFFFFF
- Heading 2: 20px, Semibold, #FFFFFF
- Body: 16px, Regular, #FFFFFF
- Caption: 12px, Regular, #888888

## Screen 1: Splash (Quick Build)

**Rectangle (128x128)** → Center horizontally, Y=200
- Fill: Gradient or solid purple
- Name: "Logo"

**Text:** "Obscura Live"
- Style: Heading 1
- Position: Y = 368px (24px below logo)

**Text:** "Loading alpha…"
- Style: Caption
- Position: Y = 400px

**Button:** 280x48px
- Fill: #9333EA
- Border Radius: 12px
- Text: "Connect Phantom" (16px, White, Semibold)
- Position: Y = 692px (120px from bottom)

## Screen 2: Home

**Text:** "Top 5 Whales" (16px padding)

**Rectangle:** Full width - 32px, 280px height
- Fill: Transparent
- Name: "Chart Container"
- Add placeholder bars inside (green #00FF88)

**Text:** "Live"

**Rectangle List Items:** 343x56px each
- Fill: Transparent
- Text: "🐋 A1B2... → Destination 1,000,000 SOL"
- Repeat 5-10 times

**Tab Bar:** Bottom, 64px height
- Background: #1A1A1A
- 4 icons: Bar chart (Home), Bell (Alerts), Git merge (Flow), Lock (Pro)

## Screen 3: Alerts

**Text:** "MEV / hour"

**Rectangle:** Full width - 32px, 320px height
- Fill: #0A0A0A
- Add red line path inside (#FF4D4F, 3px stroke)

**Card:** 343px width, auto height
- Fill: #1A1A1A
- Border Radius: 12px
- Padding: 16px
- Content:
  - "⚠️ Sandwich Detected" (16px, white)
  - "Token: USDC" (14px, gray)
  - "2m ago" (12px, gray, right)

**Duplicate card 2-3 times**

## Screen 4: Flow

**Text:** "Smart Money Flow"

**Rectangle:** Full width - 32px, 360px height
- Fill: #0A0A0A
- Add Sankey paths (curved lines)
  - SOL → Jito (thick, green)
  - SOL → DEX (medium, blue)
  - DEX → Jito (thin, purple)

**Stats List:**
- "SOL → Jito: 10" (16px, numbers green)
- "SOL → DEX: 4"
- "DEX → Jito: 2"

## Screen 5: Pro

**Row Layout:**
- "Pro" (20px, left)
- Toggle switch (right)
  - Rectangle: 51x31px
  - Fill: Gray when off, Green when on
  - Rounded: 15.5px

**Rectangle:** Full width - 32px, 200px height
- Fill: #0A0A0A
- Add blur effect (70% opacity overlay)
- Same chart as Home inside

**Text:** "Go Pro $10/mo" (centered, below chart)
- Only visible when toggle is OFF

## Auto Layout Tips

- Use Auto Layout for lists (Direction: Vertical, Gap: 12px)
- Use Constraints: Left & Right for full-width elements
- Use Constraints: Center for centered elements
- Group related elements

## Export Assets

Select frames → Right-click → Export → 1x, 2x, 3x
Use for App Store screenshots and marketing materials.

