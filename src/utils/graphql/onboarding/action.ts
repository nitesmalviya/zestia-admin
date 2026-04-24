import { AllOnboardingResponse } from "@/types/onboarding";
import { ADMIN_GET_ONBOARDING_STATS_QUERY } from "./query";
import { fetchGraphQLQuery } from "..";


// Get onboarding stats action
export const getAdminOnboardingStatsAction = async (): Promise<AllOnboardingResponse> => {
    const res = await fetchGraphQLQuery<AllOnboardingResponse>(
        ADMIN_GET_ONBOARDING_STATS_QUERY
    );

    return res;
};