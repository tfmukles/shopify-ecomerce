import { createCustomer, getCustomerAccessToken } from "@/lib/shopify";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const input = await req.json();
    const customer = await createCustomer(input);
    console.log("I am in customer", customer);
    const token = await getCustomerAccessToken(input);
    NextResponse.json({ ...customer, token });
  } catch (error: any) {
    console.log("I am in error");
    return NextResponse.json(error.error, { status: 500 });
  }
}
