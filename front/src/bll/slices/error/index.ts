import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isError: false,
};

export const isError = createSlice({
  name: "isError",
  initialState,
  reducers: {
    setIsError: (state, action: PayloadAction<boolean>) => {
      return { ...state, isError: action.payload };
    },
  },
});

export const { setIsError } = isError.actions;

export default isError.reducer;
