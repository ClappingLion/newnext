import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export { default } from "next-auth/middleware";

export async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret: process.env.JWT_SECRET });
  const pathname = req.nextUrl.pathname;

  // console.log("middleware session", session);

  if (req.nextUrl.pathname.startsWith("/user") && !session) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  if (pathname.startsWith("/admin") && session?.role !== "Admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (pathname.startsWith("/auth/login") && session) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
}
//export const config = { matcher: ["/admin/:path*", "/user"] };
