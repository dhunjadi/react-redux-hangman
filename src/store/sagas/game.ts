import {ForkEffect, put, call, takeLatest} from 'redux-saga/effects';
import {fetchHighscores, fetchWordToGuess} from '../../service/game';
import {FETCH_PUZZLE, setHighscoresAction, setPuzzleAction, FETCH_HIGHSCORES, setIsLoadingAction} from '../actions/gameActions';
import {Highscore, Puzzle} from '../../types';

export function* fetchWordToGuessSaga(): Generator<void> | void {
    yield put(setIsLoadingAction(true));
    const response: Puzzle = yield call(fetchWordToGuess);
    yield put(setPuzzleAction(response));
    yield put(setIsLoadingAction(false));
}

export function* fetchHighscoresSaga(): Generator<void> | void {
    yield put(setIsLoadingAction(true));
    const response: Highscore[] = yield call(fetchHighscores);
    yield put(setHighscoresAction(response));
    yield put(setIsLoadingAction(false));
}

export function* watchGameSaga(): Generator<ForkEffect<never>, void> {
    yield takeLatest(FETCH_PUZZLE, fetchWordToGuessSaga);
    yield takeLatest(FETCH_HIGHSCORES, fetchHighscoresSaga);
}
