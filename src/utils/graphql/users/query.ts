import { gql, DocumentNode } from '@apollo/client';

export const ADMIN_GET_USER_STATS_QUERY: DocumentNode = gql`
query AdminGetUserStats {
    adminGetUserStats {
      totalUsers
      newUsersLast30Days
      activeTrialing
      activeSubscribed
      cancelled
      pastDue
      monthly
      annual
      activeUsers
      freeUsers
      cancellations30d
      downloadToPaidPercent
      platformBreakdown
      dailyActiveUsers
      userStatusBreakdown
      avgEngagementScore
      previousTotalUsers
      previousNewUsers
      previousActiveUsers
      previousMonthly
      previousAnnual
      previousCancellations30d
    }
  }
    `;

export const ADMIN_GET_USER_LIST_QUERY: DocumentNode = gql`
    query AdminListUsers($input: AdminListUsersInput!) {
    adminListUsers(input: $input) {
        totalCount
        nextToken
        users {
            userId
            userName
            email
            platform
            subscriptionStatus
            planType
            joinedAt
            lastActiveAt
            couponCode
        }
    }
}
  `;

export const ADMIN_LIST_USERS: DocumentNode = gql`
  query AdminListUsers($input: AdminListUsersInput!) {
    adminListUsers(input: $input) {
      totalCount
      nextToken
      users {
        userId
        userName
        email
        platform
        subscriptionStatus
        planType
        joinedAt
        lastActiveAt
        couponCode
      }
    }
  }
`;
