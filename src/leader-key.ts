import { rule, map, ifVar, toSetVar, toApp } from 'karabiner.ts'


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
  // DISABLED: Activate "O" submenu - conflicts with direct Hyper+O
  // map('o')
  //   .condition(ifVar('leader_active', 1))
  //   .to(toSetVar('leader_submenu', 'open'))
  //   .to(toSetVar('leader_active', 0)),
  
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
// LEADER KEY: "M" - iMac (SYSTEM CONTROLS)
// =============================================================================

export const leaderKeyIMac = rule('Leader Key → M → iMac').manipulators([
  // Activate "M" submenu
  map('m')
    .condition(ifVar('leader_active', 1))
    .to(toSetVar('leader_submenu', 'imac'))
    .to(toSetVar('leader_active', 0)),
  
  map('r').condition(ifVar('leader_submenu', 'imac'))
    .to(openUrl('raycast://extensions/raycast/system/restart'))
    .to(toSetVar('leader_submenu', '')),
  
  map('p').condition(ifVar('leader_submenu', 'imac'))
    .to(openUrl('raycast://extensions/raycast/system/shut-down'))
    .to(toSetVar('leader_submenu', '')),
  
  map('z').condition(ifVar('leader_submenu', 'imac'))
    .to(openUrl('raycast://extensions/raycast/system/sleep'))
    .to(toSetVar('leader_submenu', '')),
  
  map('b').condition(ifVar('leader_submenu', 'imac'))
    .to(openUrl('raycast://extensions/VladCuciureanu/toothpick/manage-bluetooth-connections'))
    .to(toSetVar('leader_submenu', '')),
  
  map('s').condition(ifVar('leader_submenu', 'imac'))
    .to(openUrl('kmtrigger://macro=2E12E85D-08A2-4FA3-B75E-07D97471CC17'))
    .to(toSetVar('leader_submenu', '')),
  
  map('o').condition(ifVar('leader_submenu', 'imac'))
    .to(openUrl('kmtrigger://macro=451851AB-DFC9-4128-B385-F76D003E2EBF'))
    .to(toSetVar('leader_submenu', '')),
  
  map('f').condition(ifVar('leader_submenu', 'imac'))
    .to(openUrl('kmtrigger://macro=BC7F6237-712B-4175-B1CB-F21536764003'))
    .to(toSetVar('leader_submenu', '')),
  
  map('l').condition(ifVar('leader_submenu', 'imac'))
    .to(openUrl('kmtrigger://macro=01F19304-B684-443B-9E7F-2AD0E9B4BC83'))
    .to(toSetVar('leader_submenu', '')),
  
  map('q').condition(ifVar('leader_submenu', 'imac'))
    .to(openUrl('raycast://extensions/raycast/system/quit-all-apps'))
    .to(toSetVar('leader_submenu', '')),
  
  map('k').condition(ifVar('leader_submenu', 'imac'))
    .to(openUrl('raycast://extensions/rolandleth/kill-process/index'))
    .to(toSetVar('leader_submenu', '')),
  
  map('a').condition(ifVar('leader_submenu', 'imac'))
    .to(openUrl('raycast://extensions/raycast/system/toggle-system-appearance'))
    .to(toSetVar('leader_submenu', '')),
])

// =============================================================================
// LEADER KEY: "H" - PROJECTS (TIMING)
// =============================================================================

export const leaderKeyProjects = rule('Leader Key → H → Projects').manipulators([
  // Activate "H" submenu
  map('h')
    .condition(ifVar('leader_active', 1))
    .to(toSetVar('leader_submenu', 'projects'))
    .to(toSetVar('leader_active', 0)),
  
  map('s').condition(ifVar('leader_submenu', 'projects'))
    .to(openUrl('kmtrigger://macro=D763DC18-A280-43BF-85CD-4553D0CC112D'))
    .to(toSetVar('leader_submenu', '')),
  
  map('u').condition(ifVar('leader_submenu', 'projects'))
    .to(openUrl('kmtrigger://macro=851A9DB4-68F5-4D72-AAE7-0F07BBE92686'))
    .to(toSetVar('leader_submenu', '')),
  
  map('o').condition(ifVar('leader_submenu', 'projects'))
    .to(toApp('/Applications/Timing.app'))
    .to(toSetVar('leader_submenu', '')),
  
  map('e').condition(ifVar('leader_submenu', 'projects'))
    .to(openUrl('kmtrigger://macro=F546571A-E526-403F-BFC8-CC0BA8B40B32'))
    .to(toSetVar('leader_submenu', '')),
])

