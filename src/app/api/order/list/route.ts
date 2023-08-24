import { getOrders } from "@/lib/shopify";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const input = await req.json();
    const order = await getOrders(input);
    return NextResponse.json({});
  } catch (error: any) {
    return NextResponse.json({ message: error.error }, { status: 500 });
  }
}
