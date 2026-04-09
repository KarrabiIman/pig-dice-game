import { GameBoard } from './components/GameBoard';
import { usePigGame } from './game/usePigGame';

function App() {
  const { state, roll, hold, newGame } = usePigGame();

  return (
    <GameBoard
      state={state}
      onRoll={roll}
      onHold={hold}
      onNewGame={newGame}
    />
  );
}

export default App;
