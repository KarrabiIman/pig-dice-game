export type PlayerIndex = 0 | 1;

export type GameStatus = 'playing' | 'finished';

export interface GameState {
  players: [number, number];
  currentTurnScore: number;
  activePlayer: PlayerIndex;
  currentDie: number | null;
  status: GameStatus;
  winner: PlayerIndex | null;
}

export type RollDiceAction = {
  type: 'ROLL_DICE';
  payload: {
    value: number;
  };
};

export type HoldTurnAction = {
  type: 'HOLD_TURN';
};

export type NewGameAction = {
  type: 'NEW_GAME';
};

export type GameAction = RollDiceAction | HoldTurnAction | NewGameAction;
