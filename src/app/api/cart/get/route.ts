import { getCart } from "@/lib/shopify";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    let cart;
    let cartId = cookies().get("cartId")?.value;
    if (cartId) {
      cart = await getCart(cartId);
    }
    const newcart = cart ?? {};
    console.log("I am herer");
    console.log({ newcart });
    return NextResponse.json(cart || {});
  } catch (error: any) {
    const { message, status } = error.error;
    return NextResponse.json(message, { status });
  }
}
