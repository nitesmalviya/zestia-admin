
import { gql, DocumentNode } from '@apollo/client';

export const ADMIN_GET_REVENUE_STATS_QUERY: DocumentNode = gql`
query AdminGetRevenueStats {
    adminGetRevenueStats {
        grossRevenue
        storeFees
        netRevenue
        revenueByPlatform
        trialToPaidConversions
        periodDays
        mrr
        monthlyChurnPercent
        trialToPaidPercent
        trialFunnel
        previousGrossRevenue
        previousNetRevenue
        previousMrr
        previousChurnPercent
        previousTrialToPaidPercent
    }
}
    `;
