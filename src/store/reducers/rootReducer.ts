import {combineReducers} from 'redux';
import {gameReducer, IGameReducerState} from './gameReducer';
import {playerReducer, IPlayerReducerState} from './playerReducer';

export interface StoreState {
    playerReducer: IPlayerReducerState;
    gameReducer: IGameReducerState;
}

export const rootReducer = combineReducers({
    playerReducer,
    gameReducer,
});
