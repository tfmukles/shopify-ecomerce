import { getCollectionProducts } from "@/lib/shopify";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const pathname = req.nextUrl.pathname.split("/");
    const collectionProducts = await getCollectionProducts({
      collection: pathname[pathname.length - 1],
    });
    return NextResponse.json(collectionProducts || {});
  } catch (error: any) {
    const { message, status } = error.error;
    return NextResponse.json(message, { status });
  }
}
