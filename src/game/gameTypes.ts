export type GameStatus = 'playing' | 'finished';

export interface Player {
  id: string;
  score: number;
}

export interface GameState {
  players: Player[];
  currentTurnScore: number;
  activePlayerIndex: number;
  currentDie: number | null;
  status: GameStatus;
  winner: string | null;
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
