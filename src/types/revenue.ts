export interface RevenueStats {
    grossRevenue: number;
    storeFees: number;
    netRevenue: number;
    revenueByPlatform: string;
    trialToPaidConversions: number;
    periodDays: number;
    mrr: number;
    monthlyChurnPercent: number;
    trialToPaidPercent: number;
    trialFunnel: string;
    previousGrossRevenue: number;
    previousNetRevenue: number;
    previousMrr: number;
    previousChurnPercent: number;
    previousTrialToPaidPercent: number;
}

export interface AllRevenueResponse {
    adminGetRevenueStats: {};
    data: {
        adminGetRevenueStats: RevenueStats;
    };
}