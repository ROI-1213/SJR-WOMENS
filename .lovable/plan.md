

## Plan: Fix Academics Dropdown Misalignment on Scroll

### Problem
The dropdown uses `position: fixed` with a `top` value calculated once via a `ref` callback when the dropdown mounts. When the user scrolls while the dropdown is open, the navigation bar repositions (becomes sticky) but the dropdown's `top` value remains stale, causing misalignment.

### Solution
Close the active dropdown whenever the user scrolls. This is the simplest and most reliable fix — it prevents stale positioning entirely and is standard UX behavior for navigation menus.

### Changes

**File: `src/components/header/Navigation.tsx`**
- Add a `useEffect` that listens for `scroll` events
- When a scroll event fires and `activeDropdown` is set, call `setActiveDropdown('')` to close it
- This applies to all fixed-position dropdowns (Academics, Student Services, etc.)

### Files modified: 1
- `src/components/header/Navigation.tsx`

