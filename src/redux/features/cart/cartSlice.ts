import { Cart } from "@/lib/shopify/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addtoCart, getCarts, updateItemQuantity } from "./cartApi";

interface cartState {
  isLoading: boolean;
  isError: boolean;
  error: null | unknown;
  cart?: Cart;
}

const initialState: cartState = {
  isLoading: false,
  isError: false,
  error: null,
};

export const fetchCarts = createAsyncThunk("fetch/cart", getCarts);

export const addCartItem = createAsyncThunk("add/cart", addtoCart);

export const updateProductQuantity = createAsyncThunk(
  "update/quantity",
  updateItemQuantity,
);

export const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchCarts.pending, (state) => ({
        ...state,
        isLoading: false,
        isError: false,
        error: null,
      }))
      .addCase(fetchCarts.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        isError: false,
        error: null,
        cart: payload,
      }))
      .addCase(fetchCarts.rejected, (state, { payload, error }) => ({
        ...state,
        isLoading: false,
        isError: true,
        error: error,
      }));
    builder.addCase(updateProductQuantity.fulfilled, (state, { payload }) => {
      return {
        ...state,
        cart: payload,
      };
    });
  },
});
