import {combineReducers} from 'redux';
import { gameReducer } from './gameReducer';
import { GameReducerState } from './types';


export interface StoreState {
    gameReducer: GameReducerState;
}

export const rootReducer = combineReducers({
    gameReducer,
});
