import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GameSliceState} from './types';
import {RootState} from './rootReducer';
import {Highscore, Puzzle} from '../../types';

const initialState: GameSliceState = {
    playerName: '',
    puzzle: {_id: '', content: '', author: '', tags: [], authorSlug: '', length: 0, dateAdded: '', dateModified: ''},
    correctLetters: [],
    incorrectLetters: [],
    isWin: false,
    isLost: false,
    time: 0,
    highscores: [],
    isLoading: false,
};

export const gameSlice = createSlice({
    name: 'game',
    initialState: initialState,
    reducers: {
        setPlayerName: (state, action: PayloadAction<string>) => {
            state.playerName = action.payload;
        },
        fetchPuzzle: (state) => {
            state.isLoading = true;
        },
        setPuzzle: (state, action: PayloadAction<Puzzle>) => {
            state.puzzle = action.payload;
        },
        addCorrectLetter: (state, action: PayloadAction<string>) => {
            state.correctLetters.push(action.payload);
        },
        addIncorrectLetter: (state, action: PayloadAction<string>) => {
            state.incorrectLetters.push(action.payload);
        },
        setWin: (state) => {
            state.isWin = true;
        },
        setLost: (state) => {
            state.isLost = true;
        },
        setGameTime: (state, action: PayloadAction<number>) => {
            state.time = action.payload;
        },
        fetchHighscores: (state) => {
            state.isLoading = true;
        },
        setHighScores: (state, action: PayloadAction<Highscore[]>) => {
            state.highscores = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        resetGame: () => {
            return initialState;
        },
    },
});

export const {
    setPlayerName,
    fetchPuzzle,
    setPuzzle,
    addCorrectLetter,
    addIncorrectLetter,
    setWin,
    setLost,
    setGameTime,
    fetchHighscores,
    setHighScores,
    setIsLoading,
    resetGame,
} = gameSlice.actions;
export default gameSlice.reducer;

export const selectGameSlice = (state: RootState): GameSliceState => state.game;

export const selectGame = createSelector(selectGameSlice, (game) => game);
