import { createCustomer, getCustomerAccessToken } from "@/lib/shopify";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const input = await req.json();
  const customer = await createCustomer(input);
  const data = await getCustomerAccessToken(input);
  return NextResponse.json({});
}
