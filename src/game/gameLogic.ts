import type { GameState } from './gameTypes';

export const WINNING_SCORE = 100;

export const getNextPlayerIndex = (
  playerIndex: number,
  playerCount: number
): number => (playerIndex + 1) % playerCount;

export const isWinningScore = (score: number): boolean =>
  score >= WINNING_SCORE;

export const applyRoll = (state: GameState, value: number): GameState => {
  if (value < 1 || value > 6) {
    throw new Error('Dice value must be between 1 and 6.');
  }

  if (state.status === 'finished') {
    return state;
  }

  if (value === 1) {
    return {
      ...state,
      currentDie: value,
      currentTurnScore: 0,
      activePlayerIndex: getNextPlayerIndex(
        state.activePlayerIndex,
        state.players.length
      ),
    };
  }

  return {
    ...state,
    currentDie: value,
    currentTurnScore: state.currentTurnScore + value,
  };
};

export const applyHold = (state: GameState): GameState => {
  if (state.status === 'finished') {
    return state;
  }

  const updatedPlayers = state.players.map((player, index) =>
    index === state.activePlayerIndex
      ? { ...player, score: player.score + state.currentTurnScore }
      : player
  );
  const totalScore = updatedPlayers[state.activePlayerIndex].score;

  if (isWinningScore(totalScore)) {
    return {
      ...state,
      players: updatedPlayers,
      currentTurnScore: 0,
      status: 'finished',
      winner: updatedPlayers[state.activePlayerIndex].id,
    };
  }

  return {
    ...state,
    players: updatedPlayers,
    currentTurnScore: 0,
    activePlayerIndex: getNextPlayerIndex(
      state.activePlayerIndex,
      state.players.length
    ),
  };
};
