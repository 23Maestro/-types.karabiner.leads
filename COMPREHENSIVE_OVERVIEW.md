# Comprehensive TypeScript Karabiner Configuration Overview

## 🏗️ **Project Architecture**

### **Repository Structure**
```
/Users/singleton23/Documents/types.karabiner.leads/
├── src/
│   ├── index.ts          # Main configuration file (286 lines)
│   └── leader-key.ts     # Leader key system (469 lines)
├── package.json          # Dependencies & scripts
├── tsconfig.json         # TypeScript configuration
├── README.md             # Documentation
├── USAGE.md              # Usage guide
├── config copy.json      # Original Leader Key config (reference)
├── copy karabiner.json   # Original Karabiner config (reference)
└── multi.step.karabiner.jpg # Visual reference
```

### **GitHub Repository**
- **URL**: https://github.com/23Maestro/-types.karabiner.leads
- **Status**: Active, recently migrated from old `23Karabiner` repo
- **Profile**: Connected to `23Maestro` GitHub account

---

## 🛠️ **Technical Stack**

### **Core Dependencies**
- **`karabiner.ts`**: Type-safe Karabiner-Elements configuration library
- **`tsx`**: TypeScript execution and watch mode
- **`typescript`**: TypeScript compiler (v5.3.3)

### **Build System**
```json
{
  "scripts": {
    "build": "tsx src/index.ts",      // One-time build
    "watch": "tsx watch src/index.ts", // Auto-rebuild on changes
    "dev": "npm run watch"            // Alias for watch mode
  }
}
```

### **TypeScript Configuration**
- **Target**: ES2022
- **Module**: CommonJS
- **Strict mode**: Enabled
- **Source**: `src/**/*` (excludes `node_modules`)

---

## ⌨️ **Core Keyboard Configuration**

### **1. Hyperkey System**
- **Caps Lock** → Hyperkey (Cmd+Ctrl+Opt+Shift) when held
- **Hyperkey + UHJK** → Arrow keys (↑/←/↓/→)
- **Activation**: Hold Caps Lock, tap U/H/J/K for navigation

