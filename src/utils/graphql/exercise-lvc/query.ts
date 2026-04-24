
import { gql, DocumentNode } from '@apollo/client';

export const ADMIN_GET_LVC_STATS_QUERY: DocumentNode = gql`
query AdminGetLVCStats {
    adminGetLVCStats (input: { limit: 5, offset: 1 }) {
        baseline
        avgByExercise
        avgLovable
        avgValuable
        avgCapable
        previousAvgLovable
        previousAvgValuable
        previousAvgCapable
    }
}
`;

export const ADMIN_GET_EXERCISE_STATS_QUERY: DocumentNode = gql`
query AdminGetExerciseStats {
    adminGetExerciseStats (input: { limit: 5, offset: 1 }){
        completionCountByExercise
        currentExerciseCounts
        stalledUsers
        avgDaysBetweenExercises
        stalledSentReengage
        reengagedCount
        reengagedPercent
    }
}
`;

export const ADMIN_GET_REFLECTIONS_QUERY: DocumentNode = gql`
query AdminGetReflections {
    adminGetReflections(input: { limit: 1, offset: 1 }) {
        reflections
        total
        reflectionCountByExercise
    }
}`;