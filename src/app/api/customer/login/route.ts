import { getCustomerAccessToken, getUserDetails } from "@/lib/shopify";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const input = await req.json();
    const { data } = await getCustomerAccessToken(input);
    const token =
      data?.customerAccessTokenCreate?.customerAccessToken.accessToken;
    const { customer } = await getUserDetails(token);
    return NextResponse.json({ ...customer, token });
  } catch (error: any) {
    return NextResponse.json(error.error, { status: 500 });
  }
}
