import { AllRevenueResponse } from "@/types/revenue";
import { ADMIN_GET_REVENUE_STATS_QUERY } from "./query";
import { fetchGraphQLQuery } from "..";


// Get revenue stats action
export const getAdminRevenueStatsAction = async (): Promise<AllRevenueResponse> => {
    const res = await fetchGraphQLQuery<AllRevenueResponse>(
        ADMIN_GET_REVENUE_STATS_QUERY
    );

    return res;
};