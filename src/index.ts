import {
  map,
  rule,
  writeToProfile,
  ifApp,
  ifVar,
  toSetVar,
  toHyper,
} from 'karabiner.ts'


// Profile name - update this to match your Karabiner profile
const PROFILE_NAME = 'Default'

// =============================================================================
// HYPERKEY CONFIGURATION
// =============================================================================

// Caps Lock as Hyperkey (Cmd+Ctrl+Opt+Shift) when held, nothing when tapped
const capsLockAsHyperkey = rule('Caps Lock as Hyperkey').manipulators([
  map('caps_lock')
    .to('left_shift', ['left_command', 'left_control', 'left_option'])
    .toIfAlone('vk_none'),
])

// Hyperkey + UHJK to arrow keys
const hyperkeyArrows = rule('Caps Lock + UHJK to arrow keys').manipulators([
  map('u', ['command', 'control', 'option', 'shift']).to('up_arrow'),
  map('h', ['command', 'control', 'option', 'shift']).to('left_arrow'),
  map('j', ['command', 'control', 'option', 'shift']).to('down_arrow'),
  map('k', ['command', 'control', 'option', 'shift']).to('right_arrow'),
])

// =============================================================================
// DUAL-FUNCTION KEYS
// =============================================================================

// Left Shift: tap = Escape; hold = Shift
const leftShiftEscape = rule('Left Shift: tap = Escape; hold = Shift').manipulators([
  map('left_shift')
    .toIfAlone('escape')
    .toIfHeldDown('left_shift')
    .parameters({
      'basic.to_if_alone_timeout_milliseconds': 400,
      'basic.to_if_held_down_threshold_milliseconds': 80,
    }),
])

// Tab: tap = Tab; hold = Left Control
const tabControl = rule('Tab key: Tap for Tab, Hold for Left Control').manipulators([
  map('tab')
    .toIfAlone('tab')
    .toIfHeldDown('left_control', undefined, { lazy: true })
    .parameters({
      'basic.to_if_held_down_threshold_milliseconds': 150,
    }),
])

// Backslash: tap = Backslash; hold = Left Option
const backslashOption = rule('Backslash: Tap for Backslash, Hold for Left Option').manipulators([
  map('backslash')
    .toIfAlone('backslash')
    .toIfHeldDown('left_option', undefined, { lazy: true })
    .parameters({
      'basic.to_if_held_down_threshold_milliseconds': 125,
    }),
])

// Grave Accent (`/~): hold = Ctrl+Opt+Cmd; tap = `
const graveAccentModifier = rule('Grave Accent acts as Ctrl+Opt+Cmd when held').manipulators([
  map('grave_accent_and_tilde')
    .to('left_command', ['left_control', 'left_option'])
    .toIfAlone('grave_accent_and_tilde')
    .parameters({
      'basic.to_if_alone_timeout_milliseconds': 250,
    }),
])

// Open Bracket ([): hold = Opt+Ctrl+Shift; tap = [
const openBracketModifier = rule('Open Bracket as modifier chord').manipulators([
  map('open_bracket')
    .to('left_option', ['left_control', 'left_shift'])
    .toIfAlone('open_bracket')
    .parameters({
      'basic.to_if_alone_timeout_milliseconds': 250,
    }),
])

// Close Bracket (]): hold = Cmd+Opt+Shift; tap = ]
const closeBracketModifier = rule('Close Bracket as modifier chord').manipulators([
  map('close_bracket')
    .to('left_command', ['left_option', 'left_shift'])
    .toIfAlone('close_bracket')
    .parameters({
      'basic.to_if_alone_timeout_milliseconds': 250,
    }),
])

// =============================================================================
// MODIFIER KEY REMAPPING
// =============================================================================

// Right Option to Cmd+Ctrl
const rightOptionRemap = rule('Right Option to Cmd+Ctrl').manipulators([
  map('right_option').to('left_command', ['left_control']),
])

// Right Shift to Option+Cmd
const rightShiftRemap = rule('Right Shift to Option+Cmd').manipulators([
  map('right_shift').to('left_option', ['left_command']),
])

// Right Command to Option+Ctrl
const rightCommandRemap = rule('Right Command to Option+Ctrl').manipulators([
  map('right_command').to('left_option', ['left_control']),
])

// =============================================================================
// CUSTOM KEY COMBINATIONS
// =============================================================================

// Command + Tab -> Shift + Tab (for app switching)
const cmdTabToShiftTab = rule('Change Command + Tab to Shift + Tab').manipulators([
  map('tab', 'left_command').to('tab', ['left_shift']),
])

// Left Command + Semicolon -> Backspace
const cmdSemicolonBackspace = rule('left-command + semicolon to delete_or_backspace').manipulators([
  map('semicolon', 'left_command').to('delete_or_backspace'),
])

// =============================================================================
// DOUBLE-TAP CAPS LOCK TOGGLE
// =============================================================================

// Left Control: tap = Escape; double-tap = Caps Lock; hold = Control
const leftControlEscape = rule('Left Control: tap = Escape; double-tap = Caps Lock; hold = Control').manipulators([
  // Double-tap = Caps Lock toggle
  map('left_control')
    .condition(ifVar('lctrl_pressed', 1))
    .to(toSetVar('lctrl_pressed', 0))
    .to('caps_lock'),
  // Single tap = Escape, hold = Control
  map('left_control')
    .toIfAlone('escape')
    .toIfHeldDown('left_control')
    .toDelayedAction(
      toSetVar('lctrl_pressed', 1), // if invoked (double-tap detected)
      toSetVar('lctrl_pressed', 0)  // if canceled
    )
    .parameters({
      'basic.to_if_alone_timeout_milliseconds': 400,
      'basic.to_if_held_down_threshold_milliseconds': 80,
      'basic.to_delayed_action_delay_milliseconds': 250,
    }),
])

