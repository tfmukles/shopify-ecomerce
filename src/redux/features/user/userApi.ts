import { IUser } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const getUser = createAsyncThunk<
  IUser,
  IUser,
  {
    rejectValue: AxiosError;
  }
>("get/customer", async (formData: IUser, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(`/api/customer/login`, formData);
    return data;
  } catch (error) {
    return rejectWithValue(error as AxiosError);
  }
});

export const createUser = createAsyncThunk(
  "create/customer",
  async (formData: IUser, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/api/customer/register`, formData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
