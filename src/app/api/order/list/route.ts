import { getOrders } from "@/lib/shopify";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const token = cookies().get("token")?.value;
    if (token) {
      const orders = await getOrders(token);
      return NextResponse.json(orders);
    } else {
      return NextResponse.json(
        { message: "token is exapired" },
        { status: 401 },
      );
    }
  } catch (error: any) {
    return NextResponse.json({ message: error.error }, { status: 500 });
  }
}
