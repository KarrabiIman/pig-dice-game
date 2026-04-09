import { useReducer } from 'react';
import { gameReducer } from './gameReducer';
import { initialGameState } from './initialState';

const rollDie = (): number => Math.floor(Math.random() * 6) + 1;

export const usePigGame = () => {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  const roll = () => {
    dispatch({
      type: 'ROLL_DICE',
      payload: {
        value: rollDie(),
      },
    });
  };

  const hold = () => {
    dispatch({ type: 'HOLD_TURN' });
  };

  const newGame = () => {
    dispatch({ type: 'NEW_GAME' });
  };

  return {
    state,
    roll,
    hold,
    newGame,
  };
};
