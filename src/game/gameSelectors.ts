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

export const getWinnerIndex = (state: GameState): number =>
  state.players.findIndex((player) => player.id === state.winner);

export const getStatusMessage = (state: GameState): string => {
  if (isGameFinished(state) && state.winner !== null) {
    const winnerIndex = getWinnerIndex(state);

    if (winnerIndex !== -1) {
      return `Player ${winnerIndex + 1} wins with ${state.players[winnerIndex].score} points.`;
    }
  }

  return `Player ${state.activePlayerIndex + 1} turn.`;
};
