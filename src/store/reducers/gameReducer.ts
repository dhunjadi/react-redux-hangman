import {AnyAction} from 'redux';
import {ADD_CORRECT_LETTER, ADD_INCORRECT_LETTER, RESET_GAME, SET_PUZZLE} from '../actions/gameActions';

export interface IGameReducerState {
    puzzle: string;
    correctLetters: string[];
    incorrectLetters: string[];
}

const initialState = {
    puzzle: '',
    correctLetters: [],
    incorrectLetters: [],
};

export const gameReducer = (state: IGameReducerState = initialState, action: AnyAction): IGameReducerState => {
    switch (action.type) {
        case SET_PUZZLE:
            return {
                ...state,
                puzzle: action.puzzle,
            };
        case ADD_CORRECT_LETTER:
            return {
                ...state,
                correctLetters: [...state.correctLetters, action.letter],
            };
        case ADD_INCORRECT_LETTER:
            return {
                ...state,
                incorrectLetters: [...state.incorrectLetters, action.letter],
            };
        case RESET_GAME:
            return initialState;

        default:
            return state;
    }
};
