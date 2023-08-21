"use client";

import { useCartState } from "@/lib/state/cart/cart";
import { Context } from "@/lib/state/context";
import { useUserSlice } from "@/lib/state/user";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  const { state, dispatch } = useCartState();
  const { state: user, dispatch: userdispatch } = useUserSlice();

  return (
    <Context.Provider
      value={{
        cart: { state, dispatch },
        user: { state: user, dispatch: userdispatch },
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Providers;
