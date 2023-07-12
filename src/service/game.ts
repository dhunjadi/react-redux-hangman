/* eslint-disable no-console */
import axios from 'axios';
import {Puzzle, ScoreData, Highscore} from '../types';
import {FETCH_HIGHSCORES_URL, FETCH_WORD_URL, SEND_SCORE_URL} from '../constants';

export const fetchWordToGuess = (): Promise<Puzzle> => {
    return axios
        .get(FETCH_WORD_URL)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const sendScoreData = ({quoteId, length, uniqueCharacters, userName, errors, duration}: ScoreData): Promise<ScoreData> => {
    return axios
        .post(
            SEND_SCORE_URL,
            {quoteId, length, uniqueCharacters, userName, errors, duration},
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const fetchHighscores = (): Promise<Highscore[]> => {
    return axios
        .get(FETCH_HIGHSCORES_URL)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
};
