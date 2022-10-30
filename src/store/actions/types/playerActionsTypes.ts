import {SET_PLAYER_NAME} from '../playerActions';

export interface ISetPlayerActionAction {
    type: typeof SET_PLAYER_NAME;
    name: string;
}
