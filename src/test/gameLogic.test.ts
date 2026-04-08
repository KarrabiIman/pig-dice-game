import { applyHold, applyRoll, WINNING_SCORE } from '../game/gameLogic';
import { initialGameState } from '../game/initialState';
import type { GameState } from '../game/gameTypes';

describe('gameLogic', () => {
  it('adds rolls from 2 to 6 to the current turn score', () => {
    const state = applyRoll(initialGameState, 5);

    expect(state.currentTurnScore).toBe(5);
    expect(state.activePlayer).toBe(0);
    expect(state.currentDie).toBe(5);
  });

  it('rolling 1 resets the turn score and switches player', () => {
    const midTurnState: GameState = {
      ...initialGameState,
      currentTurnScore: 12,
    };

    const state = applyRoll(midTurnState, 1);

    expect(state.currentTurnScore).toBe(0);
    expect(state.activePlayer).toBe(1);
    expect(state.currentDie).toBe(1);
  });

  it('hold banks score and switches player', () => {
    const midTurnState: GameState = {
      ...initialGameState,
      players: [18, 22],
      currentTurnScore: 9,
      activePlayer: 0,
    };

    const state = applyHold(midTurnState);

    expect(state.players).toEqual([27, 22]);
    expect(state.currentTurnScore).toBe(0);
    expect(state.activePlayer).toBe(1);
    expect(state.status).toBe('playing');
  });

  it('reaching 100 or more points ends the game', () => {
    const nearWinState: GameState = {
      ...initialGameState,
      players: [WINNING_SCORE - 4, 60],
      currentTurnScore: 4,
      activePlayer: 0,
    };

    const state = applyHold(nearWinState);

    expect(state.players[0]).toBe(WINNING_SCORE);
    expect(state.status).toBe('finished');
    expect(state.winner).toBe(0);
    expect(state.currentTurnScore).toBe(0);
  });
});
