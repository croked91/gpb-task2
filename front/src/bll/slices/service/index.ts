import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IService } from "shared/api/interface";

const initialState: IService = {
  id: "",
  name: "",
  price: 0,
  content: "",
};

export const service = createSlice({
  name: "serviceDetail",
  initialState,
  reducers: {
    getServiceDetail: (state, action: PayloadAction<IService>) => {
      return (state = action.payload);
    },
    getServiceDetailTrigger: (_, action: PayloadAction<string>) => {},
  },
});

export const { getServiceDetail, getServiceDetailTrigger } = service.actions;

export default service.reducer;
