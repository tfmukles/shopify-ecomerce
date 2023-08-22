import { Cart } from "@/lib/shopify/types";

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
