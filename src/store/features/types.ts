import {Highscore, Puzzle} from '../../types';

export interface GameSliceState {
    playerName: string;
    puzzle: Puzzle;
    correctLetters: string[];
    incorrectLetters: string[];
    isWin: boolean;
    isLost: boolean;
    time: number;
    highscores: Highscore[];
    isLoading: boolean;
}
