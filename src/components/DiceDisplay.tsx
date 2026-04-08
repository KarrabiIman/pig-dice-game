interface DiceDisplayProps {
  value: number | null;
}

const pipLayouts: Record<number, string[]> = {
  1: ['col-start-2 row-start-2'],
  2: ['col-start-1 row-start-1', 'col-start-3 row-start-3'],
  3: [
    'col-start-1 row-start-1',
    'col-start-2 row-start-2',
    'col-start-3 row-start-3',
  ],
  4: [
    'col-start-1 row-start-1',
    'col-start-3 row-start-1',
    'col-start-1 row-start-3',
    'col-start-3 row-start-3',
  ],
  5: [
    'col-start-1 row-start-1',
    'col-start-3 row-start-1',
    'col-start-2 row-start-2',
    'col-start-1 row-start-3',
    'col-start-3 row-start-3',
  ],
  6: [
    'col-start-1 row-start-1',
    'col-start-3 row-start-1',
    'col-start-1 row-start-2',
    'col-start-3 row-start-2',
    'col-start-1 row-start-3',
    'col-start-3 row-start-3',
  ],
};

export const DiceDisplay = ({ value }: DiceDisplayProps) => {
  const pips = value ? pipLayouts[value] : [];

  return (
    <section className="flex flex-col items-center text-center">
      <h2 className="sr-only">Current Die</h2>
      <div className="flex justify-center">
        <div className="grid h-28 w-28 grid-cols-3 grid-rows-3 rounded-[1.5rem] border border-[#e7e0d9] bg-white p-5 shadow-[0_24px_48px_-24px_rgba(62,6,26,0.35)] sm:h-32 sm:w-32">
          {value === null ? (
            <span className="col-start-2 row-start-2 self-center justify-self-center text-3xl font-light text-ink/35">
              -
            </span>
          ) : (
            pips.map((positionClassName) => (
              <span
                key={positionClassName}
                aria-hidden="true"
                className={`h-4 w-4 self-center justify-self-center rounded-full bg-ink ${positionClassName}`}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};
