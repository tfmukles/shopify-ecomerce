import { IUser } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserData, userRegistation } from "./userApi";

export interface userState {
  isLoading: boolean;
  isError: boolean;
  error: null | unknown;
  user?: IUser;
}

const initialState: userState = {
  isLoading: false,
  isError: false,
  error: null,
  user: {
    firstName: "",
    lastName: "",
    phone: null,
    email: "",
    acceptsMarketing: false,
  },
};

export const getUser = createAsyncThunk("fetch/user", getUserData);
export const createUser = createAsyncThunk("create/user", userRegistation);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => ({
        ...state,
        isLoading: true,
        isError: false,
        error: null,
      }))
      .addCase(getUser.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        isError: false,
        error: null,
        user: payload,
      }))
      .addCase(getUser.rejected, (state, { error }) => ({
        ...state,
        isLoading: false,
        isError: true,
        error,
      }));

    builder.addCase(createUser.fulfilled, (state, { payload }) => ({
      ...state,
      user: payload,
    }));
  },
});
