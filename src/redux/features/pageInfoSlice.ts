import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hasNextPage: true,
  hasPreviousPage: false,
  endCursor: "",
};

export const pageInfoSlice = createSlice({
  name: "pageInfo",
  initialState,
  reducers: {
    setPageInfo: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});
