import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const GOOGLE_VERIFICATION_ID = process.env.GOOGLE_VERIFICATION_ID;

export const config = {
  matcher: ['/google:path*'],
};

export function middleware(request: NextRequest) {
  if (!GOOGLE_VERIFICATION_ID) return NextResponse.next();

  const filename = `google${GOOGLE_VERIFICATION_ID}.html`;
  const path = `/${filename}`;

  if (request.nextUrl.pathname === path) {
    return new NextResponse(`google-site-verification: ${filename}`, {
      headers: { 'Content-Type': 'text/html' },
    });
  }

  return NextResponse.next();
}
