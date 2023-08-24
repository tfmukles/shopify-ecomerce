import { configureStore } from "@reduxjs/toolkit";
import { cartslice } from "./features/cart/cartSlice";
import { orderSlice } from "./features/order/orderSlice.";
import { userSlice } from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [cartslice.name]: cartslice.reducer,
    [orderSlice.name]: orderSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production" || true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
