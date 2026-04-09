import {
  getActivePlayer,
  getCurrentTurnScore,
  getPlayerCurrentScore,
  isGameFinished,
  isPlayerActive,
  isPlayerWinner,
} from '../game/gameSelectors';
import { initialGameState } from '../game/initialState';
import type { GameState } from '../game/gameTypes';

describe('gameSelectors', () => {
  it('returns the active player', () => {
    const state: GameState = {
      ...initialGameState,
      activePlayerIndex: 1,
    };

    expect(getActivePlayer(state)).toEqual({ id: 'player-2', score: 0 });
  });

  it('returns whether the game is finished', () => {
    expect(isGameFinished(initialGameState)).toBe(false);

    const finishedState: GameState = {
      ...initialGameState,
      status: 'finished',
      winner: 'player-1',
    };

    expect(isGameFinished(finishedState)).toBe(true);
  });

  it('returns the current turn score', () => {
    const state: GameState = {
      ...initialGameState,
      currentTurnScore: 12,
    };

    expect(getCurrentTurnScore(state)).toBe(12);
  });

  it('identifies the active player correctly', () => {
    const state: GameState = {
      ...initialGameState,
      activePlayerIndex: 1,
    };

    expect(isPlayerActive(state, 0)).toBe(false);
    expect(isPlayerActive(state, 1)).toBe(true);
  });

  it('returns the current score only for the active player', () => {
    const state: GameState = {
      ...initialGameState,
      activePlayerIndex: 1,
      currentTurnScore: 9,
    };

    expect(getPlayerCurrentScore(state, 0)).toBe(0);
    expect(getPlayerCurrentScore(state, 1)).toBe(9);
  });

  it('identifies the winning player by id', () => {
    const state: GameState = {
      ...initialGameState,
      status: 'finished',
      winner: 'player-2',
    };

    expect(isPlayerWinner(state, 'player-1')).toBe(false);
    expect(isPlayerWinner(state, 'player-2')).toBe(true);
  });
});
