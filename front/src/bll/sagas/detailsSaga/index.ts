import { setIsLoading } from "bll/slices/loading";
import { getServiceDetail } from "bll/slices/service";
import { call, put, take, takeEvery } from "redux-saga/effects";
import { IService } from "shared/api/interface";
import { getServise } from "./utils";

export type Take = {
  type: "string";
  payload: "string";
};

function* workGetServiceDetail() {
  yield put(setIsLoading(true));
  const { payload }: Take = yield take("serviceDetail/getServiceDetailTrigger");
  const res: IService = yield call(getServise, payload);
  yield put(getServiceDetail(res));
  yield put(setIsLoading(false));
}

export function* watchGetServiceDetail() {
  yield takeEvery(
    "serviceDetail/getServiceDetailTrigger",
    workGetServiceDetail
  );
}
