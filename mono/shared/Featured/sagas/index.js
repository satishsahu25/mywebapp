import { all } from "redux-saga/effects";
import watchFetchPopUp from "./popUp.saga";
import watchFetchExploreData from './explore.saga'

export default function* rootSaga() {
    yield all([
        watchFetchPopUp(),
        watchFetchExploreData(),
    ]);
    }
