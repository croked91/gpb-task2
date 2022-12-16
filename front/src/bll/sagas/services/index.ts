import { setIsError } from "bll/slices/error";
import { setIsLoading } from "bll/slices/loading";
import { getServices } from "bll/slices/services";
import { call, put, takeEvery } from "redux-saga/effects";
import { IService } from "shared/api/interface";
import { getServises } from "./utils";

function* workGetAllServices() {
  try {
    yield put(setIsLoading(true));
    yield put(setIsError(false));
    const res: IService[] = yield call(getServises);
    yield put(getServices(res));
    yield put(setIsLoading(false));
  } catch (e) {
    yield put(setIsError(true));
  }
}

export function* watchGetAllServices() {
  yield takeEvery("services/getServicesTrigger", workGetAllServices);
}
