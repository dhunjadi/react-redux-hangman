/* eslint-disable no-console */
import axios from 'axios';
import {Puzzle, ScoreData, Highscore} from '../types';
import {FETCH_HIGHSCORES_URL, FETCH_WORD_URL, SEND_SCORE_URL} from '../constants';

export const fetchQuote = async (): Promise<Puzzle> => {
    try {
        const response = await axios.get(FETCH_WORD_URL);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const sendScoreData = async ({quoteId, length, uniqueCharacters, userName, errors, duration}: ScoreData): Promise<ScoreData> => {
    try {
        const response = await axios.post(
            SEND_SCORE_URL,
            {quoteId, length, uniqueCharacters, userName, errors, duration},
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const fetchHighscores = async (): Promise<Highscore[]> => {
    try {
        const response = await axios.get(FETCH_HIGHSCORES_URL);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
