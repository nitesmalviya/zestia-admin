'use server';

import { fetchGraphQLQuery } from '..';
import { ADMIN_GET_USER } from './query';
import { ADMIN_LIST_USERS } from '../users/query';
import type { AdminListUser, AdminDetailUser, UserLookupResult } from '@/types/dashboard';

// ─── helpers ────────────────────────────────────────────────────────────────

function fmtDate(iso: string | null | undefined): string {
    if (!iso) return '—';
    try {
        return new Date(iso).toLocaleDateString('en-US', {
            month: 'short', day: 'numeric', year: 'numeric',
        });
    } catch {
        return '—';
    }
}

function safeParse<T>(raw: string | null | undefined, fallback: T): T {
    try {
        if (!raw) return fallback;
        return JSON.parse(raw) as T;
    } catch {
        return fallback;
    }
}

function mapStatus(status: string | null | undefined): string {
    if (!status) return 'Free';
    const s = status.toLowerCase();
    if (s === 'active' || s === 'monthly paid' || s === 'monthly_paid') return 'Monthly Paid';
    if (s === 'annual' || s === 'annual paid' || s === 'annual_paid') return 'Annual Paid';
    if (s === 'trialing' || s === 'trial') return 'Trial';
    return 'Free';
}

// ─── Search action ───────────────────────────────────────────────────────────

export async function searchUsers(query: string): Promise<AdminListUser[]> {
    if (!query.trim()) return [];
    const res = await fetchGraphQLQuery<{
        adminListUsers: { totalCount: number; nextToken: string | null; users: AdminListUser[] };
    }>(
        ADMIN_LIST_USERS,
        { input: { search: query.trim(), limit: 10, offset: 1 } }
    );
    return res?.adminListUsers?.users ?? [];
}

// ─── Get single user action ──────────────────────────────────────────────────

export async function getUserDetail(userId: string): Promise<UserLookupResult | null> {
    if (!userId) return null;

    const res = await fetchGraphQLQuery<{ adminGetUser: AdminDetailUser }>(
        ADMIN_GET_USER,
        { userId }
    );

    const u: AdminDetailUser = res?.adminGetUser ?? null;
    if (!u) return null;

    const lvcScores = safeParse<{ lovable?: number; valuable?: number; capable?: number } | null>(
        u.lvcScores,
        null
    );

    return {
        id: u.userId ?? '',
        name: u.userName ?? '—',
        email: u.email ?? '—',
        platform: u.platform ?? '—',
        status: mapStatus(u.subscriptionStatus),
        couponUsed: u.couponCode ?? '—',
        joined: fmtDate(u.accountCreatedAt),
        lastActive: fmtDate(u.lastActiveAt),
        currentExercise: u.currentExercise ?? '—',
        lastCompleted: u.lastExerciseCompleted ?? '—',
        lovableScore: lvcScores?.lovable != null ? lvcScores.lovable.toFixed(1) : '—',
        valuableScore: lvcScores?.valuable != null ? lvcScores.valuable.toFixed(1) : '—',
        capableScore: lvcScores?.capable != null ? lvcScores.capable.toFixed(1) : '—',
        subscriberSince: fmtDate(u.accountCreatedAt),
    };
}
