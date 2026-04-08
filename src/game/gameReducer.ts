import { applyHold, applyRoll } from './gameLogic';
import { initialGameState } from './initialState';
import type { GameAction, GameState } from './gameTypes';

export const gameReducer = (
  state: GameState,
  action: GameAction
): GameState => {
  switch (action.type) {
    case 'ROLL_DICE':
      return applyRoll(state, action.payload.value);
    case 'HOLD_TURN':
      return applyHold(state);
    case 'NEW_GAME':
      return initialGameState;
    default:
      return state;
  }
};
