import { configureStore } from "@reduxjs/toolkit";
import { shopifyApiSlice } from "./api/shopifySlice";
import { accountSlice } from "./features/account/accountSlice";

export const store = configureStore({
  reducer: {
    [accountSlice.name]: accountSlice.reducer,
    [shopifyApiSlice.reducerPath]: shopifyApiSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(shopifyApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
