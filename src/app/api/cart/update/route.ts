import { updateCart } from "@/lib/shopify";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const cartId = cookies().get("cartId")?.value;
  const { lineId, variantId, quantity } = await req.json();

  if (!cartId) {
    return NextResponse.json("Missing cart ID");
  }
  const response = await updateCart(cartId, [
    { id: lineId, merchandiseId: variantId, quantity },
  ]);

  return NextResponse.json(response);
}
