import {combineReducers} from 'redux';
import {playerReducer, playerReducerState} from './playerReducer';

export interface StoreState {
    playerReducer: playerReducerState;
}

export const rootReducer = combineReducers({
    playerReducer,
});
