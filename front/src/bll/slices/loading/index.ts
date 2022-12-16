import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export const isLoading = createSlice({
  name: "isLoading",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      return { ...state, isLoading: action.payload };
    },
  },
});

export const { setIsLoading } = isLoading.actions;

export default isLoading.reducer;
