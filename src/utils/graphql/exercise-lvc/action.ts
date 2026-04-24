
import { ADMIN_GET_EXERCISE_STATS_QUERY, ADMIN_GET_LVC_STATS_QUERY, ADMIN_GET_REFLECTIONS_QUERY } from "./query";
import { fetchGraphQLQuery } from "..";
import { AllExerciseResponse, AllLVCResponse, AllReflectionsResponse } from "@/types/exercise-lvc";


// Get LVC stats action
export const getAdminLVCStatsAction = async (): Promise<AllLVCResponse> => {
    const res = await fetchGraphQLQuery<AllLVCResponse>(
        ADMIN_GET_LVC_STATS_QUERY
    );

    return res;
};


// Get exercise stats action
export const getAdminExerciseStatsAction = async (): Promise<AllExerciseResponse> => {
    const res = await fetchGraphQLQuery<AllExerciseResponse>(
        ADMIN_GET_EXERCISE_STATS_QUERY
    );

    return res;
};

// Get reflections action
export const getAdminReflectionsAction = async (): Promise<AllReflectionsResponse> => {
    const res = await fetchGraphQLQuery<AllReflectionsResponse>(
        ADMIN_GET_REFLECTIONS_QUERY
    );

    return res;
};