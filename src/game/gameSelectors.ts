import type { GameState, Player } from './gameTypes';

export const getActivePlayer = (state: GameState): Player =>
  state.players[state.activePlayerIndex];

export const isGameFinished = (state: GameState): boolean =>
  state.status === 'finished';

export const getCurrentTurnScore = (state: GameState): number =>
  state.currentTurnScore;

export const isPlayerActive = (state: GameState, index: number): boolean =>
  !isGameFinished(state) && state.activePlayerIndex === index;

export const isPlayerWinner = (state: GameState, playerId: string): boolean =>
  state.winner === playerId;

export const getPlayerCurrentScore = (
  state: GameState,
  index: number
): number => (isPlayerActive(state, index) ? state.currentTurnScore : 0);
