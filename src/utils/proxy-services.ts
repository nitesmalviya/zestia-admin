import { PUBLIC_PATH } from './constants';
import { NextRequest, NextResponse } from 'next/server';

// Function to clear all authentication-related cookies
export const clearAuthCookies = (response: NextResponse) => {
    response.cookies.delete("id_token");
    response.cookies.delete("refresh_token");
    response.cookies.delete("access_token");
    response.cookies.delete("token");
    response.cookies.delete("user");
};

export function decodeJWT(token: string) {
    const base64Url = token.split('.')[1];

    const base64 = base64Url
        .replaceAll('-', '+')
        .replaceAll('_', '/');

    return JSON.parse(
        new TextDecoder().decode(
            Uint8Array.from(atob(base64), c => c.codePointAt(0)!)
        )
    );
}

// Redirect to the login page and clear authentication cookies
export const redirectToLogin = (request: NextRequest) => {
    const redirectResponse = NextResponse.redirect(new URL(PUBLIC_PATH.LOGIN, request.url));
    clearAuthCookies(redirectResponse);
    return redirectResponse;
};

export const checkTokenExpired = (token: string): boolean => {
    try {
        const decodedToken = decodeJWT(token);
        const expirationTime = decodedToken.exp * 1000;
        const currentTime = Date.now();
        return expirationTime < currentTime;
    } catch {
        // If decoding fails, treat the token as expired
        return true;
    }
};