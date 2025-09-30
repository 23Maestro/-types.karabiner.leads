# Karabiner.ts Configuration

Type-safe Karabiner-Elements configuration written in TypeScript.

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Build Configuration

```bash
npm run build
```

### Auto-Build (Watch Mode) ⚡

```bash
npm run watch
# or
npm run dev
```

This will automatically rebuild your Karabiner configuration whenever you save changes to `src/index.ts`.

## 📁 Project Structure

```
.
├── src/
│   └── index.ts          # Main configuration file
├── config copy.json      # Original Leader Key config (reference)
├── copy karabiner.json   # Original Karabiner config (reference)
├── package.json
└── tsconfig.json
```

## ✨ Current Features

### Hyperkey Configuration
- **Caps Lock** → Hyperkey (Cmd+Ctrl+Opt+Shift) when held
- **Hyperkey + UHJK** → Arrow keys

### Dual-Function Keys
- **Left Shift** → Escape when tapped, Shift when held
- **Tab** → Tab when tapped, Control when held
- **Backslash** → Backslash when tapped, Option when held
- **Grave Accent (`)** → ` when tapped, Ctrl+Opt+Cmd when held
- **[ (Open Bracket)** → [ when tapped, Opt+Ctrl+Shift when held
- **] (Close Bracket)** → ] when tapped, Cmd+Opt+Shift when held

### Modifier Remapping
- **Right Option** → Cmd+Ctrl
- **Right Shift** → Option+Cmd
- **Right Command** → Option+Ctrl

### Custom Combinations
- **Cmd+Tab** → Shift+Tab (for app switching)
- **Cmd+Semicolon** → Backspace

### Advanced Features
- **Left Control Double-Tap** → Toggle Caps Lock
- **Premiere Pro Modal** (Hyper+9):
  - 1 = X position, 2 = Y position, 3 = Scale, 4 = Rotation
  - Up/Down arrows adjust selected property
  - Escape to exit modal

### Leader Key System (Hyper+Space)

Press **Hyper+Space** to activate the leader key, then:

#### **O** - Open Applications
- `p` → Adobe Premiere Pro
- `y` → Akiflow
- `a` → Asana
- `s` → Slack
- `n` → Notion
- `t` → Terminal
- `z` → Zen Browser
- `c` → Canva
- `k` → NordPass
- `e` → Elgato Stream Deck

#### **R** - Raycast Commands
- `a` → AI Chat
- `n` → Notes submenu
  - `n` → New Note
  - `s` → Search Notes
- `f` → Fix Spelling & Grammar
- `s` → New Snippet
- `q` → New Quicklink
- `c` → Clipboard History
- `l` → Last Command

#### **W** - Window Management
- Arrow keys → Half screen positioning
- `x` → Maximize
- `q/w/e` → Top quarters
- `z/s/c` → Bottom quarters & center
- `1/2/3` → Two-thirds layouts
- `a` → Almost Maximize
- `r` → Reasonable Size

**Press Escape** at any time to cancel

## 🎯 Next Steps

- [x] Integrate Leader Key functionality
- [ ] Add more application-specific mappings
- [ ] Set up GitHub repository

## 📚 Resources

- [karabiner.ts Documentation](https://github.com/evan-liu/karabiner.ts)
- [Karabiner-Elements](https://karabiner-elements.pqrs.org/)

