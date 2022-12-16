import { configureStore } from "@reduxjs/toolkit";
import { rootSaga } from "bll/sagas/root-saga";
import isError from "bll/slices/error";
import isLoading from "bll/slices/loading";
import service from "bll/slices/service/index";
import services from "bll/slices/services";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    services: services,
    service: service,
    isLoading: isLoading,
    isError: isError,
  },
  middleware: [sagaMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSaga);
