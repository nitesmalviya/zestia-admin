import { NextRequest, NextResponse } from 'next/server';
import { PUBLIC_PATH, PRIVATE_PATH } from '@/utils/constants';
import { checkTokenExpired, clearAuthCookies, redirectToLogin } from '@/utils/proxy-services';

const PUBLIC_ROUTES = Object.values(PUBLIC_PATH);
const PRIVATE_ROUTES = Object.values(PRIVATE_PATH);

export default async function middleware(request: NextRequest): Promise<NextResponse> {
  const path = request.nextUrl.pathname;
  const idToken = request.cookies.get('id_token')?.value;

  // Check if the path matches a public route
  const isPublicRoute = PUBLIC_ROUTES.some(
    (route) => path === route || path.startsWith(route + '/')
  );

  // Check if the path matches a private route
  const isPrivateRoute = PRIVATE_ROUTES.some(
    (route) => path === route || path.startsWith(route + '/')
  );

  // --- Handle root path ---
  if (path === '/') {
    if (idToken && !checkTokenExpired(idToken)) {
      return NextResponse.redirect(new URL(PRIVATE_PATH.HOME, request.url));
    }
    return NextResponse.redirect(new URL(PUBLIC_PATH.LOGIN, request.url));
  }

  // --- Handle authenticated users ---
  if (idToken) {
    const isExpired = checkTokenExpired(idToken);

    if (isExpired) {
      // Token is expired — clear cookies and redirect to login
      return redirectToLogin(request);
    }

    // Valid token: if user is on a public route (e.g. /login), redirect to dashboard
    if (isPublicRoute) {
      return NextResponse.redirect(new URL(PRIVATE_PATH.HOME, request.url));
    }

    // Valid token and on a private route — allow access
    return NextResponse.next();
  }

  // --- Handle unauthenticated users ---
  if (isPrivateRoute) {
    // No token and trying to access a private route — redirect to login
    return redirectToLogin(request);
  }

  // Public route, no token — allow access
  return NextResponse.next();
}

// Define which paths this middleware should run on
// Exclude static assets, images, and Next.js internals
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico|css|js)).*)',
  ],
};
