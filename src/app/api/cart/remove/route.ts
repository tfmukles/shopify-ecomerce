import { removeFromCart } from "@/lib/shopify";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { lineIds } = await req.json();
  const cartId = cookies().get("cartId")?.value;
  if (cartId) {
    const res = await removeFromCart(cartId, lineIds);
    return NextResponse.json(res);
  }
}
