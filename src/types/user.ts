export type UserRecord = {
  id: string;
  name: string;
  email: string;
  platform: string;
  status: 'Free' | 'Trial' | 'Monthly Paid' | 'Annual Paid';
  couponUsed: string;
  joined: string;
  lastActive: string;
  currentExercise: string;
  lastCompleted: string;
  lovableScore: string;
  valuableScore: string;
  capableScore: string;
  subscriberSince: string;
};

export interface AdminUserStats {
  monthlyChurn: string;
  monthlyChurnPercent: string;
  mrr: string;
  netRevenue: string;
  mrrDelta: string;
  newUsers: string;
  totalUsers?: number;
  newUsersLast30Days?: number;
  activeTrialing?: number;
  activeSubscribed?: number;
  cancelled?: number;
  pastDue?: number;
  monthly?: number;
  annual?: number;
  activeUsers?: number;
  freeUsers?: number;
  cancellations30d?: number;
  downloadToPaidPercent?: number;
  /** JSON string: e.g. '{"iOS":3,"Android":3,"Web":0}' */
  platformBreakdown?: string;
  /** JSON string: e.g. '[{"date":"2025-05","count":0},...]' */
  dailyActiveUsers?: string;
  /** JSON string: e.g. '{"free":5,"trial":3,...}' */
  userStatusBreakdown?: string;
  avgEngagementScore?: number;
  previousTotalUsers?: number | null;
  previousNewUsers?: number | null;
  previousActiveUsers?: number | null;
  previousMonthly?: number | null;
  previousAnnual?: number | null;
  previousCancellations30d?: number | null;

  totalCount: number;
  nextToken: string;

}

export interface usersResponse {
  adminListUsers: {
    totalCount: number;
    nextToken: string | null;
    users: AdminListUser[];
  };
}

export interface AllUsersResponse {
  adminGetUserStats: AdminUserStats
}


export interface AdminListUser {
  userId?: string;
  userName?: string;
  email?: string;
  platform?: string | null;
  subscriptionStatus?: string | null;
  planType?: string | null;
  joinedAt?: string | null;
  lastActiveAt?: string | null;
  couponCode?: string | null;
}

export interface ExecutiveSnapshotApiData {
  userStats: AdminUserStats;
  revenueStats: AdminRevenueStats;
  platformBreakdown: Record<string, number>;
  dailyActiveUsers: Array<{ date: string; count: number }>;
  userStatusBreakdown: {
    free: number;
    trial: number;
    monthlyPaid: number;
    annualPaid: number;
    cancellations30d: number;
  };
  revenueByPlatform: Record<string, number>;
  trialFunnel: {
    trialsStarted: number;
    completedTrial: number;
    convertedToPaid: number;
  };
  deltas: {
    activeUsers: number | null;
    newUsers: number | null;
    totalUsers: number | null;
    monthly: number | null;
    annual: number | null;
    cancellations30d: number | null;
    mrr: number | null;
    netRevenue: number | null;
    grossRevenue: number | null;
    monthlyChurn: number | null;
    trialToPaid: number | null;
  };
}