// =============================================================================
// LEADER KEY: "P" - PREMIERE PRO
// =============================================================================

export const leaderKeyPremiere = rule('Leader Key → P → Premiere Pro').manipulators([
  // Activate "P" submenu
  map('p')
    .condition(ifVar('leader_active', 1))
    .to(toSetVar('leader_submenu', 'premiere'))
    .to(toSetVar('leader_active', 0)),
  
  map('s').condition(ifVar('leader_submenu', 'premiere'))
    .to(openUrl('kmtrigger://macro=8E8C96B9-1504-4468-9FE6-287477A24E48'))
    .to(toSetVar('leader_submenu', '')),
  
  map('a').condition(ifVar('leader_submenu', 'premiere'))
    .to(openUrl('kmtrigger://macro=3B28DD84-E5E1-4C75-B022-7958D7C4466E'))
    .to(toSetVar('leader_submenu', '')),
  
  map('f').condition(ifVar('leader_submenu', 'premiere'))
    .to(openUrl('kmtrigger://macro=1E58B412-9880-4805-B7A9-E55771F31860'))
    .to(toSetVar('leader_submenu', '')),
])

// =============================================================================
// LEADER KEY: "I" - PROSPECT ID
// =============================================================================

export const leaderKeyProspectID = rule('Leader Key → I → Prospect ID').manipulators([
  // Activate "I" submenu
  map('i')
    .condition(ifVar('leader_active', 1))
    .to(toSetVar('leader_submenu', 'prospectid'))
    .to(toSetVar('leader_active', 0)),
  
  map('s').condition(ifVar('leader_submenu', 'prospectid'))
    .to(openUrl('kmtrigger://macro=73B3C9BF-67F9-4AB3-8EED-5795F0335359'))
    .to(toSetVar('leader_submenu', '')),
  
  map('u').condition(ifVar('leader_submenu', 'prospectid'))
    .to(openUrl('raycast://extensions/jerami_singleton/dropbox-folder-names/youtube-titles'))
    .to(toSetVar('leader_submenu', '')),
  
  map('i').condition(ifVar('leader_submenu', 'prospectid'))
    .to(toApp('/Applications/ID Format.app'))
    .to(toSetVar('leader_submenu', '')),
  
  map('d').condition(ifVar('leader_submenu', 'prospectid'))
    .to(openUrl('raycast://extensions/jerami_singleton/dropbox-folder-names/dropbox-folder-names'))
    .to(toSetVar('leader_submenu', '')),
  
  map('t').condition(ifVar('leader_submenu', 'prospectid'))
    .to(openUrl('kmtrigger://macro=AE7F0DAF-EEAD-4E13-8481-4DCF15110A03'))
    .to(toSetVar('leader_submenu', '')),
  
  map('v').condition(ifVar('leader_submenu', 'prospectid'))
    .to(openUrl('raycast://extensions/jerami_singleton/playerid-updates/list-prospect-id-uploads'))
    .to(toSetVar('leader_submenu', '')),
  
  map('n').condition(ifVar('leader_submenu', 'prospectid'))
    .to(openUrl('raycast://extensions/HenriChabrand/notion/create-database-page?launchContext=%7B%22defaults%22%3A%7B%22database%22%3A%2219f4c8bd-6c26-805b-9929-dfa8eb290a86%22%2C%22property%3A%3Aselect%3A%3Ay%255C%257De%22%3A%22_select_null_%22%2C%22property%3A%3Aselect%3A%3AE%257CPY%22%3A%22_select_null_%22%2C%22property%3A%3Astatus%3A%3A%253BjEz%22%3A%22a6fa905f-8576-42df-bf5f-3b62e42b49c6%22%2C%22property%3A%3Aselect%3A%3ACozl%22%3A%22_select_null_%22%2C%22property%3A%3Aselect%3A%3ABjQv%22%3A%22_select_null_%22%2C%22property%3A%3Amulti_select%3A%3AeY%253EE%22%3A%5B%5D%2C%22property%3A%3Apeople%3A%3AM%253B%2560o%22%3A%5B%5D%7D%2C%22visiblePropIds%22%3A%5B%22title%22%2C%22y%255C%257De%22%2C%22eY%253EE%22%2C%22IsP%253E%22%2C%22HBZF%22%2C%22E%257CPY%22%2C%22%253BjEz%22%5D%7D'))
    .to(toSetVar('leader_submenu', '')),
  
  map('p').condition(ifVar('leader_submenu', 'prospectid'))
    .to(openUrl('raycast://extensions/jerami_singleton/playerid-updates/new-playerid-video'))
    .to(toSetVar('leader_submenu', '')),
  
  map('e').condition(ifVar('leader_submenu', 'prospectid'))
    .to(openUrl('kmtrigger://macro=46493467-C508-441E-94F8-DE01A1222954'))
    .to(toSetVar('leader_submenu', '')),
  
  map('return_or_enter').condition(ifVar('leader_submenu', 'prospectid'))
    .to(openUrl('kmtrigger://macro=3E4D4026-75BE-4AB1-95BB-9C04CCAB2BA5'))
    .to(toSetVar('leader_submenu', '')),
  
  map('c').condition(ifVar('leader_submenu', 'prospectid'))
    .to(openUrl('raycast://extensions/notion/notion/search-page'))
    .to(toSetVar('leader_submenu', '')),
])

