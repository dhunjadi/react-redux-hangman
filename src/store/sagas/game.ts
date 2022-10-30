import {ForkEffect, put, call, takeLatest} from 'redux-saga/effects';
import {fetchWordToGuess, IWordToGuess} from '../../service/game';
import {FETCH_PUZZLE, setPuzzleAction} from '../actions/gameActions';

export function* fetchWordToGuessSaga(): Generator<void> | void {
    const response: IWordToGuess = yield call(fetchWordToGuess);
    yield put(setPuzzleAction(response.content));
}

export function* watchGameSaga(): Generator<ForkEffect<never>, void> {
    yield takeLatest(FETCH_PUZZLE, fetchWordToGuessSaga);
}
