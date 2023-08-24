import { createSlice } from "@reduxjs/toolkit";
import { getOrderLists } from "./orderApi";

interface initialState {
  isLoading: boolean;
  isError: boolean;
  error: null | unknown;
  order?: any;
}

const initialState: initialState = {
  isLoading: false,
  isError: false,
  error: null,
  order: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getOrderLists.pending, (state, { payload }) => ({
        ...state,
        isLoading: true,
        isError: false,
        order: [],
        error: null,
      }))
      .addCase(getOrderLists.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        isError: false,
        error: null,
        order: payload,
      }))
      .addCase(getOrderLists.rejected, (state, { payload, error }) => ({
        ...state,
        isLoading: false,
        isError: true,
        error: error,
        order: [],
      }));
  },
});
