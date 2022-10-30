import {AnyAction} from 'redux';
import {SET_PLAYER_NAME} from '../actions/playerActions';

export interface IPlayerReducerState {
    player: string;
}

const initialState = {
    player: '',
};

export const playerReducer = (state: IPlayerReducerState = initialState, action: AnyAction): IPlayerReducerState => {
    switch (action.type) {
        case SET_PLAYER_NAME:
            return {
                ...state,
                player: action.name,
            };
        default:
            return state;
    }
};
