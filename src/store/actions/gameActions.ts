import { Puzzle, ScoreData, Highscore } from '../../types';
import {
    AddCorrectLetterAction,
    AddIncorrectLetterAction,
    FetchPuzzleAction,
    SetHighscoreAction,
    ResetGameAction,
    SendScoreDataAction,
    SetLostAction,
    SetPuzzleAction,
    SetTimeAction,
    SetWinAction,
    FetchHighscoreAction,
    SetPlayerActionAction,
} from './types/gameActionsTypes';

export const SET_PLAYER_NAME = 'SET_PLAYER_NAME';
export const FETCH_PUZZLE = 'FETCH_PUZZLE';
export const SET_PUZZLE = 'SET_PUZZLE';
export const ADD_CORRECT_LETTER = 'ADD_CORRECT_LETTER';
export const ADD_INCORRECT_LETTER = 'ADD_INCORRECT_LETTER';
export const RESET_GAME = 'RESET_GAME';
export const SET_WIN = 'SET_WIN';
export const SET_LOST = 'SET_LOST';
export const SET_TIME = 'SET_TIME';
export const SEND_SCORE_DATA = 'SEND_SCORE_DATA';
export const FETCH_HIGHSCORES = 'FETCH_HIGHSCORES';
export const SET_HIGHSCORES = 'SET_HIGHSCORES';


export const setPlayerNameAction = (name: string): SetPlayerActionAction => ({
    type: SET_PLAYER_NAME,
    name,
});

export const fetchPuzzleAction = (): FetchPuzzleAction => ({
    type: FETCH_PUZZLE,
});

export const setPuzzleAction = (puzzle: Puzzle): SetPuzzleAction => ({
    type: SET_PUZZLE,
    puzzle,
});

export const addCorrectLetterAction = (letter: string): AddCorrectLetterAction => ({
    type: ADD_CORRECT_LETTER,
    letter,
});

export const addIncorrectLetterAction = (letter: string): AddIncorrectLetterAction => ({
    type: ADD_INCORRECT_LETTER,
    letter,
});

export const resetGameAction = (): ResetGameAction => ({
    type: RESET_GAME,
});

export const setWinAction = (): SetWinAction => ({
    type: SET_WIN,
});

export const setLostAction = (): SetLostAction => ({
    type: SET_LOST,
});

export const setTimeAction = (time: number): SetTimeAction => ({
    type: SET_TIME,
    time,
});

export const sendScoreDataAction = (scoreData: ScoreData): SendScoreDataAction => ({
    type: SEND_SCORE_DATA,
    scoreData,
});

export const fetcgHighscoresAction = (): FetchHighscoreAction => ({
    type: FETCH_HIGHSCORES,
});

export const setHighscoresAction = (highscores: Highscore[]): SetHighscoreAction => ({
    type: SET_HIGHSCORES,
    highscores,
});
