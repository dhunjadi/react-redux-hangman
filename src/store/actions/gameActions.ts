import {IFetchPuzzleAction, ISetPuzzleAction} from './types/gameActionsTypes';

export const FETCH_PUZZLE = 'FETCH_PUZZLE';
export const SET_PUZZLE = 'SET_PUZZLE';

export const fetchPuzzleAction = (): IFetchPuzzleAction => ({
    type: FETCH_PUZZLE,
});

export const setPuzzleAction = (puzzle: string): ISetPuzzleAction => ({
    type: SET_PUZZLE,
    puzzle,
});
