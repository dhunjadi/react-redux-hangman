import {ForkEffect, put, call, takeLatest} from 'redux-saga/effects';
import {fetchHighscores, fetchWordToGuess, IHighscore, IPuzzle} from '../../service/game';
import {FETCH_PUZZLE, setHighscoresAction, setPuzzleAction, FETCH_HIGHSCORES} from '../actions/gameActions';

export function* fetchWordToGuessSaga(): Generator<void> | void {
    const response: IPuzzle = yield call(fetchWordToGuess);
    yield put(setPuzzleAction(response));
}

export function* fetchHighscoresSaga(): Generator<void> | void {
    const response: IHighscore[] = yield call(fetchHighscores);
    yield put(setHighscoresAction(response));
}

export function* watchGameSaga(): Generator<ForkEffect<never>, void> {
    yield takeLatest(FETCH_PUZZLE, fetchWordToGuessSaga);
    yield takeLatest(FETCH_HIGHSCORES, fetchHighscoresSaga);
}
