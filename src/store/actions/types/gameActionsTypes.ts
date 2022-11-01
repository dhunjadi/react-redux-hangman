import {IHighscore, IPuzzle, IScoreData} from '../../../service/game';
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
} from '../gameActions';

export interface IFetchPuzzleAction {
    type: typeof FETCH_PUZZLE;
}

export interface ISetPuzzleAction {
    type: typeof SET_PUZZLE;
    puzzle: IPuzzle;
}

export interface IAddCorrectLetterAction {
    type: typeof ADD_CORRECT_LETTER;
    letter: string;
}

export interface IAddIncorrectLetterAction {
    type: typeof ADD_INCORRECT_LETTER;
    letter: string;
}

export interface IResetGameAction {
    type: typeof RESET_GAME;
}

export interface ISetWinAction {
    type: typeof SET_WIN;
}

export interface ISetLostAction {
    type: typeof SET_LOST;
}

export interface ISetTimeAction {
    type: typeof SET_TIME;
    time: number;
}

export interface ISendScoreDataAction {
    type: typeof SEND_SCORE_DATA;
    scoreData: IScoreData;
}

export interface IFetchHighscoreAction {
    type: typeof FETCH_HIGHSCORES;
}

export interface ISetHighscoreAction {
    type: typeof SET_HIGHSCORES;
    highscores: IHighscore[];
}
