import { act, renderHook } from '@testing-library/react';
import { usePigGame } from '../game/usePigGame';

describe('usePigGame', () => {
  it('roll uses the provided dice source and updates state through the reducer', () => {
    const { result } = renderHook(() => usePigGame(() => 4));

    act(() => {
      result.current.roll();
    });

    expect(result.current.state.currentDie).toBe(4);
    expect(result.current.state.currentTurnScore).toBe(4);
    expect(result.current.state.activePlayerIndex).toBe(0);
  });

  it('newGame resets the state', () => {
    const { result } = renderHook(() => usePigGame(() => 5));

    act(() => {
      result.current.roll();
      result.current.newGame();
    });

    expect(result.current.state).toEqual({
      players: [
        { id: 'player-1', score: 0 },
        { id: 'player-2', score: 0 },
      ],
      currentTurnScore: 0,
      activePlayerIndex: 0,
      currentDie: null,
      status: 'playing',
      winner: null,
    });
  });
});
