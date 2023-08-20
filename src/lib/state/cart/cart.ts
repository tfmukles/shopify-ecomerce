import { Cart } from "@/lib/shopify/types";
import { useReducer } from "react";

export interface LocalCart {
  isLoading: boolean;
  isError: boolean;
  error: string;
  cart?: Cart;
}

const initailState: LocalCart = {
  isLoading: false,
  isError: false,
  error: "",
};

function reducer(
  state: LocalCart,
  action: { type: string; payload: unknown },
): LocalCart {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: "",
      };

    case "success":
      return {
        ...state,
        isLoading: false,
        isError: false,
        error: "",
        cart: { ...(action.payload as any) } as Cart,
      };

    case "update":
      return {
        ...state,
        cart: action.payload as Cart,
      };

    case "remove":
      return {
        ...state,
        cart: action.payload as Cart,
      };

    case "error":
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload as string,
      };
  }

  return state;
}

export const useCartState = () => {
  const [state, dispatch] = useReducer(reducer, initailState);
  return {
    state,
    dispatch,
  };
};
