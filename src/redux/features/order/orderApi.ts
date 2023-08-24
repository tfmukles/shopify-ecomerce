import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const getOrderLists = createAsyncThunk<
  any,
  any,
  {
    rejectValue: AxiosError;
  }
>("get/order", async (token, { rejectWithValue, getState }) => {
  try {
    const { data } = await axios.post("/api/order/list", { token });
    console.log({ data });
  } catch (error) {
    console.log(error);
    return rejectWithValue(error as AxiosError);
  }
});
