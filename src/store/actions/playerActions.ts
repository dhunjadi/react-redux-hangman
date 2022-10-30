import {ISetPlayerActionAction} from './types/playerActionsTypes';

export const SET_PLAYER_NAME = 'SET_PLAYER_NAME';

export const setPlayerNameAction = (name: string): ISetPlayerActionAction => ({
    type: SET_PLAYER_NAME,
    name,
});
