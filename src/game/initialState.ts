import type { GameState } from './gameTypes';

export const initialGameState: GameState = {
  players: [
    { id: 'player-1', score: 0 },
    { id: 'player-2', score: 0 },
  ],
  currentTurnScore: 0,
  activePlayerIndex: 0,
  currentDie: null,
  status: 'playing',
  winner: null,
};
