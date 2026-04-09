interface PlayerCardProps {
  index: number;
  score: number;
  currentScore: number;
  isActive: boolean;
  isWinner: boolean;
}

export const PlayerCard = ({
  index,
  score,
  currentScore,
  isActive,
  isWinner,
}: PlayerCardProps) => {
  const title = `Player ${index + 1}`;
  const statusIcon = isWinner ? '\u2713' : isActive ? '\u25B6' : '\u25CB';

  return (
    <section
      aria-current={isActive ? 'true' : undefined}
      className={[
        'flex h-full flex-col items-center px-6 py-10 text-center transition sm:px-10 sm:py-14',
        isActive
          ? 'bg-[#fff8eb] shadow-[inset_0_0_0_1px_rgba(183,121,31,0.28)]'
          : 'bg-white/60',
        !isActive && !isWinner ? 'opacity-50' : '',
        isWinner ? 'ring-1 ring-success/30' : '',
      ].join(' ')}
    >
      <div className="flex min-h-8 items-center gap-3">
        <span
          aria-hidden="true"
          className={[
            'inline-flex h-5 w-5 items-center justify-center text-sm leading-none transition',
            isWinner
              ? 'font-bold text-success'
              : isActive
                ? 'text-[#b7791f]'
                : 'text-[#6b6570]',
          ].join(' ')}
        >
          {statusIcon}
        </span>
        <p
          className={[
            'text-xs uppercase tracking-[0.22em]',
            isWinner
              ? 'font-bold text-success'
              : isActive
                ? 'font-bold text-[#b7791f]'
                : 'font-semibold text-[#6b6570]',
          ].join(' ')}
        >
          {isWinner ? 'Winner' : isActive ? 'Active Player' : 'Waiting'}
        </p>
      </div>

      <h2 className="mt-8 text-4xl font-light uppercase tracking-[0.14em] text-ink sm:text-5xl">
        {title}
      </h2>

      <p className="mt-10 text-7xl font-extralight leading-none text-ink sm:text-8xl">
        {score}
      </p>

      <div className="mt-auto w-full pt-12">
        <div
          className={[
            'mx-auto w-full max-w-[12rem] rounded-[1.5rem] px-6 py-4 shadow-card',
            isActive ? 'bg-[#b7791f] text-white' : 'bg-ink text-paper',
          ].join(' ')}
        >
          <p className="text-sm uppercase tracking-[0.14em] text-current/90">
            Current
          </p>
          <p className="mt-2 text-5xl font-thin leading-none">{currentScore}</p>
        </div>
      </div>
    </section>
  );
};
