import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { setPopupData, setPopupLoading } from '../slices/popUp.slice';

function* fetchPopUp() {
  try {
    yield put(setPopupLoading(true)); // Dispatch loading action

    const response1 = yield call(axios.get, 'https://others.joinmyworld.live/cat/video');

    const response2 = yield call(axios.get, 'https://others.joinmyworld.live/cat/sub/');

    yield put(setPopupData({ video: response1.data, sub: response2.data })); // Dispatch data action
    yield put(setPopupLoading(false)); // Dispatch loading action
  } catch (e) {
    yield put({ type: 'POP_UP_FETCH_FAILED', message: e.message });
    yield put(setPopupLoading(false)); // Dispatch loading action
  }
}

function* watchFetchPopUp() {
  yield takeLatest('POP_UP_FETCH_REQUESTED', fetchPopUp);
}

export default watchFetchPopUp;