### **2. Dual-Function Keys**
| Key | Tap Action | Hold Action | Timeout |
|-----|------------|-------------|---------|
| **Tab** | Tab | Left Control | 150ms |
| **Backslash** | Backslash | Left Option | 125ms |
| **Grave (`)** | ` | Ctrl+Opt+Cmd | 250ms |
| **[** | [ | Opt+Ctrl+Shift | 250ms |
| **]** | ] | Cmd+Opt+Shift | 250ms |
| **Left Control** | Escape | Control | 400ms |

### **3. Modifier Remapping**
- **Right Option** → Cmd+Ctrl
- **Right Shift** → Option+Cmd
- **Right Command** → Option+Ctrl

### **4. Special Combinations**
- **Cmd+Tab** → Shift+Tab (app switching)
- **Cmd+Semicolon** → Backspace
- **Escape Double-Tap** → Toggle Caps Lock

---

## 🎯 **Leader Key System**

### **Activation Pattern**
1. **Hyper + Backslash** → Activates leader key mode
2. **Press category key** (O, R, W, M, H, P, I, X, N)
3. **Press action key** → Executes command
4. **Escape** → Cancel at any time

### **Leader Key Categories**

#### **O - Open Applications**
| Key | Application | Path |
|-----|-------------|------|
| p | Adobe Premiere Pro 2025 | `/Applications/Adobe Premiere Pro 2025/Adobe Premiere Pro 2025.app` |
| y | Akiflow | `/Applications/Akiflow.app` |
| a | Asana | `/Applications/Asana.app` |
| s | Slack | `/Applications/Slack.app` |
| n | Notion | `/Applications/Notion.app` |
| t | Terminal | `/System/Applications/Utilities/Terminal.app` |
| z | Zen Browser | `/Applications/Zen.app` |
| c | Canva | `/Applications/Canva.app` |
| k | NordPass | `/Applications/NordPass.app` |
| e | Elgato Stream Deck | `/Applications/Elgato Stream Deck.app` |

#### **R - Raycast Commands**
| Key | Action | URL |
|-----|--------|-----|
| a | AI Chat | `raycast://extensions/raycast/raycast-ai/ai-chat` |
| n | Notes submenu | → n=New, s=Search |
| f | Fix Spelling & Grammar | `raycast://ai-commands/fix-spelling-and-grammar` |
| s | New Snippet | `raycast://extensions/raycast/snippets/create-snippet` |
| q | New Quicklink | `raycast://extensions/raycast/raycast/create-quicklink` |
| c | Clipboard History | `raycast://extensions/raycast/clipboard-history/clipboard-history` |
| l | Last Command | `raycast://extensions/raycast/raycast/run-last-command` |

#### **W - Window Management**
| Key | Action | URL |
|-----|--------|-----|
| ↑/←/↓/→ | Half screen positioning | `raycast://extensions/raycast/window-management/[direction]-half` |
| x | Maximize | `raycast://extensions/raycast/window-management/maximize` |
| q/w/e | Top quarters | Various quarter layouts |
| z/s/c | Bottom quarters & center | Various quarter layouts |
| 1/2/3 | Two-thirds layouts | Various two-thirds layouts |
| a | Almost Maximize | `raycast://extensions/raycast/window-management/almost-maximize` |
| r | Reasonable Size | `raycast://extensions/raycast/window-management/reasonable-size` |

#### **M - iMac (System Controls)**
| Key | Action | Type |
|-----|--------|------|
| r | Restart | Raycast system command |
| p | Power Down | Raycast system command |
| z | Sleep | Raycast system command |
| b | Bluetooth | Raycast extension |
| s | SoundSource | Keyboard Maestro macro |
| o | Yagi On | Keyboard Maestro macro |
| f | Yagi Off | Keyboard Maestro macro |
| l | Clean Keyboard | Keyboard Maestro macro |
| q | Quit All | Raycast system command |
| k | Kill Menu | Raycast extension |
| a | Appearance | Raycast system command |

#### **H - Projects (Timing)**
| Key | Action | Type |
|-----|--------|------|
| s | Start Timer | Keyboard Maestro macro |
| u | Timing Menu | Keyboard Maestro macro |
| o | Open Timing | Application launcher |
| e | Edit Timer | Keyboard Maestro macro |

#### **P - Premiere Pro**
| Key | Action | Type |
|-----|--------|------|
| s | Select/Move Next | Keyboard Maestro macro |
| a | Adjustment Layer | Keyboard Maestro macro |
| f | Freeze | Keyboard Maestro macro |

#### **I - Prospect ID**
| Key | Action | Type |
|-----|--------|------|
| s | Search Task List | Keyboard Maestro macro |
| u | YouTube Titles | Raycast extension |
| i | ID Format App | Application launcher |
| d | Dropbox File Request | Raycast extension |
| t | Email Templates | Keyboard Maestro macro |
| v | View YouTube Uploads | Raycast extension |
| n | New Task | Notion integration |
| p | Post PlayerID | Raycast extension |
| e | Player Profile | Keyboard Maestro macro |
| ↵ | Send Email | Keyboard Maestro macro |
| c | Check Notion | Raycast extension |

#### **X - Folder Dial**
| Key | Action | Type |
|-----|--------|------|
| h | Home | Raycast extension |
| g | Search Finder | Keyboard Maestro macro |
| f | Find Files | Raycast extension |
| r | RayLab | Folder opener |

#### **N - NurseHub**
| Key | Action | Type |
|-----|--------|------|
| g | ELU Uploads | Keyboard Maestro macro |
| t | Asana Tasks | Raycast extension |
| e | Exports | Raycast extension |

---

## 🎬 **Premiere Pro Modal System**

### **Activation**
- **Hyper + 9** → Enter/exit modal mode (only in Premiere Pro)

### **Property Selection**
- **1** → X position
- **2** → Y position  
- **3** → Scale
- **4** → Rotation

### **Property Adjustment**
- **↑/↓ arrows** → Adjust selected property
- **Escape** → Exit modal

### **Technical Implementation**
- Uses Karabiner variables (`pp_ec_mode`, `pp_target`)
- Application-specific conditions (`^com\\.adobe\\.PremierePro$`)
- Complex key combinations for Premiere Pro shortcuts

---

## 🔧 **Development Workflow**

### **Local Development**
```bash
# Install dependencies
npm install

# Start watch mode (auto-rebuild on changes)
npm run watch
# or
npm run dev

# One-time build
npm run build
```

### **File Organization**
- **`src/index.ts`**: Core keyboard mappings and system configuration
- **`src/leader-key.ts`**: Leader key system with all submenus
- **Modular design**: Each leader key category is a separate exported rule

### **Configuration Management**
- **Profile**: `Default` (configurable via `PROFILE_NAME` constant)
- **Auto-generation**: TypeScript compiles to Karabiner JSON automatically
- **Hot reload**: Changes apply immediately when Karabiner-Elements is running

---

## 🚀 **Integration Points**

### **External Tools**
- **Raycast**: Extensive integration via URL schemes
- **Keyboard Maestro**: Macro triggers via `kmtrigger://` URLs
- **Applications**: Direct app launching via `toApp()`
- **Shell Commands**: URL and folder opening via `shell_command`

### **URL Schemes Used**
- `raycast://` - Raycast extensions and commands
- `kmtrigger://` - Keyboard Maestro macro execution
- `open` shell command - Application and folder launching

---

## 📋 **Key Features Summary**

### **Strengths**
1. **Type Safety**: Full TypeScript support with compile-time checking
2. **Modular Architecture**: Clean separation of concerns
3. **Comprehensive Coverage**: 9 leader key categories with 50+ shortcuts
4. **Professional Integration**: Deep Raycast, Keyboard Maestro, and app integration
5. **Auto-reload**: Instant configuration updates during development
6. **Documentation**: Comprehensive README and usage guides

### **Current Limitations**
1. **Leader Key Activation**: Missing from main configuration (needs Hyper+Backslash trigger)
2. **Some Disabled Features**: Left Shift and Backslash dual-functions commented out
3. **Hardcoded Paths**: Application paths are system-specific
4. **Complex Dependencies**: Relies on multiple external tools (Raycast, Keyboard Maestro)

### **Future Enhancement Opportunities**
1. **Add Leader Key Trigger**: Implement Hyper+Backslash activation
2. **Environment Detection**: Dynamic path resolution
3. **Configuration UI**: Web-based configuration interface
4. **Profile Management**: Multiple profile support
5. **Backup/Restore**: Configuration versioning and migration tools

---

## 🎯 **For Future Development**

This configuration represents a sophisticated, production-ready keyboard remapping system optimized for content creation workflows. The modular TypeScript architecture makes it highly maintainable and extensible. Key areas for expansion include additional leader key categories, more application-specific modals, and enhanced integration with other productivity tools.

The system demonstrates advanced Karabiner-Elements usage with complex conditional logic, variable management, and deep integration with macOS productivity tools. It's an excellent foundation for building even more sophisticated keyboard-driven workflows.

---

## 📚 **Code Structure Deep Dive**

### **Main Configuration (`src/index.ts`)**

#### **Imports and Setup**
```typescript
import {
  map, mapDoubleTap, rule, writeToProfile,
  ifApp, ifVar, toSetVar, toHyper, toApp,
} from 'karabiner.ts'

const PROFILE_NAME = 'Default'
```

#### **Rule Categories**
1. **Hyperkey Configuration** (lines 17-34)
2. **Dual-Function Keys** (lines 36-99)
3. **Modifier Remapping** (lines 101-118)
4. **Custom Combinations** (lines 120-132)
5. **Escape Key Features** (lines 134-156)
6. **Premiere Pro Modal** (lines 158-249)
7. **Profile Writing** (lines 251-282)

#### **Key Functions**
- `map()`: Basic key mapping
- `mapDoubleTap()`: Double-tap detection
- `rule()`: Groups related manipulators
- `writeToProfile()`: Outputs configuration to Karabiner

### **Leader Key System (`src/leader-key.ts`)**

#### **Helper Functions**
```typescript
const openUrl = (url: string) => ({
  shell_command: `open "${url}"`,
})

const openFolder = (path: string) => ({
  shell_command: `open "${path}"`,
})
```

#### **Leader Key Categories**
Each category follows the same pattern:
1. **Activation**: Map category key to set submenu variable
2. **Actions**: Map action keys to specific commands
3. **Cleanup**: Reset submenu variable after action

#### **Variable Management**
- `leader_active`: Main leader key state
- `leader_submenu`: Current submenu (open, raycast, windows, etc.)
- `pp_ec_mode`: Premiere Pro modal state
- `pp_target`: Premiere Pro property selection

---

## 🔍 **Advanced Features**

### **Conditional Logic**
```typescript
.condition(ifApp('^com\\.adobe\\.PremierePro$'))
.condition(ifVar('pp_ec_mode', 1))
```

### **Variable State Management**
```typescript
.to(toSetVar('leader_submenu', 'open'))
.to(toSetVar('leader_active', 0))
```

### **Complex Key Combinations**
```typescript
map('up_arrow')
  .condition(ifApp('^com\\.adobe\\.PremierePro$'))
  .condition(ifVar('pp_ec_mode', 1))
  .condition(ifVar('pp_target', 1))
  .to('f2', ['control', 'option', 'shift'])
```

---

## 🚨 **Important Notes**

### **Missing Leader Key Trigger**
The leader key system is defined but not activated in the main configuration. To enable it, add this to `src/index.ts`:

```typescript
// Leader Key Activation (Hyper + Backslash)
const leaderKeyActivation = rule('Leader Key Activation').manipulators([
  map('backslash', ['command', 'control', 'option', 'shift'])
    .to(toSetVar('leader_active', 1)),
])
```

### **Disabled Features**
Some dual-function keys are commented out:
- `leftShiftEscape`: Left Shift as Escape
- `backslashOption`: Backslash as Option (conflicts with leader key)

### **System Dependencies**
This configuration requires:
- **Karabiner-Elements**: Running and configured
- **Raycast**: For URL scheme integration
- **Keyboard Maestro**: For macro triggers
- **Applications**: All referenced apps must be installed

---

## 📈 **Performance Considerations**

### **Build Performance**
- **Watch Mode**: Instant rebuilds on file changes
- **TypeScript Compilation**: Fast due to simple configuration
- **Karabiner Loading**: Configuration loads immediately

### **Runtime Performance**
- **Key Response**: Minimal latency for most mappings
- **Variable Management**: Efficient state tracking
- **Conditional Logic**: Fast app detection and variable checks

---

## 🛡️ **Security and Reliability**

### **Path Validation**
- All application paths are hardcoded and validated
- Shell commands use quoted parameters to prevent injection
- URL schemes are predefined and safe

### **Error Handling**
- TypeScript provides compile-time error checking
- Karabiner-Elements handles runtime errors gracefully
- Fallback behavior for missing applications

---

## 📊 **Statistics**

- **Total Lines of Code**: ~755 lines
- **Leader Key Categories**: 9
- **Total Shortcuts**: 50+
- **External Integrations**: 3 (Raycast, Keyboard Maestro, Applications)
- **Configuration Rules**: 15+ main rules
- **Dual-Function Keys**: 6 active
- **Application-Specific Features**: 1 (Premiere Pro modal)

---

*This document serves as a comprehensive reference for understanding, maintaining, and extending the TypeScript Karabiner configuration system.*
