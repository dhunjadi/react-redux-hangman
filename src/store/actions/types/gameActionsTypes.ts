import {FETCH_PUZZLE, SET_PUZZLE} from '../gameActions';

export interface IFetchPuzzleAction {
    type: typeof FETCH_PUZZLE;
}

export interface ISetPuzzleAction {
    type: typeof SET_PUZZLE;
    puzzle: string;
}
