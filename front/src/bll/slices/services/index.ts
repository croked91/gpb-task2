import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IService } from "../../../shared/api/interface";

const initialState: IService[] = [];

export const services = createSlice({
  name: "services",
  initialState,
  reducers: {
    getServices: (state, action: PayloadAction<IService[]>) => {
      return (state = action.payload);
    },
    getServicesTrigger: () => {},
  },
});

export const { getServices, getServicesTrigger } = services.actions;

export default services.reducer;
