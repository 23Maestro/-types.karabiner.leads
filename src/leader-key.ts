import { rule, map, ifVar, toSetVar, toApp } from 'karabiner.ts'

// Leader key trigger: Hyper + Space (or customize this)
const LEADER_KEY = map('spacebar', ['command', 'control', 'option', 'shift'])

// Helper to create shell command for opening URLs
const openUrl = (url: string) => ({
  shell_command: `open "${url}"`,
})

// Helper to create shell command for opening folders
const openFolder = (path: string) => ({
  shell_command: `open "${path}"`,
})

// =============================================================================
// LEADER KEY: "O" - OPEN APPLICATIONS
// =============================================================================

export const leaderKeyOpen = rule('Leader Key → O → Open Apps').manipulators([
  // Activate "O" submenu
  LEADER_KEY.condition(ifVar('leader_active', 0)).to(toSetVar('leader_active', 1)),
  
  map('o')
    .condition(ifVar('leader_active', 1))
    .to(toSetVar('leader_submenu', 'open'))
    .to(toSetVar('leader_active', 0)),
  
  // Apps in "O" menu
  map('p').condition(ifVar('leader_submenu', 'open'))
    .to(toApp('/Applications/Adobe Premiere Pro 2025/Adobe Premiere Pro 2025.app'))
    .to(toSetVar('leader_submenu', '')),
  
  map('y').condition(ifVar('leader_submenu', 'open'))
    .to(toApp('/Applications/Akiflow.app'))
    .to(toSetVar('leader_submenu', '')),
  
  map('a').condition(ifVar('leader_submenu', 'open'))
    .to(toApp('/Applications/Asana.app'))
    .to(toSetVar('leader_submenu', '')),
  
  map('s').condition(ifVar('leader_submenu', 'open'))
    .to(toApp('/Applications/Slack.app'))
    .to(toSetVar('leader_submenu', '')),
  
  map('n').condition(ifVar('leader_submenu', 'open'))
    .to(toApp('/Applications/Notion.app'))
    .to(toSetVar('leader_submenu', '')),
  
  map('t').condition(ifVar('leader_submenu', 'open'))
    .to(toApp('/System/Applications/Utilities/Terminal.app'))
    .to(toSetVar('leader_submenu', '')),
  
  map('z').condition(ifVar('leader_submenu', 'open'))
    .to(toApp('/Applications/Zen.app'))
    .to(toSetVar('leader_submenu', '')),
  
  map('c').condition(ifVar('leader_submenu', 'open'))
    .to(toApp('/Applications/Canva.app'))
    .to(toSetVar('leader_submenu', '')),
  
  map('k').condition(ifVar('leader_submenu', 'open'))
    .to(toApp('/Applications/NordPass.app'))
    .to(toSetVar('leader_submenu', '')),
  
  map('e').condition(ifVar('leader_submenu', 'open'))
    .to(toApp('/Applications/Elgato Stream Deck.app'))
    .to(toSetVar('leader_submenu', '')),
])

// =============================================================================
// LEADER KEY: "R" - RAYCAST
// =============================================================================

export const leaderKeyRaycast = rule('Leader Key → R → Raycast').manipulators([
  // Activate "R" submenu
  map('r')
    .condition(ifVar('leader_active', 1))
    .to(toSetVar('leader_submenu', 'raycast'))
    .to(toSetVar('leader_active', 0)),
  
  // AI Chat
  map('a').condition(ifVar('leader_submenu', 'raycast'))
    .to(openUrl('raycast://extensions/raycast/raycast-ai/ai-chat'))
    .to(toSetVar('leader_submenu', '')),
  
  // Notes submenu - activate with 'n'
  map('n').condition(ifVar('leader_submenu', 'raycast'))
    .to(toSetVar('leader_submenu', 'raycast_notes')),
  
  // Notes → New
  map('n').condition(ifVar('leader_submenu', 'raycast_notes'))
    .to(openUrl('raycast://extensions/raycast/raycast-notes/create-note'))
    .to(toSetVar('leader_submenu', '')),
  
  // Notes → Search
  map('s').condition(ifVar('leader_submenu', 'raycast_notes'))
    .to(openUrl('raycast://extensions/raycast/raycast-notes/search-notes'))
    .to(toSetVar('leader_submenu', '')),
  
  // Spell Check
  map('f').condition(ifVar('leader_submenu', 'raycast'))
    .to(openUrl('raycast://ai-commands/fix-spelling-and-grammar'))
    .to(toSetVar('leader_submenu', '')),
  
  // New Snippet
  map('s').condition(ifVar('leader_submenu', 'raycast'))
    .to(openUrl('raycast://extensions/raycast/snippets/create-snippet'))
    .to(toSetVar('leader_submenu', '')),
  
  // New Quicklink
  map('q').condition(ifVar('leader_submenu', 'raycast'))
    .to(openUrl('raycast://extensions/raycast/raycast/create-quicklink'))
    .to(toSetVar('leader_submenu', '')),
  
  // Clipboard History
  map('c').condition(ifVar('leader_submenu', 'raycast'))
    .to(openUrl('raycast://extensions/raycast/clipboard-history/clipboard-history'))
    .to(toSetVar('leader_submenu', '')),
  
  // Last Command
  map('l').condition(ifVar('leader_submenu', 'raycast'))
    .to(openUrl('raycast://extensions/raycast/raycast/run-last-command'))
    .to(toSetVar('leader_submenu', '')),
])

