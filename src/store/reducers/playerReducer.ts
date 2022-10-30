import {AnyAction} from 'redux';

export interface playerReducerState {
    player: {
        name: string;
    };
}

const initialState = {
    player: {
        name: '',
    },
};

export const playerReducer = (state: playerReducerState = initialState, action: AnyAction): playerReducerState => {
    switch (action.type) {
        default:
            return state;
    }
};
