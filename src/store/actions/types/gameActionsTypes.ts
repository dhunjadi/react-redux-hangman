import {ADD_CORRECT_LETTER, ADD_INCORRECT_LETTER, FETCH_PUZZLE, RESET_GAME, SET_PUZZLE} from '../gameActions';

export interface IFetchPuzzleAction {
    type: typeof FETCH_PUZZLE;
}

export interface ISetPuzzleAction {
    type: typeof SET_PUZZLE;
    puzzle: string;
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
