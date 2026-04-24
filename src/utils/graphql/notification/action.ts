import { AllNotificationResponse } from "@/types/notification";
import { ADMIN_GET_NOTIFICATION_STATS_QUERY } from "./query";
import { fetchGraphQLQuery } from "..";


// Get onboarding stats action
export const getAdminNotificationStatsAction = async (): Promise<AllNotificationResponse> => {
    const res = await fetchGraphQLQuery<AllNotificationResponse>(
        ADMIN_GET_NOTIFICATION_STATS_QUERY
    );

    return res;
};