import { IUser } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { createUser, getUser } from "./userApi";

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
  user:
    typeof window === "undefined"
      ? {
          firstName: "",
          lastName: "",
          email: "",
          acceptsMarketing: false,
          phone: null,
          id: "",
        }
      : JSON.parse(localStorage.getItem("user") || "{}"),
};

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
      .addCase(getUser.rejected, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          isError: true,
          error: payload?.response?.data,
        };
      });

    builder.addCase(createUser.fulfilled, (state, { payload }) => ({
      ...state,
      user: payload,
    }));
  },
});
