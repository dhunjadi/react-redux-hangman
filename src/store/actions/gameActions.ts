import {IPuzzle, IScoreData} from '../../service/game';
import {
    IAddCorrectLetterAction,
    IAddIncorrectLetterAction,
    IFetchPuzzleAction,
    IResetGameAction,
    ISendScoreDataAction,
    ISetLostAction,
    ISetPuzzleAction,
    ISetTimeAction,
    ISetWinAction,
} from './types/gameActionsTypes';

export const FETCH_PUZZLE = 'FETCH_PUZZLE';
export const SET_PUZZLE = 'SET_PUZZLE';
export const ADD_CORRECT_LETTER = 'ADD_CORRECT_LETTER';
export const ADD_INCORRECT_LETTER = 'ADD_INCORRECT_LETTER';
export const RESET_GAME = 'RESET_GAME';
export const SET_WIN = 'SET_WIN';
export const SET_LOST = 'SET_LOST';
export const SET_TIME = 'SET_TIME';
export const SEND_SCORE_DATA = 'SEND_SCORE_DATA';

export const fetchPuzzleAction = (): IFetchPuzzleAction => ({
    type: FETCH_PUZZLE,
});

export const setPuzzleAction = (puzzle: IPuzzle): ISetPuzzleAction => ({
    type: SET_PUZZLE,
    puzzle,
});

export const addCorrectLetterAction = (letter: string): IAddCorrectLetterAction => ({
    type: ADD_CORRECT_LETTER,
    letter,
});

export const addIncorrectLetterAction = (letter: string): IAddIncorrectLetterAction => ({
    type: ADD_INCORRECT_LETTER,
    letter,
});

export const resetGameAction = (): IResetGameAction => ({
    type: RESET_GAME,
});

export const setWinAction = (): ISetWinAction => ({
    type: SET_WIN,
});

export const setLostAction = (): ISetLostAction => ({
    type: SET_LOST,
});

export const setTimeAction = (time: number): ISetTimeAction => ({
    type: SET_TIME,
    time,
});

export const sendScoreDataAction = (scoreData: IScoreData): ISendScoreDataAction => ({
    type: SEND_SCORE_DATA,
    scoreData,
});
