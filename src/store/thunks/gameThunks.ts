/* eslint-disable no-console */
import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchQuote, fetchHighscores} from '../../service/game';

export const fetchPuzzle = createAsyncThunk('game/fetchQuote', async () => {
    try {
        return await fetchQuote();
    } catch (error) {
        console.error('Error fetching puzzle:', error);
        throw new Error('Failed to fetch puzzle. Please try again later.');
    }
});

export const fetchHighscoreTable = createAsyncThunk('game/fetchHighscoreTable', async () => {
    try {
        return await fetchHighscores();
    } catch (error) {
        console.error('Error fetching puzzle:', error);
        throw new Error('Failed to fetch highscores. Try again later.');
    }
});
