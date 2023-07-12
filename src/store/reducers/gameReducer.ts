import {AnyAction} from 'redux';
import {
    ADD_CORRECT_LETTER,
    ADD_INCORRECT_LETTER,
    RESET_GAME,
    SET_HIGHSCORES,
    SET_LOST,
    SET_PLAYER_NAME,
    SET_PUZZLE,
    SET_TIME,
    SET_WIN,
} from '../actions/gameActions';
import { GameReducerState } from './types';



const initialState: GameReducerState = {
    playerName: '',
    puzzle: {_id: '', content: '', author: '', tags: [], authorSlug: '', length: 0, dateAdded: '', dateModified: ''},
    correctLetters: [],
    incorrectLetters: [],
    isWin: false,
    isLost: false,
    time: 0,
    highscores: [],
};

export const gameReducer = (state: GameReducerState = initialState, action: AnyAction): GameReducerState => {
    switch (action.type) {
        case SET_PLAYER_NAME:
            return {
                ...state,
                playerName: action.name,
            };
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
        case SET_WIN:
            return {
                ...state,
                isWin: true,
            };
        case SET_LOST:
            return {
                ...state,
                isLost: true,
            };
        case SET_TIME:
            return {
                ...state,
                time: action.time,
            };
        case SET_HIGHSCORES:
            return {
                ...state,
                highscores: action.highscores,
            };
        case RESET_GAME:
            return initialState;

        default:
            return state;
    }
};
