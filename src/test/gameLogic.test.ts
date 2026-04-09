import { applyHold, applyRoll, WINNING_SCORE } from '../game/gameLogic';
import { initialGameState } from '../game/initialState';
import type { GameState } from '../game/gameTypes';

describe('gameLogic', () => {
  it('adds rolls from 2 to 6 to the current turn score', () => {
    const state = applyRoll(initialGameState, 5);

    expect(state.currentTurnScore).toBe(5);
    expect(state.activePlayerIndex).toBe(0);
    expect(state.currentDie).toBe(5);
  });

  it('rolling 1 resets the turn score and switches player', () => {
    const midTurnState: GameState = {
      ...initialGameState,
      currentTurnScore: 12,
    };

    const state = applyRoll(midTurnState, 1);

    expect(state.currentTurnScore).toBe(0);
    expect(state.activePlayerIndex).toBe(1);
    expect(state.currentDie).toBe(1);
  });

  it('hold banks score and switches player', () => {
    const midTurnState: GameState = {
      ...initialGameState,
      players: [
        { id: 'player-1', score: 18 },
        { id: 'player-2', score: 22 },
      ],
      currentTurnScore: 9,
      activePlayerIndex: 0,
    };

    const state = applyHold(midTurnState);

    expect(state.players).toEqual([
      { id: 'player-1', score: 27 },
      { id: 'player-2', score: 22 },
    ]);
    expect(state.currentTurnScore).toBe(0);
    expect(state.activePlayerIndex).toBe(1);
    expect(state.status).toBe('playing');
  });

  it('reaching 100 or more points ends the game', () => {
    const nearWinState: GameState = {
      ...initialGameState,
      players: [
        { id: 'player-1', score: WINNING_SCORE - 4 },
        { id: 'player-2', score: 60 },
      ],
      currentTurnScore: 4,
      activePlayerIndex: 0,
    };

    const state = applyHold(nearWinState);

    expect(state.players[0].score).toBe(WINNING_SCORE);
    expect(state.status).toBe('finished');
    expect(state.winner).toBe('player-1');
    expect(state.currentTurnScore).toBe(0);
  });

  it('returns unchanged state when rolling after the game is finished', () => {
    const finishedState: GameState = {
      ...initialGameState,
      status: 'finished',
      winner: 'player-1',
    };

    expect(applyRoll(finishedState, 4)).toEqual(finishedState);
  });

  it('returns unchanged state when holding after the game is finished', () => {
    const finishedState: GameState = {
      ...initialGameState,
      status: 'finished',
      winner: 'player-1',
    };

    expect(applyHold(finishedState)).toEqual(finishedState);
  });

  it('throws when the dice value is outside the valid range', () => {
    expect(() => applyRoll(initialGameState, 0)).toThrow(
      'Dice value must be between 1 and 6.'
    );
    expect(() => applyRoll(initialGameState, 7)).toThrow(
      'Dice value must be between 1 and 6.'
    );
  });
});
