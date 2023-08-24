import { RootState } from "@/redux/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const getOrderLists = createAsyncThunk<
  any,
  any,
  {
    rejectValue: AxiosError;
  }
>("get/order", async (_, { rejectWithValue, getState }) => {
  try {
    const { user } = (getState() as RootState).user;
    console.log(user);
    const { data } = await axios.get("/api/order/list", { params: "" });
    return data;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error as AxiosError);
  }
});
