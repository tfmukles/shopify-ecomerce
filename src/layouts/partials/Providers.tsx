"use client";

import { useCartState } from "@/lib/state/cart/cart";
import { Context } from "@/lib/state/context";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  const { state, dispatch } = useCartState();

  return (
    <Context.Provider value={{ cart: { state, dispatch } }}>
      {children}
    </Context.Provider>
  );
};

export default Providers;
