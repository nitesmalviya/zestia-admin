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

export const getUsersStats = async (): Promise<AllUsersResponse> => {
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

