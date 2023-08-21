import { getCart } from "@/lib/shopify";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let cart;
  let cartId = cookies().get("cartId")?.value;
  if (cartId) {
    cart = await getCart(cartId);
  }

  return NextResponse.json(cart ?? {});
}
