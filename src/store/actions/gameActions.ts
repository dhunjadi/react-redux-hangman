import {
    IAddCorrectLetterAction,
    IAddIncorrectLetterAction,
    IFetchPuzzleAction,
    IResetGameAction,
    ISetPuzzleAction,
} from './types/gameActionsTypes';

export const FETCH_PUZZLE = 'FETCH_PUZZLE';
export const SET_PUZZLE = 'SET_PUZZLE';
export const ADD_CORRECT_LETTER = 'ADD_CORRECT_LETTER';
export const ADD_INCORRECT_LETTER = 'ADD_INCORRECT_LETTER';
export const RESET_GAME = 'RESET_GAME';

export const fetchPuzzleAction = (): IFetchPuzzleAction => ({
    type: FETCH_PUZZLE,
});

export const setPuzzleAction = (puzzle: string): ISetPuzzleAction => ({
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
