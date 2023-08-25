import { getCustomerAccessToken, getUserDetails } from "@/lib/shopify";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const input = await req.json();
    const token = await getCustomerAccessToken(input);
    const { customer } = await getUserDetails(token);
    return NextResponse.json({ ...customer, token });
  } catch (error: any) {
    const { message, status } = error.error;
    return NextResponse.json(message, { status });
  }
}
