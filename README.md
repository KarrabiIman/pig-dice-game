# Pig Dice Game

A small front-end project that implements the classic Pig dice game with React, TypeScript, Tailwind CSS, and `useReducer`. The code keeps game rules in pure functions, uses a reducer for explicit state transitions, and keeps UI components focused on presentation.

## Project structure

```text
public/
  favicon.svg

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
    gameSelectors.ts
    gameTypes.ts
    initialState.ts
    usePigGame.ts
  test/
    gameLogic.test.ts
    gameReducer.test.ts
    setupTests.ts
  App.tsx
  index.css
  main.tsx
```

## Key design decisions

- `usePigGame` provides a small application boundary around `useReducer`, dice generation, and action dispatching.
- `useReducer` models the game as explicit state transitions, which keeps the flow easy to reason about and maintain.
- Core rules live in pure helper functions so they can be tested without rendering React components.
- Simple selectors keep derived UI state out of components and make rendering logic easier to maintain.
- UI components are intentionally small and presentation-focused to keep responsibilities clear.
- Tailwind is used for straightforward styling without introducing extra component libraries.

## Why `useReducer` instead of Zustand

This game has a small but stateful workflow with clear transitions: roll, hold, and reset. `useReducer` is enough for that scope, keeps the logic local to the feature, and makes each transition explicit in a single predictable place. Zustand would add another dependency and abstraction layer without solving a real problem for a small app with local state.

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

## Quality checks

```bash
npm run test
npm run lint
npm run build
```

## Format code

```bash
npm run format
```
