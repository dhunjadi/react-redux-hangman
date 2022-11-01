import {ForkEffect, put, call, takeLatest} from 'redux-saga/effects';
import {fetchWordToGuess, IPuzzle, sendScoreData} from '../../service/game';
import {FETCH_PUZZLE, SEND_SCORE_DATA, setPuzzleAction} from '../actions/gameActions';

export function* fetchWordToGuessSaga(): Generator<void> | void {
    const response: IPuzzle = yield call(fetchWordToGuess);
    yield put(setPuzzleAction(response));
}

export function* sendScoreDataSaga(): Generator<void> | void {
    const response = yield call(sendScoreData);
    /* yield put(setPuzzleAction(response)); */
}

export function* watchGameSaga(): Generator<ForkEffect<never>, void> {
    yield takeLatest(FETCH_PUZZLE, fetchWordToGuessSaga);
    yield takeLatest(SEND_SCORE_DATA, sendScoreDataSaga);
}
