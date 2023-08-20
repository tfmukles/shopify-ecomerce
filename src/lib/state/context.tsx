"use client";

import React, { useContext } from "react";
import { LocalCart } from "./cart/cart";

type context = {
  cart: { state: LocalCart; dispatch: any };
};

const Context = React.createContext<context | null>(null);
const useProvider = () => useContext(Context) as context;
export { Context, useProvider };
