import { createSlice } from "@reduxjs/toolkit";
import { getWinnerHard } from "../../services/getWinner";
import { setLocalStorage } from "../../services/localStorage";

const initialState = {
  showRules: false,
  showStats: false,
  stats: {
    score: 0,
    totalTies: 0,
    totalWins: 0,
    totalLoses: 0,
  },
  gameOptions: ["rock", "paper", "scissors", "lizard", "spock"],
  currentStep: 1,
  playersChoice: null,
  computersChoice: null,
  winner: null,
};

const hardSlice = createSlice({
  name: "hard",
  initialState,
  reducers: {
    // show rules
    showRules: (state) => {
      state.showRules = true;
    },

    // hide rules
    hideRules: (state) => {
      state.showRules = false;
    },

    // show stats
    showStatsFunc: (state) => {
      state.showStats = !state.showStats;
    },

    // players choice
    playersChoiceFunc: (state, { payload }) => {
      state.currentStep = 2;
      state.playersChoice = payload;
    },

    // computers choice
    computersChoiceFunc: (state) => {
      const computerChoice =
        state.gameOptions[Math.floor(Math.random() * state.gameOptions.length)];
      state.computersChoice = computerChoice;
      state.currentStep = 3;
    },

    // check winner
    checkWinner: (state) => {
      state.winner = getWinnerHard(state.playersChoice, state.computersChoice);
      if (state.winner === "it's tie") {
        state.stats.totalTies += 1;
      }
      if (state.winner === "you win") {
        state.stats.score += 1;
        state.stats.totalWins += 1;
      }
      if (state.winner === "you lose") {
        state.stats.score -= 1;
        state.stats.totalLoses += 1;
      }
      state.currentStep = 4;
      setLocalStorage(state.stats);
    },

    // reset
    resetGame: (state) => {
      state.stats.score = 0;
      state.stats.totalTies = 0;
      state.stats.totalWins = 0;
      state.stats.totalLoses = 0;
      state.currentStep = 1;
      state.playersChoice = null;
      state.computersChoice = null;
      setLocalStorage(state.stats);
    },

    // play again
    playAgain: (state) => {
      state.currentStep = 1;
      state.playersChoice = null;
      state.computersChoice = null;
    },
  },
});

// prettier-ignore
export const { playersChoiceFunc, computersChoiceFunc, showRules, hideRules, 
playAgain, resetGame, checkWinner, showStatsFunc, setDifficulty  } = hardSlice.actions;

export default hardSlice.reducer;
