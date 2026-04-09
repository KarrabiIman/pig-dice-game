import { getStatusMessage } from '../game/gameSelectors';
import type { GameState } from '../game/gameTypes';

interface StatusMessageProps {
  state: GameState;
}

export const StatusMessage = ({ state }: StatusMessageProps) => {
  const message = getStatusMessage(state);

  return (
    <p
      className="max-w-xs text-center text-sm font-medium uppercase tracking-[0.08em] text-[#6b6570]"
      aria-live="polite"
    >
      {message}
    </p>
  );
};
