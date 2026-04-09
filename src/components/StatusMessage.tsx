import { getActivePlayer, isGameFinished } from '../game/gameSelectors';
import type { GameState } from '../game/gameTypes';

interface StatusMessageProps {
  state: GameState;
}

export const StatusMessage = ({ state }: StatusMessageProps) => {
  const activePlayer = getActivePlayer(state);
  const winnerIndex = state.players.findIndex((player) => player.id === state.winner);
  const message =
    isGameFinished(state) && state.winner !== null && winnerIndex !== -1
      ? `Player ${winnerIndex + 1} wins with ${state.players[winnerIndex].score} points.`
      : `Player ${state.players.findIndex((player) => player.id === activePlayer.id) + 1} turn.`;

  return (
    <p
      className="max-w-xs text-center text-sm font-medium uppercase tracking-[0.08em] text-[#6b6570]"
      aria-live="polite"
    >
      {message}
    </p>
  );
};
