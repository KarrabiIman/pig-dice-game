# Pig Dice Game

A small front-end interview project that implements the classic Pig dice game with React, TypeScript, Tailwind CSS, and `useReducer`. The solution keeps the game rules in pure functions, keeps the reducer explicit, and keeps UI components focused on presentation.

## Project structure

```text
src/
  components/
    Controls.tsx
    DiceDisplay.tsx
    GameBoard.tsx
    PlayerCard.tsx
    StatusMessage.tsx
  game/
    gameLogic.ts
    gameReducer.ts
    gameTypes.ts
    initialState.ts
  test/
    gameLogic.test.ts
    gameReducer.test.ts
    setupTests.ts
  App.tsx
  index.css
  main.tsx
```

## Key design decisions

- `useReducer` models the game as explicit state transitions, which makes the flow easy to reason about in an interview.
- Core rules live in pure helper functions so they can be tested without rendering React components.
- UI components are intentionally small and presentation-focused to keep responsibilities clear.
- Tailwind is used for straightforward styling without introducing extra component libraries.

## Why `useReducer` instead of Zustand

This game has a small but stateful workflow with clear transitions: roll, hold, and reset. `useReducer` is enough for that scope, keeps the logic local to the feature, and makes each transition explicit in a single predictable place. Zustand would add another dependency and abstraction layer without solving a real problem for a small interview assignment.

## Accessibility considerations

- Semantic elements are used for headings, sections, buttons, and status text.
- Active player and winner states are communicated with text as well as styling.
- Buttons have visible focus states and clear labels.
- Color choices preserve contrast against the light background.
- Controls remain keyboard accessible with standard button behavior.

## Run locally

```bash
npm install
npm run dev
```

## Run tests

```bash
npm run test
```
