import type { GameState } from './gameTypes';

export const initialGameState: GameState = {
  players: [0, 0],
  currentTurnScore: 0,
  activePlayer: 0,
  currentDie: null,
  status: 'playing',
  winner: null,
};
