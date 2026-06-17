import { NextResponse } from "next/server";
import { searchSite } from "@/lib/search/search";

export const runtime = "edge";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  return NextResponse.json({ results: searchSite(searchParams.get("q") || "") });
}
