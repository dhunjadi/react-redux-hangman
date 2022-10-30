import {AnyAction} from 'redux';
import {SET_PUZZLE} from '../actions/gameActions';

export interface IGameReducerState {
    puzzle: string;
}

const initialState = {
    puzzle: '',
};

export const gameReducer = (state: IGameReducerState = initialState, action: AnyAction): IGameReducerState => {
    switch (action.type) {
        case SET_PUZZLE:
            return {
                ...state,
                puzzle: action.puzzle,
            };
        default:
            return state;
    }
};