// =============================================================================
// LEADER KEY: "W" - WINDOW MANAGEMENT
// =============================================================================

export const leaderKeyWindows = rule('Leader Key → W → Window Management').manipulators([
  // Activate "W" submenu
  map('w')
    .condition(ifVar('leader_active', 1))
    .to(toSetVar('leader_submenu', 'windows'))
    .to(toSetVar('leader_active', 0)),
  
  // Arrow keys for halves
  map('up_arrow').condition(ifVar('leader_submenu', 'windows'))
    .to(openUrl('raycast://extensions/raycast/window-management/top-half'))
    .to(toSetVar('leader_submenu', '')),
  
  map('left_arrow').condition(ifVar('leader_submenu', 'windows'))
    .to(openUrl('raycast://extensions/raycast/window-management/left-half'))
    .to(toSetVar('leader_submenu', '')),
  
  map('down_arrow').condition(ifVar('leader_submenu', 'windows'))
    .to(openUrl('raycast://extensions/raycast/window-management/bottom-half'))
    .to(toSetVar('leader_submenu', '')),
  
  map('right_arrow').condition(ifVar('leader_submenu', 'windows'))
    .to(openUrl('raycast://extensions/raycast/window-management/right-half'))
    .to(toSetVar('leader_submenu', '')),
  
  // Maximize
  map('x').condition(ifVar('leader_submenu', 'windows'))
    .to(openUrl('raycast://extensions/raycast/window-management/maximize'))
    .to(toSetVar('leader_submenu', '')),
  
  // Quarters
  map('e').condition(ifVar('leader_submenu', 'windows'))
    .to(openUrl('raycast://extensions/raycast/window-management/top-right-quarter'))
    .to(toSetVar('leader_submenu', '')),
  
  map('w').condition(ifVar('leader_submenu', 'windows'))
    .to(openUrl('raycast://extensions/raycast/window-management/top-center-two-thirds'))
    .to(toSetVar('leader_submenu', '')),
  
  map('q').condition(ifVar('leader_submenu', 'windows'))
    .to(openUrl('raycast://extensions/raycast/window-management/top-left-quarter'))
    .to(toSetVar('leader_submenu', '')),
  
  map('c').condition(ifVar('leader_submenu', 'windows'))
    .to(openUrl('raycast://extensions/raycast/window-management/bottom-right-quarter'))
    .to(toSetVar('leader_submenu', '')),
  
  map('s').condition(ifVar('leader_submenu', 'windows'))
    .to(openUrl('raycast://extensions/raycast/window-management/center'))
    .to(toSetVar('leader_submenu', '')),
  
  map('z').condition(ifVar('leader_submenu', 'windows'))
    .to(openUrl('raycast://extensions/raycast/window-management/bottom-left-quarter'))
    .to(toSetVar('leader_submenu', '')),
  
  // Two-thirds
  map('3').condition(ifVar('leader_submenu', 'windows'))
    .to(openUrl('raycast://extensions/raycast/window-management/last-two-thirds'))
    .to(toSetVar('leader_submenu', '')),
  
  map('2').condition(ifVar('leader_submenu', 'windows'))
    .to(openUrl('raycast://extensions/raycast/window-management/center-two-thirds'))
    .to(toSetVar('leader_submenu', '')),
  
  map('1').condition(ifVar('leader_submenu', 'windows'))
    .to(openUrl('raycast://extensions/raycast/window-management/first-two-thirds'))
    .to(toSetVar('leader_submenu', '')),
  
  // Almost maximize & Reasonable
  map('a').condition(ifVar('leader_submenu', 'windows'))
    .to(openUrl('raycast://extensions/raycast/window-management/almost-maximize'))
    .to(toSetVar('leader_submenu', '')),
  
  map('r').condition(ifVar('leader_submenu', 'windows'))
    .to(openUrl('raycast://extensions/raycast/window-management/reasonable-size'))
    .to(toSetVar('leader_submenu', '')),
])

// =============================================================================
// LEADER KEY: ESCAPE TO CANCEL
// =============================================================================

export const leaderKeyEscape = rule('Leader Key → Escape to cancel').manipulators([
  map('escape')
    .condition(ifVar('leader_active', 1))
    .to(toSetVar('leader_active', 0)),
  
  map('escape')
    .condition(ifVar('leader_submenu', 'open'))
    .to(toSetVar('leader_submenu', '')),
  
  map('escape')
    .condition(ifVar('leader_submenu', 'raycast'))
    .to(toSetVar('leader_submenu', '')),
  
  map('escape')
    .condition(ifVar('leader_submenu', 'raycast_notes'))
    .to(toSetVar('leader_submenu', '')),
  
  map('escape')
    .condition(ifVar('leader_submenu', 'windows'))
    .to(toSetVar('leader_submenu', '')),
])
