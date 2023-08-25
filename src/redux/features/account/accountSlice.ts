import { IUser } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IUser = {
  acceptsMarketing: false,
  id: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  token: "",
};

const setInitalState = () => {
  const state =
    typeof window === "undefined"
      ? initialState
      : localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") ?? "")
      : initialState;
  return state;
};

export const accountSlice = createSlice({
  name: "account",
  initialState: setInitalState() as IUser,
  reducers: {
    setUserDetials: (state, { payload }) => ({ ...state, ...payload }),
  },
});

export const { setUserDetials } = accountSlice.actions;
