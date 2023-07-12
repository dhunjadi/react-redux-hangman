import { Puzzle, ScoreData, Highscore } from '../../../types';
import {
    ADD_CORRECT_LETTER,
    ADD_INCORRECT_LETTER,
    FETCH_PUZZLE,
    SET_HIGHSCORES,
    RESET_GAME,
    SEND_SCORE_DATA,
    SET_LOST,
    SET_PUZZLE,
    SET_TIME,
    SET_WIN,
    FETCH_HIGHSCORES,
    SET_PLAYER_NAME,
} from '../gameActions';

export interface SetPlayerActionAction {
    type: typeof SET_PLAYER_NAME;
    name: string;
}

export interface FetchPuzzleAction {
    type: typeof FETCH_PUZZLE;
}

export interface SetPuzzleAction {
    type: typeof SET_PUZZLE;
    puzzle: Puzzle;
}

export interface AddCorrectLetterAction {
    type: typeof ADD_CORRECT_LETTER;
    letter: string;
}

export interface AddIncorrectLetterAction {
    type: typeof ADD_INCORRECT_LETTER;
    letter: string;
}

export interface ResetGameAction {
    type: typeof RESET_GAME;
}

export interface SetWinAction {
    type: typeof SET_WIN;
}

export interface SetLostAction {
    type: typeof SET_LOST;
}

export interface SetTimeAction {
    type: typeof SET_TIME;
    time: number;
}

export interface SendScoreDataAction {
    type: typeof SEND_SCORE_DATA;
    scoreData: ScoreData;
}

export interface FetchHighscoreAction {
    type: typeof FETCH_HIGHSCORES;
}

export interface SetHighscoreAction {
    type: typeof SET_HIGHSCORES;
    highscores: Highscore[];
}
