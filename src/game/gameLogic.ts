import type { GameState, PlayerIndex } from './gameTypes';

export const WINNING_SCORE = 100;

export const getNextPlayer = (player: PlayerIndex): PlayerIndex =>
  player === 0 ? 1 : 0;

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
      activePlayer: getNextPlayer(state.activePlayer),
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

  const updatedPlayers = [...state.players] as [number, number];
  const totalScore =
    updatedPlayers[state.activePlayer] + state.currentTurnScore;
  updatedPlayers[state.activePlayer] = totalScore;

  if (isWinningScore(totalScore)) {
    return {
      ...state,
      players: updatedPlayers,
      currentTurnScore: 0,
      status: 'finished',
      winner: state.activePlayer,
    };
  }

  return {
    ...state,
    players: updatedPlayers,
    currentTurnScore: 0,
    activePlayer: getNextPlayer(state.activePlayer),
  };
};
