import { render, screen } from '@testing-library/react';
import { GameBoard } from '../components/GameBoard';
import { initialGameState } from '../game/initialState';
import type { GameState } from '../game/gameTypes';

describe('GameBoard', () => {
  it('disables roll and hold actions when the game is finished', () => {
    const state: GameState = {
      ...initialGameState,
      players: [
        { id: 'player-1', score: 100 },
        { id: 'player-2', score: 42 },
      ],
      status: 'finished',
      winner: 'player-1',
    };

    render(
      <GameBoard
        state={state}
        onRoll={vi.fn()}
        onHold={vi.fn()}
        onNewGame={vi.fn()}
      />
    );

    expect(screen.getByRole('button', { name: /roll/i })).toBeDisabled();
    expect(screen.getByRole('button', { name: /hold/i })).toBeDisabled();
    expect(
      screen.getByText('Player 1 wins with 100 points.')
    ).toBeInTheDocument();
  });
});
