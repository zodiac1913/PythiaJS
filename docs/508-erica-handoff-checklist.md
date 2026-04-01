# PythiaJS 508 Pre-Test Handoff (For Erica)

Date: 2026-04-01  
Owner: RXJR Team  
App: PythiaJS (Bun + WebView shell + browser fallback)

## 1) Scope For This Review

Please run a preliminary Section 508 / WCAG 2.1 AA keyboard and screen reader pass on core workflows:

1. Open app in WebView mode.
2. Open app in browser URL mode.
3. Run query and review results.
4. Use Show History and history search.
5. Use autocomplete toggle and Ctrl+Space field selector flow.
6. Open and close all custom modals:
   - Add Connection
   - Connection Details
   - Save File
   - Table selector
   - Field selector

## 2) What Changed Recently

1. Custom window icon now loads in WebView host on Windows.
2. Added autocomplete toggle near Enter Query.
3. When autocomplete is OFF, automatic popups are disabled; Ctrl+Space still works.
4. Removed WASD key trapping from runtime selectors.
5. Arrow keys are the primary navigation path for selector overlays.
6. Fixed browser-mode lifecycle issue that caused Failed to fetch / history failures.
7. Shutdown beacon now only runs for WebView-hosted sessions.
8. Added local URL display bubble in bottom-left (matching version badge style).

## 3) Keyboard Expectations (Baseline)

Expected behaviors:

1. Tab and Shift+Tab move focus in a logical visible order.
2. Arrow keys navigate selectable option lists in overlays.
3. Enter confirms focused selection/action where documented.
4. Space toggles field selection in field selector.
5. Escape closes active modal/overlay.
6. Typing in search/text inputs does not get hijacked by modal navigation keys.

Explicitly verify these two regressions do not return:

1. Typing User in selector search must not trap s.
2. Show History must remain functional after page navigation/close/reopen in browser mode.

## 4) Screen Reader Checks (NVDA + JAWS)

Please validate announcements for:

1. Query editor label and helper text.
2. Progress text updates during query execution.
3. Query results container updates.
4. Modal open/close context and title announcement.
5. Form control labels in Add/Edit Connection.
6. History search suggestions and selection behavior.

## 5) Visual And Robustness Checks

1. Contrast check for custom UI layers:
   - Bottom badges (version + local URL)
   - Fallback banner
   - Overlay selector highlights
2. 200% zoom and 400% reflow (no clipped controls, no hidden critical actions).
3. Windows High Contrast mode quick pass.
4. Browser fallback URL remains reachable while app is active.

## 6) Test Script (Quick 10-15 Minutes)

1. Launch app.
2. Tab through top nav and workspace controls.
3. Enter query: SELECT * FROM [CORE].[User]
4. Run Query, inspect progress and results announcement.
5. Open Show History and select an item via keyboard.
6. Toggle autocomplete OFF and type query text:
   - Confirm no automatic autocomplete popup.
   - Press Ctrl+Space where fields are expected; selector still opens.
7. In table/field selector search boxes, type mixed text including letters w, a, s, d.
8. Open/close each modal with keyboard only (Tab/Shift+Tab/Escape/Enter).
9. Repeat in browser mode via local URL shown in bottom-left bubble.

## 7) Known Decisions

1. WASD support is intentionally disabled in runtime for now.
2. Arrow keys are the supported navigation alternative.
3. If WASD is requested later, it must be optional and must never intercept typing in text inputs.

## 8) Evidence To Capture For Formal 508 Queue

1. Pass/fail notes per workflow above.
2. AT used and versions (NVDA/JAWS, browser/runtime).
3. Screenshots for any blocked path.
4. Exact repro steps for any failure.
5. Suggested severity and remediation owner.

## 9) Candidate Follow-Ups (Only If Needed)

1. Add explicit on-screen keyboard help text inside each selector modal.
2. Add focus return-to-trigger behavior for all modal close paths.
3. Add consistent inline error-summary region for connection form validation.

---

Prepared for internal 508 pre-check before routing to centralized government accessibility review queue.
