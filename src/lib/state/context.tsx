"use client";

import React, { useContext } from "react";
import { LocalCart } from "./cart/cart";
import { IUser } from "./user";

type context = {
  cart: { state: LocalCart; dispatch: any };
  user: { state: IUser; dispatch: any };
};

const Context = React.createContext<context | null>(null);
const useProvider = () => useContext(Context) as context;
export { Context, useProvider };
