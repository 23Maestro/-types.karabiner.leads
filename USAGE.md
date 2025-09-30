# Karabiner.ts Usage Guide

## 🚀 Quick Start

### Auto-Build Mode (Recommended)
```bash
npm run watch
```
This runs in the background and automatically compiles your configuration whenever you save changes.

### One-Time Build
```bash
npm run build
```

## ⌨️ Keyboard Shortcuts Reference

### Hyperkey (Caps Lock)
- **Hold Caps Lock** = Hyperkey (⌃⌥⇧⌘)
- **Caps + U/H/J/K** = Arrow keys (↑/←/↓/→)

### Leader Key (Hyper + Backslash)

1. Press **Hyper + \\** to activate
2. Press a category key:

#### **O** - Open Applications
| Key | Application |
|-----|-------------|
| p   | Adobe Premiere Pro |
| y   | Akiflow |
| a   | Asana |
| s   | Slack |
| n   | Notion |
| t   | Terminal |
| z   | Zen Browser |
| c   | Canva |
| k   | NordPass |
| e   | Elgato Stream Deck |

#### **R** - Raycast
| Key | Action |
|-----|--------|
| a   | AI Chat |
| n   | Notes (then n=New, s=Search) |
| f   | Fix Spelling & Grammar |
| s   | New Snippet |
| q   | New Quicklink |
| c   | Clipboard History |
| l   | Last Command |

#### **W** - Window Management
| Key | Action |
|-----|--------|
| ↑/←/↓/→ | Half screen |
| x | Maximize |
| q/w/e | Top quarters |
| z/s/c | Bottom quarters & center |
| 1/2/3 | Two-thirds layouts |
| a | Almost Maximize |
| r | Reasonable Size |

**Escape** at any time to cancel

### Dual-Function Keys
- **Left Shift**: Tap = Escape, Hold = Shift
- **Tab**: Tap = Tab, Hold = Control
- **Backslash (\\)**: Tap = \\, Hold = Option
- **Grave (\`)**: Tap = \`, Hold = Ctrl+Opt+Cmd
- **[ (Open Bracket)**: Tap = [, Hold = Opt+Ctrl+Shift
- **] (Close Bracket)**: Tap = ], Hold = Cmd+Opt+Shift

### Right Side Modifiers
- **Right Option** → Cmd+Ctrl
- **Right Shift** → Option+Cmd  
- **Right Command** → Option+Ctrl

### Special Combos
- **Left Control Double-Tap** → Toggle Caps Lock
- **Cmd+Tab** → Shift+Tab (app switching)
- **Cmd+Semicolon** → Backspace

### Premiere Pro Modal (Hyper+9)
Only in Premiere Pro:
1. Press **Hyper+9** to enter modal
2. Press **1/2/3/4** to select property:
   - 1 = X position
   - 2 = Y position
   - 3 = Scale
   - 4 = Rotation
3. Use **↑/↓** to adjust selected property
4. Press **Escape** or **Hyper+9** again to exit

## 🛠 Customization

### Adding New Keybindings

Edit `src/index.ts` or `src/leader-key.ts`:

```typescript
// Example: Add a new app to Leader Key → O menu
map('d').condition(ifVar('leader_submenu', 'open'))
  .to(toApp('/Applications/YourApp.app'))
  .to(toSetVar('leader_submenu', ''))
```

The auto-build will pick up your changes instantly!

### Creating New Leader Key Sections

1. Add a new category in `src/leader-key.ts`
2. Export it
3. Import and add to `writeToProfile()` in `src/index.ts`

## 📝 Tips

1. **Karabiner must be running** for changes to take effect
2. **Check Karabiner-Elements logs** if something doesn't work
3. **Use Escape liberally** to exit any modal/submenu
4. **Variables persist** until manually cleared or overwritten

## 🐛 Troubleshooting

### Changes not applying?
- Check that watch mode is running: `npm run watch`
- Verify Karabiner-Elements is running
- Check the terminal for build errors

### App not opening?
- Verify the app path is correct
- Use `open -a "App Name"` in Terminal to test

### Conflicts with existing shortcuts?
- Check Karabiner-Elements EventViewer
- Review System Preferences → Keyboard → Shortcuts
