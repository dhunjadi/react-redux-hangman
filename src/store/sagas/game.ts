import {ForkEffect, put, call, takeLatest} from 'redux-saga/effects';
import {fetchHighscores, fetchWordToGuess} from '../../service/game';
import {Highscore, Puzzle} from '../../types';
import {setHighScores, setIsLoading, setPuzzle} from '../features/gameSlice';

export function* fetchWordToGuessSaga(): Generator<void> | void {
    const response: Puzzle = yield call(fetchWordToGuess);
    yield put(setPuzzle(response));
    yield put(setIsLoading(false));
}

export function* fetchHighscoresSaga(): Generator<void> | void {
    const response: Highscore[] = yield call(fetchHighscores);
    yield put(setHighScores(response));
    yield put(setIsLoading(false));
}

export function* watchGameSaga(): Generator<ForkEffect<never>, void> {
    yield takeLatest('game/fetchPuzzle', fetchWordToGuessSaga);
    yield takeLatest('game/fetchHighscores', fetchHighscoresSaga);
}
