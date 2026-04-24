export interface AllOnboardingResponse {
    completedToActivePercent: any;
    dropOffRate: any;
    avgCompletionTimeMinutes: any;
    completionRate: any;
    onboardingCompleted: string;
    onboardingStarted: string;
    onboardingFunnel: any;
    adminGetOnboardingStats: {
        onboardingStarted: number;
        onboardingCompleted: number;
        completionRate: number;
        avgCompletionTimeMinutes: number;
        dropOffRate: number;
        completedToActivePercent: number;
        onboardingFunnel: string;
        previousOnboardingStarted: number;
        previousOnboardingCompleted: number;
        previousCompletionRate: number;
        previousAvgCompletionTime: number | null;
        previousDropOffRate: number;
        previousCompletedToActive: number | null;
    };
}