import { Cart } from "@/lib/shopify/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//fetching cart lsits
export async function getCarts(): Promise<Cart> {
  const response = await fetch("/api/cart/get", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
}

// add cart item into list
export async function addtoCart(variantId: string): Promise<Cart> {
  const res = await fetch("/api/cart/add", {
    method: "POST",
    body: JSON.stringify({
      variantId,
    }),
  });

  return await res.json();
}

//update cart product quantity
export async function updateItemQuantity({
  variantId,
  quantity,
  lineId,
}: {
  variantId: string;
  quantity: number;
  lineId: string;
}): Promise<Cart> {
  const response = await fetch("/api/cart/update", {
    method: "POST",
    body: JSON.stringify({
      variantId,
      quantity,
      lineId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
}

//REMOVE ITEM FORM CART
export const removeCartItem = createAsyncThunk(
  "remove/cart",
  async (lineIds: string[], { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/cart/remove", { lineIds });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
