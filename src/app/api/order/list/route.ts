import { getOrders } from "@/lib/shopify";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();
    const orders = await getOrders(token);
    return NextResponse.json(orders);
  } catch (error: any) {
    return NextResponse.json({ message: error.error }, { status: 500 });
  }
}
