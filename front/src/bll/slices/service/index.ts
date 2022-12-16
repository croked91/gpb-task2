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
    getService: (state, action: PayloadAction<IService>) => {
      return action.payload;
    },
    getServiceTrigger: (_, action: PayloadAction<string>) => {
      return;
    },
  },
});

export const { getService, getServiceTrigger } = service.actions;

export default service.reducer;
