import { all } from "redux-saga/effects";
import { watchGetServiceDetail } from "../service";
import { watchGetAllServices } from "../services";

export function* rootSaga() {
  yield all([watchGetAllServices(), watchGetServiceDetail()]);
}
