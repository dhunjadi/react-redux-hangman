import {combineReducers} from '@reduxjs/toolkit';
import {gameSlice} from './gameSlice';

const rootReducer = combineReducers({
    [gameSlice.name]: gameSlice.reducer,
});

export default rootReducer;
