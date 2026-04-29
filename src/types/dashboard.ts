import { CSSProperties, ReactNode, ElementType } from 'react';

export interface PanelProps {
  children: ReactNode;
  style?: CSSProperties;
}

export interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  delta: string;
}

export interface ExecutiveStatCardProps {
  icon: ElementType;
  label: string;
  value: string;
  delta?: number;
  current?: number;
  previous?: number;
  deltaLabel?: string;
  invertDelta?: boolean;
}

export interface PanelHeaderProps {
  title: string;
  subtitle?: string;
  right?: ReactNode;
}

export interface KeyValueRowProps {
  label: string;
  value: string;
  labelColor?: string;
  valueColor?: string;
}

export interface ProgressRowProps {
  label: string;
  value: string;
  progress: number;
  tone?: 'green' | 'gold';
}

// ─── Executive Snapshot API types ───────────────────────────────────────────

export interface AdminUserStats {
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
}

export interface AdminRevenueStats {
  grossRevenue?: number;
  storeFees?: number;
  netRevenue?: number;
  /** JSON string: e.g. '{"unknown":1148.96}' */
  revenueByPlatform?: string;
  trialToPaidConversions?: number;
  periodDays?: number;
  mrr?: number;
  monthlyChurnPercent?: number;
  trialToPaidPercent?: number;
  /** JSON string: e.g. '{"trialsStarted":3,"completedTrial":0,"convertedToPaid":0}' */
  trialFunnel?: string;
  previousGrossRevenue?: number | null;
  previousNetRevenue?: number | null;
  previousMrr?: number | null;
  previousChurnPercent?: number | null;
  previousTrialToPaidPercent?: number | null;
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

// ─── Onboarding API types ─────────────────────────────────────────────

export interface AdminOnboardingStats {
  onboardingStarted?: number;
  onboardingCompleted?: number;
  completionRate?: number;
  avgCompletionTimeMinutes?: number;
  dropOffRate?: number;
  completedToActivePercent?: number;
  /** JSON string: e.g. '{"survey1":15,"courseCreationSurvey":13,"onboardingVideo":9,"paymentPage":9}' */
  onboardingFunnel?: string;
  previousOnboardingStarted?: number | null;
  previousOnboardingCompleted?: number | null;
  previousCompletionRate?: number | null;
  previousAvgCompletionTime?: number | null;
  previousDropOffRate?: number | null;
  previousCompletedToActive?: number | null;
}

export interface OnboardingFunnelItem {
  label: string;
  value: number;
  progress: number;
}

export interface OnboardingApiData {
  raw: AdminOnboardingStats;
  funnel: {
    survey1: number;
    courseCreationSurvey: number;
    onboardingVideo: number;
    paymentPage: number;
  };
  funnelItems: OnboardingFunnelItem[];
  deltas: {
    onboardingStarted: number | null;
    onboardingCompleted: number | null;
    completionRate: number | null;
    avgCompletionTime: number | null;
    dropOffRate: number | null;
    completedToActive: number | null;
  };
}

// ─── Notifications API types ────────────────────────────────────────

export interface AdminNotificationStats {
  totalNotifSent?: number;
  totalNotifTapped?: number;
  tapRate?: number;
  usersActiveLastSevenDays?: number;
  totalUsers?: number;
  /** JSON string: e.g. '{"2026-04-08":7,"2026-04-06":1}' */
  lastActiveDateCounts?: string;
  notifSent30d?: number;
  notifActedOn30d?: number;
  avgActiveDaysPerWeek?: number;
  /** JSON string array: e.g. '[]' or '[{"type":"daily","rate":42}]' */
  actionRateByType?: string;
  /** JSON string: e.g. '{"sevenDays":0,"fiveToSixDays":0,"threeToFourDays":0,"zeroDays":18}' */
  activeDaysDistribution?: string;
  previousNotifSent30d?: number | null;
  previousNotifActedOn30d?: number | null;
  previousAvgActiveDays?: number | null;
}

export interface NotifActionRateItem {
  type: string;
  rate: number;
}

export interface NotificationApiData {
  raw: AdminNotificationStats;
  lastActiveDateCounts: Record<string, number>;
  actionRateByType: NotifActionRateItem[];
  activeDaysDistribution: {
    sevenDays: number;
    fiveToSixDays: number;
    threeToFourDays: number;
    zeroDays: number;
  };
  deltas: {
    notifSent30d: number | null;
    notifActedOn30d: number | null;
    avgActiveDays: number | null;
  };
}

// ─── Users API types ─────────────────────────────────────────────────────────

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

export interface UsersApiData {
  kpis: {
    total: { value: string; delta: string };
    new: { value: string; delta: string };
    active: { value: string; delta: string };
    monthly: { value: string; delta: string };
    annual: { value: string; delta: string };
    cancellations: { value: string; delta: string };
  };
  platformSplit: Array<{ label: string; pct: string; value: string; color: string }>;
  conicGradient: string;
  statusBreakdown: Array<{ label: string; value: string }>;
  /** Each row: [userName, platform, subscriptionStatus, joinedAt, lastActiveAt] */
  rows: string[][];
  totalCount: number;
  nextToken: string | null;
}

// ─── Revenue API types ───────────────────────────────────────────────────────

export interface RevenueApiData {
  kpis: {
    gross: string;
    fees: string;
    net: string;
    mrr: string;
    conv: string;
    churn: string;
  };
  deltas: {
    gross: string;
    net: string;
    mrr: string;
    churn: string;
    conv: string;
  };
  platform: Array<{ label: string; value: string; progress: number; tone: 'green' | 'gold' }>;
  funnel: Array<{ label: string; value: string; progress: number; fill: string }>;
}

// ─── Exercise / LVC API types ─────────────────────────────────────────────────

export interface AdminLVCStats {
  baseline?: string;
  avgByExercise?: string;
  avgLovable?: number | null;
  avgValuable?: number | null;
  avgCapable?: number | null;
  previousAvgLovable?: number | null;
  previousAvgValuable?: number | null;
  previousAvgCapable?: number | null;
}

export interface AdminExerciseStats {
  completionCountByExercise?: string;
  currentExerciseCounts?: string;
  stalledUsers?: number;
  avgDaysBetweenExercises?: number | null;
  stalledSentReengage?: number;
  reengagedCount?: number;
  reengagedPercent?: number | null;
}

export interface AdminReflectionsStats {
  reflections?: string;
  total?: number;
  reflectionCountByExercise?: string;
}

export interface ExerciseApiData {
  kpis: {
    lovable: { value: string; delta: string };
    valuable: { value: string; delta: string };
    capable: { value: string; delta: string };
  };
  completionCounts: Array<{ label: string; value: string; progress: number; tone: 'green' | 'gold' }>;
  reflections: Array<{ label: string; value: string }>;
  engagementHealth: Array<{ label: string; value: string; labelColor?: string; valueColor?: string }>;
  anonymousLearnings: string[];
}

// ─── User Lookup API types ────────────────────────────────────────────────────

export interface AdminSearchUser {
  userId?: string;
  email?: string;
  userName?: string;
  cognitoStatus?: string | null;
  platform?: string | null;
  subscriptionStatus?: string | null;
  planType?: string | null;
  accountCreatedAt?: string | null;
  lastActiveAt?: string | null;
  couponCode?: string | null;
}

export interface AdminDetailUser {
  userId?: string;
  email?: string;
  userName?: string;
  cognitoStatus?: string | null;
  platform?: string | null;
  subscriptionStatus?: string | null;
  planType?: string | null;
  couponCode?: string | null;
  currentExercise?: string | null;
  lastExerciseCompleted?: string | null;
  lastActiveAt?: string | null;
  accountCreatedAt?: string | null;
  onboardingStartedAt?: string | null;
  onboardingCompletedAt?: string | null;
  notifSentCount?: number;
  notifTapCount?: number;
  lvcScores?: string | null;
}

/** Shape consumed directly by the UI (matches the old UserRecord shape) */
export interface UserLookupResult {
  id: string;
  name: string;
  email: string;
  platform: string;
  status: string;
  couponUsed: string;
  joined: string;
  lastActive: string;
  currentExercise: string;
  lastCompleted: string;
  lovableScore: string;
  valuableScore: string;
  capableScore: string;
  subscriberSince: string;
}