// =============================================================================
// PREMIERE PRO MODAL EDITING
// =============================================================================

// Premiere EC modal (Hyper+9): 1=X, 2=Y, 3=Scale, 4=Rotation
const premiereProModal = rule('Premiere EC modal (Hyper+9)').manipulators([
  // Activate modal mode (when not in mode)
  map('9', ['command', 'control', 'option', 'shift'])
    .condition(ifApp('^com\\.adobe\\.PremierePro$'))
    .condition(ifVar('pp_ec_mode', 0))
    .to(toSetVar('pp_ec_mode', 1)),
  
  // Deactivate modal mode (second Hyper+9 press)
  map('9', ['command', 'control', 'option', 'shift'])
    .condition(ifApp('^com\\.adobe\\.PremierePro$'))
    .condition(ifVar('pp_ec_mode', 1))
    .to(toSetVar('pp_ec_mode', 0))
    .to(toSetVar('pp_target', 0)),
  
  // In modal mode: select target property
  map('1')
    .condition(ifApp('^com\\.adobe\\.PremierePro$'))
    .condition(ifVar('pp_ec_mode', 1))
    .to(toSetVar('pp_target', 1)), // X
  map('2')
    .condition(ifApp('^com\\.adobe\\.PremierePro$'))
    .condition(ifVar('pp_ec_mode', 1))
    .to(toSetVar('pp_target', 2)), // Y
  map('3')
    .condition(ifApp('^com\\.adobe\\.PremierePro$'))
    .condition(ifVar('pp_ec_mode', 1))
    .to(toSetVar('pp_target', 3)), // Scale
  map('4')
    .condition(ifApp('^com\\.adobe\\.PremierePro$'))
    .condition(ifVar('pp_ec_mode', 1))
    .to(toSetVar('pp_target', 4)), // Rotation
  
  // X property controls (target 1)
  map('up_arrow')
    .condition(ifApp('^com\\.adobe\\.PremierePro$'))
    .condition(ifVar('pp_ec_mode', 1))
    .condition(ifVar('pp_target', 1))
    .to('f2', ['control', 'option', 'shift']),
  map('down_arrow')
    .condition(ifApp('^com\\.adobe\\.PremierePro$'))
    .condition(ifVar('pp_ec_mode', 1))
    .condition(ifVar('pp_target', 1))
    .to('f1', ['control', 'option', 'shift']),
  
  // Y property controls (target 2)
  map('up_arrow')
    .condition(ifApp('^com\\.adobe\\.PremierePro$'))
    .condition(ifVar('pp_ec_mode', 1))
    .condition(ifVar('pp_target', 2))
    .to('f2', ['option', 'shift', 'command']),
  map('down_arrow')
    .condition(ifApp('^com\\.adobe\\.PremierePro$'))
    .condition(ifVar('pp_ec_mode', 1))
    .condition(ifVar('pp_target', 2))
    .to('f1', ['option', 'shift', 'command']),
  
  // Scale property controls (target 3)
  map('up_arrow')
    .condition(ifApp('^com\\.adobe\\.PremierePro$'))
    .condition(ifVar('pp_ec_mode', 1))
    .condition(ifVar('pp_target', 3))
    .to('f4', ['control', 'option', 'shift']),
  map('down_arrow')
    .condition(ifApp('^com\\.adobe\\.PremierePro$'))
    .condition(ifVar('pp_ec_mode', 1))
    .condition(ifVar('pp_target', 3))
    .to('f3', ['control', 'option', 'shift']),
  
  // Rotation property controls (target 4)
  map('up_arrow')
    .condition(ifApp('^com\\.adobe\\.PremierePro$'))
    .condition(ifVar('pp_ec_mode', 1))
    .condition(ifVar('pp_target', 4))
    .to('f4', ['option', 'shift', 'command']),
  map('down_arrow')
    .condition(ifApp('^com\\.adobe\\.PremierePro$'))
    .condition(ifVar('pp_ec_mode', 1))
    .condition(ifVar('pp_target', 4))
    .to('f3', ['option', 'shift', 'command']),
  
  // Exit modal with Escape
  map('escape')
    .condition(ifApp('^com\\.adobe\\.PremierePro$'))
    .condition(ifVar('pp_ec_mode', 1))
    .to(toSetVar('pp_target', 0))
    .to(toSetVar('pp_ec_mode', 0)),
])

// =============================================================================
// WRITE CONFIGURATION TO PROFILE
// =============================================================================

writeToProfile(PROFILE_NAME, [
  // Hyperkey
  capsLockAsHyperkey,
  hyperkeyArrows,
  
  // Dual-function keys
  // leftShiftEscape, // Disabled: Left Shift is now just Shift
  tabControl,
  // backslashOption, // Disabled: Backslash used for Leader Key (Hyper+\)
  graveAccentModifier,
  openBracketModifier,
  closeBracketModifier,
  
  // Modifier remapping
  rightOptionRemap,
  rightShiftRemap,
  rightCommandRemap,
  
  // Custom combinations
  cmdTabToShiftTab,
  cmdSemicolonBackspace,
  
  // Advanced features
  leftControlEscape,
  premiereProModal,
  
])

console.log('✅ Karabiner configuration written successfully!')
console.log(`📝 Profile: ${PROFILE_NAME}`)
console.log('🔄 Auto-build is watching for changes...')