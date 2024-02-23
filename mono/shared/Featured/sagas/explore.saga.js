import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { setExploreData, setExploreLoading } from '../slices/explore.slice';

function* fetchExploreData() {
  try {
    yield put(setExploreLoading(true)); // Dispatch loading action

    const response = yield call(axios.get, 'https://others.joinmyworld.live/unauth/explore/1');

    yield put(setExploreData(response.data)); // Dispatch data action
    yield put(setExploreLoading(false)); // Dispatch loading action
  } catch (e) {
    yield put({ type: 'EXPLORE_FETCH_FAILED', message: e.message });
    yield put(setExploreLoading(false)); // Dispatch loading action
  }
}

function* watchFetchExploreData() {
  yield takeLatest('EXPLORE_FETCH_REQUESTED', fetchExploreData);
}

export default watchFetchExploreData;
