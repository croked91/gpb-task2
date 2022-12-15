import { all } from "redux-saga/effects";
import { watchGetServiceDetail } from "../detailsSaga";
import { watchGetAllServices } from "../servicesSaga";

export function* rootSaga() {
  yield all([watchGetAllServices(), watchGetServiceDetail()]);
}
