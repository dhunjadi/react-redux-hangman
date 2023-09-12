import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GameSliceState} from './types';
import {Highscore, Puzzle} from '../../types';
import {fetchHighscoreTable, fetchPuzzle} from '../thunks/gameThunks';

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

        setPuzzle: (state, action: PayloadAction<Puzzle>) => {
            state.puzzle = action.payload;
        },
        addCorrectLetter: (state, action: PayloadAction<string>) => {
            state.correctLetters = [...state.correctLetters, action.payload];
        },
        addIncorrectLetter: (state, action: PayloadAction<string>) => {
            state.incorrectLetters = [...state.incorrectLetters, action.payload];
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
    extraReducers: (builder) => {
        builder.addCase(fetchPuzzle.pending, (state: GameSliceState) => {
            state.isLoading = true;
        });
        builder.addCase(fetchPuzzle.fulfilled, (state: GameSliceState, action: PayloadAction<Puzzle>) => {
            state.puzzle = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchPuzzle.rejected, (state: GameSliceState) => {
            state.isLoading = false;
        });
        builder.addCase(fetchHighscoreTable.pending, (state: GameSliceState) => {
            state.isLoading = true;
        });
        builder.addCase(fetchHighscoreTable.fulfilled, (state: GameSliceState, action: PayloadAction<Highscore[]>) => {
            state.highscores = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchHighscoreTable.rejected, (state: GameSliceState) => {
            state.isLoading = false;
        });
    },
});

export const {
    setPlayerName,

    setPuzzle,
    addCorrectLetter,
    addIncorrectLetter,
    setWin,
    setLost,
    setGameTime,
    setHighScores,
    setIsLoading,
    resetGame,
} = gameSlice.actions;
export default gameSlice.reducer;
