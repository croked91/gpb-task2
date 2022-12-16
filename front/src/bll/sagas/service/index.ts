import { setIsError } from "bll/slices/error";
import { setIsLoading } from "bll/slices/loading";
import { getService } from "bll/slices/service";
import { call, put, take, takeEvery } from "redux-saga/effects";
import { IService } from "shared/api/interface";
import { getServise } from "./utils";

export type TriggerPayload = {
  type: "string";
  payload: "string";
};

function* workGetService() {
  try {
    yield put(setIsLoading(true));
    yield put(setIsError(false));
    const { payload }: TriggerPayload = yield take(
      "serviceDetail/getServiceTrigger"
    );
    const res: IService = yield call(getServise, payload);
    yield put(getService(res));
    yield put(setIsLoading(false));
  } catch (e) {
    yield put(setIsError(true));
  }
}

export function* watchGetServiceDetail() {
  yield takeEvery("serviceDetail/getServiceTrigger", workGetService);
}
