import { setIsError } from "bll/slices/error";
import { setIsLoading } from "bll/slices/loading";
import { getServiceDetail } from "bll/slices/service";
import { call, put, take, takeEvery } from "redux-saga/effects";
import { IService } from "shared/api/interface";
import { getServise } from "./utils";

export type TriggerPayload = {
  type: "string";
  payload: "string";
};

function* workGetServiceDetail() {
  try {
    yield put(setIsLoading(true));
    const { payload }: TriggerPayload = yield take(
      "serviceDetail/getServiceDetailTrigger"
    );
    const res: IService = yield call(getServise, payload);
    yield put(getServiceDetail(res));
    yield put(setIsLoading(false));
  } catch (e) {
    console.log(e);
    yield put(setIsError(true));
  }
}

export function* watchGetServiceDetail() {
  yield takeEvery(
    "serviceDetail/getServiceDetailTrigger",
    workGetServiceDetail
  );
}
