import { createCustomer, getCustomerAccessToken } from "@/lib/shopify";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const input = await req.json();
    const customer = await createCustomer(input);
    const token = await getCustomerAccessToken(input);
    return NextResponse.json({ ...customer, token });
  } catch (error: any) {
    return NextResponse.json({ message: error.error }, { status: 500 });
  }
}
