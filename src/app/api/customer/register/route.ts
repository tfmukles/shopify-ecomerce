import { createCustomer, getCustomerAccessToken } from "@/lib/shopify";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const input = await req.json();
    const customer = await createCustomer(input);
    const token = await getCustomerAccessToken(input);
    cookies().set("token", token);
    return NextResponse.json({ ...customer, token });
  } catch (error: any) {
    const { message, status } = error.error;
    return NextResponse.json(message, { status });
  }
}
