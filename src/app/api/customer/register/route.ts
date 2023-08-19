import { createCustomer } from "@/lib/shopify";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const input = await req.json();
  const { data } = await createCustomer(input);
  return NextResponse.json(data);
}
