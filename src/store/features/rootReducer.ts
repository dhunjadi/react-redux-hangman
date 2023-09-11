import {combineReducers} from '@reduxjs/toolkit';
import {gameSlice} from './gameSlice';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    [gameSlice.name]: gameSlice.reducer,
});

export default rootReducer;
