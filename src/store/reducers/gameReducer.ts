import {AnyAction} from 'redux';
import {IHighscore, IPuzzle} from '../../service/game';
import {
    ADD_CORRECT_LETTER,
    ADD_INCORRECT_LETTER,
    RESET_GAME,
    SET_HIGHSCORES,
    SET_LOST,
    SET_PUZZLE,
    SET_TIME,
    SET_WIN,
} from '../actions/gameActions';

export interface IGameReducerState {
    puzzle: IPuzzle;
    correctLetters: string[];
    incorrectLetters: string[];
    win: boolean;
    lost: boolean;
    time: number;
    highscores: IHighscore[];
}

const initialState = {
    puzzle: {_id: '', content: '', author: '', tags: [], authorSlug: '', length: 0, dateAdded: '', dateModified: ''},
    correctLetters: [],
    incorrectLetters: [],
    win: false,
    lost: false,
    time: 0,
    highscores: [],
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
        case SET_WIN:
            return {
                ...state,
                win: true,
            };
        case SET_LOST:
            return {
                ...state,
                lost: true,
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
