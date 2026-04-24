
import { gql, DocumentNode } from '@apollo/client';

export const ADMIN_GET_ONBOARDING_STATS_QUERY: DocumentNode = gql`
query AdminGetOnboardingStats {
    adminGetOnboardingStats {
        onboardingStarted
        onboardingCompleted
        completionRate
        avgCompletionTimeMinutes
        dropOffRate
        completedToActivePercent
        onboardingFunnel
        previousOnboardingStarted
        previousOnboardingCompleted
        previousCompletionRate
        previousAvgCompletionTime
        previousDropOffRate
        previousCompletedToActive
    }
}
`;