// =============================================================================
// LEADER KEY: "X" - X FOLDER DIAL
// =============================================================================

export const leaderKeyFolderDial = rule('Leader Key → X → Folder Dial').manipulators([
  // Activate "X" submenu
  map('x')
    .condition(ifVar('leader_active', 1))
    .to(toSetVar('leader_submenu', 'folders'))
    .to(toSetVar('leader_active', 0)),
  
  map('h').condition(ifVar('leader_submenu', 'folders'))
    .to(openUrl('raycast://extensions/timothy_boye/open-folders/listFolders'))
    .to(toSetVar('leader_submenu', '')),
  
  map('g').condition(ifVar('leader_submenu', 'folders'))
    .to(openUrl('kmtrigger://macro=CE9DACF7-4400-43CB-BD41-20C844E9E70F'))
    .to(toSetVar('leader_submenu', '')),
  
  map('f').condition(ifVar('leader_submenu', 'folders'))
    .to(openUrl('raycast://extensions/raycast/file-search/search-files'))
    .to(toSetVar('leader_submenu', '')),
  
  map('r').condition(ifVar('leader_submenu', 'folders'))
    .to(openFolder('/Users/singleton23/Raycast'))
    .to(toSetVar('leader_submenu', '')),
])

// =============================================================================
// LEADER KEY: "N" - NURSEHUB
// =============================================================================

export const leaderKeyNurseHub = rule('Leader Key → N → NurseHub').manipulators([
  // Activate "N" submenu
  map('n')
    .condition(ifVar('leader_active', 1))
    .to(toSetVar('leader_submenu', 'nursehub'))
    .to(toSetVar('leader_active', 0)),
  
  map('g').condition(ifVar('leader_submenu', 'nursehub'))
    .to(openUrl('kmtrigger://macro=77FD2C6F-02EF-4D77-A2AE-CFD3D3E6C7E6'))
    .to(toSetVar('leader_submenu', '')),
  
  map('t').condition(ifVar('leader_submenu', 'nursehub'))
    .to(openUrl('raycast://extensions/raycast/asana/my-tasks'))
    .to(toSetVar('leader_submenu', '')),
  
  map('e').condition(ifVar('leader_submenu', 'nursehub'))
    .to(openUrl('raycast://extensions/jerami_singleton/client-exports/nursehub-exports'))
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
  
  map('escape')
    .condition(ifVar('leader_submenu', 'imac'))
    .to(toSetVar('leader_submenu', '')),
  
  map('escape')
    .condition(ifVar('leader_submenu', 'projects'))
    .to(toSetVar('leader_submenu', '')),
  
  map('escape')
    .condition(ifVar('leader_submenu', 'premiere'))
    .to(toSetVar('leader_submenu', '')),
  
  map('escape')
    .condition(ifVar('leader_submenu', 'prospectid'))
    .to(toSetVar('leader_submenu', '')),
  
  map('escape')
    .condition(ifVar('leader_submenu', 'folders'))
    .to(toSetVar('leader_submenu', '')),
  
  map('escape')
    .condition(ifVar('leader_submenu', 'nursehub'))
    .to(toSetVar('leader_submenu', '')),
])
