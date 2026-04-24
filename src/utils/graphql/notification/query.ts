

import { gql, DocumentNode } from '@apollo/client';

export const ADMIN_GET_NOTIFICATION_STATS_QUERY: DocumentNode = gql`
query AdminGetNotificationStats {
    adminGetNotificationStats {
        totalNotifSent
        totalNotifTapped
        tapRate
        usersActiveLastSevenDays
        totalUsers
        lastActiveDateCounts
        notifSent30d
        notifActedOn30d
        avgActiveDaysPerWeek
        actionRateByType
        activeDaysDistribution
        previousNotifSent30d
        previousNotifActedOn30d
        previousAvgActiveDays
    }
}
    `;
