// middleware.ts
import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) { // ✅ type added
  const url = request.nextUrl;

  // authorization logic
  const authorized = url.searchParams.get("secret") === process.env.STUDIO_SECRET;

  if (url.pathname.startsWith("/studio") && !authorized) {
    return NextResponse.rewrite(new URL("/404", request.url));
  }

  return NextResponse.next();
}