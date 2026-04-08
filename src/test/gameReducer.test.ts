import { gameReducer } from '../game/gameReducer';
import { initialGameState } from '../game/initialState';
import type { GameState } from '../game/gameTypes';

describe('gameReducer', () => {
  it('handles ROLL_DICE by adding to the turn score for values 2 to 6', () => {
    const state = gameReducer(initialGameState, {
      type: 'ROLL_DICE',
      payload: { value: 6 },
    });

    expect(state.currentTurnScore).toBe(6);
    expect(state.currentDie).toBe(6);
  });

  it('handles ROLL_DICE with 1 by resetting the turn and switching player', () => {
    const currentState: GameState = {
      ...initialGameState,
      currentTurnScore: 8,
      activePlayer: 0,
    };

    const state = gameReducer(currentState, {
      type: 'ROLL_DICE',
      payload: { value: 1 },
    });

    expect(state.currentTurnScore).toBe(0);
    expect(state.activePlayer).toBe(1);
  });

  it('handles HOLD_TURN by banking points and switching player', () => {
    const currentState: GameState = {
      ...initialGameState,
      players: [30, 10],
      currentTurnScore: 14,
      activePlayer: 1,
    };

    const state = gameReducer(currentState, { type: 'HOLD_TURN' });

    expect(state.players).toEqual([30, 24]);
    expect(state.currentTurnScore).toBe(0);
    expect(state.activePlayer).toBe(0);
  });

  it('handles NEW_GAME by resetting state', () => {
    const currentState: GameState = {
      players: [99, 100],
      currentTurnScore: 12,
      activePlayer: 1,
      currentDie: 4,
      status: 'finished',
      winner: 1,
    };

    const state = gameReducer(currentState, { type: 'NEW_GAME' });

    expect(state).toEqual(initialGameState);
  });
});
