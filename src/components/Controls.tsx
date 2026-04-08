interface ControlsProps {
  disabled: boolean;
  onRoll: () => void;
  onHold: () => void;
  onNewGame: () => void;
}

const baseButtonClassName =
  'inline-flex items-center justify-center gap-3 rounded-full px-3 py-2 text-sm uppercase tracking-[0.14em] transition duration-150 focus-visible:outline-none';

export const Controls = ({
  disabled,
  onRoll,
  onHold,
  onNewGame,
}: ControlsProps) => {
  return (
    <section className="flex flex-col items-center gap-6 text-center">
      <button
        type="button"
        onClick={onNewGame}
        className={`${baseButtonClassName} border border-transparent font-medium text-[#6b6570] enabled:hover:scale-[1.03] enabled:hover:font-bold enabled:hover:text-ink`}
      >
        <span
          aria-hidden="true"
          className="relative inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#6b6570] text-[#6b6570]"
        >
          <span className="absolute h-px w-3 bg-current" />
          <span className="absolute h-3 w-px bg-current" />
        </span>
        New Game
      </button>

      <button
        type="button"
        onClick={onRoll}
        disabled={disabled}
        className={`${baseButtonClassName} w-40 rounded-2xl bg-ink px-5 py-3 font-semibold text-white shadow-sm enabled:hover:scale-[1.03] enabled:hover:bg-ink/92 enabled:hover:shadow-md disabled:cursor-not-allowed disabled:bg-ink/35 disabled:text-white/80`}
      >
        <span
          aria-hidden="true"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-current text-base font-semibold leading-none"
        >
          {'\u21BB'}
        </span>
        Roll
      </button>

      <button
        type="button"
        onClick={onHold}
        disabled={disabled}
        className={`${baseButtonClassName} w-40 rounded-2xl border border-[#d4c6b8] bg-[#f7f4f1] px-5 py-3 font-semibold text-ink enabled:hover:scale-[1.03] enabled:hover:border-[#b7791f] enabled:hover:bg-[#fff8eb] enabled:hover:shadow-sm disabled:cursor-not-allowed disabled:border-[#e7e0d9] disabled:text-ink/35`}
      >
        <span
          aria-hidden="true"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-current text-base font-semibold leading-none"
        >
          {'\u2193'}
        </span>
        Hold
      </button>
    </section>
  );
};
