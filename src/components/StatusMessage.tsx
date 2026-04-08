import type { GameState } from '../game/gameTypes';

interface StatusMessageProps {
  state: GameState;
}

export const StatusMessage = ({ state }: StatusMessageProps) => {
  const message =
    state.status === 'finished' && state.winner !== null
      ? `Player ${state.winner + 1} wins with ${state.players[state.winner]} points.`
      : `Player ${state.activePlayer + 1} turn.`;

  return (
    <p
      className="max-w-xs text-center text-sm font-medium uppercase tracking-[0.08em] text-[#6b6570]"
      aria-live="polite"
    >
      {message}
    </p>
  );
};
