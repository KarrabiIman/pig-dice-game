import { Controls } from './Controls';
import { DiceDisplay } from './DiceDisplay';
import { PlayerCard } from './PlayerCard';
import { StatusMessage } from './StatusMessage';
import type { GameState } from '../game/gameTypes';

interface GameBoardProps {
  state: GameState;
  onRoll: () => void;
  onHold: () => void;
  onNewGame: () => void;
}

export const GameBoard = ({
  state,
  onRoll,
  onHold,
  onNewGame,
}: GameBoardProps) => {
  const isFinished = state.status === 'finished';
  const leftCurrentScore =
    !isFinished && state.activePlayer === 0 ? state.currentTurnScore : 0;
  const rightCurrentScore =
    !isFinished && state.activePlayer === 1 ? state.currentTurnScore : 0;

  return (
    <main className="mx-auto flex min-h-screen w-full items-center justify-center px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
      <section className="relative w-full max-w-[88rem] overflow-hidden rounded-[2rem] border border-[#ddd6cf] bg-white shadow-[0_28px_80px_-42px_rgba(62,6,26,0.3)]">
        <div className="grid lg:min-h-[36rem] lg:grid-cols-2">
          <div className="border-b border-[#e7e0d9] bg-[#f7f4f1] lg:border-b-0 lg:border-r lg:border-[#e7e0d9]">
            <PlayerCard
              index={0}
              score={state.players[0]}
              currentScore={leftCurrentScore}
              isActive={state.activePlayer === 0 && !isFinished}
              isWinner={state.winner === 0}
            />
          </div>
          <div>
            <PlayerCard
              index={1}
              score={state.players[1]}
              currentScore={rightCurrentScore}
              isActive={state.activePlayer === 1 && !isFinished}
              isWinner={state.winner === 1}
            />
          </div>
        </div>

        <aside className="relative border-t border-[#e7e0d9] px-6 py-6 lg:absolute lg:inset-y-0 lg:left-1/2 lg:w-[15rem] lg:-translate-x-1/2 lg:border-t-0">
          <div className="flex h-full flex-col items-center justify-center gap-8 lg:gap-10 lg:py-8">
            <DiceDisplay value={state.currentDie} />
            <Controls
              disabled={isFinished}
              onRoll={onRoll}
              onHold={onHold}
              onNewGame={onNewGame}
            />
            <StatusMessage state={state} />
          </div>
        </aside>
      </section>
    </main>
  );
};
