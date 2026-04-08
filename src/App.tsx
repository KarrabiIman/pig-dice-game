import { useReducer } from 'react';
import { GameBoard } from './components/GameBoard';
import { gameReducer } from './game/gameReducer';
import { initialGameState } from './game/initialState';

const rollDie = (): number => Math.floor(Math.random() * 6) + 1;

function App() {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  const handleRoll = () => {
    dispatch({
      type: 'ROLL_DICE',
      payload: {
        value: rollDie(),
      },
    });
  };

  const handleHold = () => {
    dispatch({ type: 'HOLD_TURN' });
  };

  const handleNewGame = () => {
    dispatch({ type: 'NEW_GAME' });
  };

  return (
    <GameBoard
      state={state}
      onRoll={handleRoll}
      onHold={handleHold}
      onNewGame={handleNewGame}
    />
  );
}

export default App;
