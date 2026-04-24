export interface AllNotificationResponse {
    activeDaysDistribution: string;
    actionRateByType: string;
    avgActiveDaysPerWeek: string;
    notifActedOn30d: string;
    notifSent30d: string;
    adminGetNotificationStats: {
        totalNotifSent: number;
        totalNotifTapped: number;
        tapRate: number;
        usersActiveLastSevenDays: number;
        totalUsers: number;
        lastActiveDateCounts: string;
        notifSent30d: number;
        notifActedOn30d: number;
        avgActiveDaysPerWeek: number;
        actionRateByType: string;
        activeDaysDistribution: string;
        previousNotifSent30d: number;
        previousNotifActedOn30d: number;
        previousAvgActiveDays: number;
    }
}