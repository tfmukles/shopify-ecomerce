import { configureStore } from "@reduxjs/toolkit";
import { cartslice } from "./features/cart/cartSlice";
import { userSlice } from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [cartslice.name]: cartslice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
