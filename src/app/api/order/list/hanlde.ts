import { addToCart, createCart, getCart } from "@/lib/shopify";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { variantId } = await req.json();
  let cartId = cookies().get("cartId")?.value;
  let cart;
  if (cartId) {
    cart = await getCart(cartId);
  }

  if (!cartId || !cart) {
    cart = await createCart();
    cartId = cart.id;
    cookies().set("cartId", cartId);
  }

  const res = await addToCart(cartId, variantId);
  return NextResponse.json(res);
}
