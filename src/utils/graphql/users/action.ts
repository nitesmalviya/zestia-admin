import { AllUsersResponse, usersResponse } from "@/types/user";
import { ADMIN_GET_USER_LIST_QUERY, ADMIN_GET_USER_STATS_QUERY } from "./query";
import { fetchGraphQLQuery } from "..";


// Get all admin stats action
export const getAdminUsersStatsAction = async (): Promise<AllUsersResponse> => {
    const res = await fetchGraphQLQuery<AllUsersResponse>(
        ADMIN_GET_USER_STATS_QUERY
    );

    return res;
};

export const getUsersStats = async (p0: { offset: number; limit: number; }): Promise<AllUsersResponse> => {
    const res = await fetchGraphQLQuery<AllUsersResponse>(
        ADMIN_GET_USER_STATS_QUERY
    );

    return res;
};

// Get all userlist action
export const getAdminUsersListAction = async (variables: {
    input: {
        limit: number
    }
}): Promise<usersResponse> => {
    const res = await fetchGraphQLQuery<usersResponse>(
        ADMIN_GET_USER_LIST_QUERY,
        variables
    );

    return res;
};


// ─── Lightweight pagination action (client-callable) ─────────────────────────

export async function fetchUsersPage({ limit = 5, offset = 1, search = '' }: { limit?: number; offset?: number; search?: string }): Promise<{ rows: string[][]; totalCount: number; nextToken: string | null }> {
    const res = await fetchGraphQLQuery<{
        adminListUsers: { totalCount: number; nextToken: string | null; users: AdminListUser[] };
    }>(ADMIN_LIST_USERS, { input: { search: search || null, limit, offset } });

    const users: AdminListUser[] = res?.adminListUsers?.users ?? [];
    const rows: string[][] = users.map((user) => [
        user.userName ?? '—',
        user.platform ?? '—',
        user.subscriptionStatus ?? '—',
        fmtDate(user.joinedAt),
        fmtDate(user.lastActiveAt),
        user.userId ?? '',
    ]);

    return {
        rows,
        totalCount: res?.adminListUsers?.totalCount ?? 0,
        nextToken: res?.adminListUsers?.nextToken ?? null,
    };
}