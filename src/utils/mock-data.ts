/* Zestia Admin — Mock Data */

export const mrrData = [
  { m: "Oct", mrr: 32400 }, { m: "Nov", mrr: 35200 }, { m: "Dec", mrr: 38900 },
  { m: "Jan", mrr: 41200 }, { m: "Feb", mrr: 44800 }, { m: "Mar", mrr: 48320 },
];

export const dauData = [
  { d: "Mon", dau: 4120 }, { d: "Tue", dau: 4380 }, { d: "Wed", dau: 5100 },
  { d: "Thu", dau: 4750 }, { d: "Fri", dau: 4200 }, { d: "Sat", dau: 3800 }, { d: "Sun", dau: 3350 },
];

export const platformData = [
  { name: "iOS",     value: 14200 },
  { name: "Android", value: 8100  },
  { name: "Web",     value: 2591  },
];

export const geoData = [
  { country: "United States",  users: 9820, pct: 39.5 },
  { country: "United Kingdom", users: 3240, pct: 13.0 },
  { country: "Canada",         users: 2110, pct: 8.5  },
  { country: "Australia",      users: 1890, pct: 7.6  },
  { country: "Germany",        users: 1420, pct: 5.7  },
  { country: "Other",          users: 6411, pct: 25.7 },
];

export const retentionCohorts = [
  { cohort: "Jan", d1: 78, d7: 52, d30: 31 },
  { cohort: "Feb", d1: 81, d7: 55, d30: 33 },
  { cohort: "Mar", d1: 79, d7: 58, d30: 36 },
];

export const engagementBreakdown = [
  { name: "Notification Score", max: 35, avg: 24.2 },
  { name: "Weekly Presence",    max: 25, avg: 17.8 },
  { name: "Exercise Progress",  max: 20, avg: 12.4 },
  { name: "Session Quality",    max: 10, avg: 6.9  },
  { name: "Consistency",        max: 10, avg: 5.7  },
];

export const growthDrivers = [
  { rank: 1, behavior: "Completing 3 exercises in first month",    impact: "+42%", metric: "30-day retention",   score: 87.4 },
  { rank: 2, behavior: "Enabling notifications (≥40% engagement)", impact: "+31%", metric: "Engagement",         score: 74.1 },
  { rank: 3, behavior: "Completing onboarding within 48 hrs",      impact: "+28%", metric: "Trial conversion",   score: 61.8 },
];

export const coupons = [
  { code: "ZEST30",      type: "% off",      value: "30%",     applies: "Both",    duration: "Recurring 3mo",  expiry: "2026-06-30", maxUses: 200,  uses: 142, perUser: 1, revenue: 4820,  convRate: 68, retention: 74, status: "Active"    },
  { code: "NEWLIFE50",   type: "% off",      value: "50%",     applies: "Monthly", duration: "One-time",       expiry: "2026-04-15", maxUses: 100,  uses: 88,  perUser: 1, revenue: 2640,  convRate: 74, retention: 71, status: "Active"    },
  { code: "FLATOFF10",   type: "$ off",      value: "$10",     applies: "Both",    duration: "One-time",       expiry: "None",       maxUses: 500,  uses: 320, perUser: 1, revenue: 8960,  convRate: 61, retention: 68, status: "Active"    },
  { code: "LAUNCH2024",  type: "% off",      value: "25%",     applies: "Yearly",  duration: "Recurring 6mo",  expiry: "2025-12-31", maxUses: 500,  uses: 500, perUser: 1, revenue: 22400, convRate: 55, retention: 81, status: "Exhausted" },
  { code: "FREETRIAL14", type: "Free trial", value: "14 days", applies: "Both",    duration: "One-time",       expiry: "2026-08-01", maxUses: 1000, uses: 241, perUser: 1, revenue: 6820,  convRate: 58, retention: 69, status: "Active"    },
];

export const affiliates = [
  { id: "AFF-001", name: "Jessica Moore",      handle: "@jessicacoaches",  email: "jess@moorelife.com",   type: "Influencer", tier: "Gold",     joined: "Jan 10 2026", clicks: 8420,  signups: 612,  conversions: 284, revenue: 11360, commissionRate: 20, commissionEarned: 2272, commissionPaid: 1800, status: "Active",  code: "JESS20",     lastPayout: "Mar 1" },
  { id: "AFF-002", name: "Mindful Mia Podcast", handle: "@mindfulmiapod",  email: "mia@mindfulpod.com",   type: "Podcast",    tier: "Silver",   joined: "Feb 2 2026",  clicks: 4210,  signups: 298,  conversions: 121, revenue: 4840,  commissionRate: 15, commissionEarned: 726,  commissionPaid: 500,  status: "Active",  code: "MIA15",      lastPayout: "Mar 1" },
  { id: "AFF-003", name: "Ryan Wellness Co.",   handle: "@ryanwellness",    email: "ryan@wellco.com",      type: "Coach",      tier: "Gold",     joined: "Dec 15 2025", clicks: 6840,  signups: 520,  conversions: 198, revenue: 7920,  commissionRate: 20, commissionEarned: 1584, commissionPaid: 1584, status: "Active",  code: "RYAN20",     lastPayout: "Mar 1" },
  { id: "AFF-004", name: "Clarity Space",       handle: "@clarityspace",    email: "hello@clarityspace.io",type: "Brand",      tier: "Platinum", joined: "Nov 1 2025",  clicks: 14200, signups: 1120, conversions: 488, revenue: 19520, commissionRate: 25, commissionEarned: 4880, commissionPaid: 4000, status: "Active",  code: "CLARITY25",  lastPayout: "Mar 1" },
  { id: "AFF-005", name: "Bloom & Grow",        handle: "@bloomgrow",       email: "team@bloomgrow.co",    type: "Creator",    tier: "Bronze",   joined: "Mar 5 2026",  clicks: 890,   signups: 62,   conversions: 18,  revenue: 720,   commissionRate: 10, commissionEarned: 72,   commissionPaid: 0,    status: "Pending", code: "BLOOM10",    lastPayout: "—"     },
  { id: "AFF-006", name: "Sarah True",          handle: "@sarahtruepath",   email: "sarah@truepath.com",   type: "Coach",      tier: "Silver",   joined: "Jan 28 2026", clicks: 2940,  signups: 184,  conversions: 72,  revenue: 2880,  commissionRate: 15, commissionEarned: 432,  commissionPaid: 432,  status: "Active",  code: "SARAH15",    lastPayout: "Feb 1" },
];

export const affiliateTrend = [
  { m: "Oct", revenue: 2100,  signups: 180 },
  { m: "Nov", revenue: 3400,  signups: 241 },
  { m: "Dec", revenue: 5200,  signups: 380 },
  { m: "Jan", revenue: 8400,  signups: 520 },
  { m: "Feb", revenue: 11200, signups: 690 },
  { m: "Mar", revenue: 14800, signups: 840 },
];

export const USERS = [
  {
    id: 'u1',
    name: 'Marcus Webb',
    email: 'marcus.webb@email.com',
    platform: 'Android',
    status: 'Monthly Paid' as const,
    couponUsed: '-',
    joined: 'Feb 3, 2025',
    lastActive: 'Yesterday',
    currentExercise: 'Values Mapping',
    lastCompleted: 'Morning Gratitude',
    lovableScore: '6.4',
    valuableScore: '7.0',
    capableScore: '6.1',
    subscriberSince: 'Feb 3, 2025',
  },
  {
    id: 'u2',
    name: 'Sarah Chen',
    email: 'sarah.chen@email.com',
    platform: 'iOS',
    status: 'Annual Paid' as const,
    couponUsed: 'LAUNCH20',
    joined: 'Jan 12, 2025',
    lastActive: 'Yesterday',
    currentExercise: 'Inner Critic Reframe',
    lastCompleted: 'Values Mapping',
    lovableScore: '7.2',
    valuableScore: '7.8',
    capableScore: '7.1',
    subscriberSince: 'Jan 12, 2025',
  },
  {
    id: 'u3',
    name: 'Priya Nair',
    email: 'priya.nair@email.com',
    platform: 'Android',
    status: 'Free' as const,
    couponUsed: 'FRIEND10',
    joined: 'Mar 20, 2026',
    lastActive: '5 days ago',
    currentExercise: 'Morning Gratitude',
    lastCompleted: 'Morning Gratitude',
    lovableScore: '5.9',
    valuableScore: '6.2',
    capableScore: '5.8',
    subscriberSince: '-',
  },
  {
    id: 'u4',
    name: 'Lily James',
    email: 'lily.james@email.com',
    platform: 'Web',
    status: 'Trial' as const,
    couponUsed: '-',
    joined: 'Apr 2, 2026',
    lastActive: 'Today',
    currentExercise: 'Self-Compassion Letter',
    lastCompleted: 'Inner Critic Reframe',
    lovableScore: '6.1',
    valuableScore: '6.7',
    capableScore: '6.0',
    subscriberSince: '-',
  },
];

export const userRows = [
  ['Sarah Chen', 'iOS', 'Annual Paid', 'Jan 12, 2025', 'Yesterday', 'LAUNCH20'],
  ['Marcus Webb', 'Web', 'Monthly Paid', 'Feb 3, 2025', '2 days ago', '-'],
  ['Priya Nair', 'Android', 'Free', 'Mar 20, 2026', '5 days ago', 'FRIEND10'],
  ['David Lee', 'Windows', 'Trial', 'Apr 15, 2026', '1 week ago', 'WINTER15'],
];

export const executiveMonthlyBars = [100, 84, 52, 73, 92, 72, 50, 72, 50, 72, 60, 84];
export const executiveDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export const anonymousLearnings = [
  "\"I'm more capable than I give myself credit for.\"",
  'I feel more lovable when I stop comparing myself."',
  '"Gratitude practice actually shifts my morning mood."',
  'Naming my inner critic made it feel smaller."',
];

export const notificationsData = {
  kpis: {
    sent: "184,220",
    acted: "62,340",
    avgDays: "4.2"
  },
  types: [
    { label: 'Daily reminder', value: '55.5%)', progress: 78, tone: 'green' },
    { label: 'Streak nudge', value: '(23.9%)', progress: 53, tone: 'green' },
    { label: 'New exercise unlock', value: '(20.6%)', progress: 42, tone: 'gold' }
  ],
  distribution: [
    { label: '7 days (daily active)', value: '8,420' },
    { label: '5-6 days', value: '3,104' },
    { label: '3-4 days', value: '9,812' },
    { label: '0 days (inactive)', value: '3,555', valueColor: '#FF3B30' }
  ]
};

export const onboardingData = {
  kpis: {
    started: "3,204",
    completed: "2,588",
    rate: "80.8%",
    time: "7.4 MIN",
    drop: "19.2%",
    active: "91.4%"
  },
  funnel: [
    { label: 'Survey 1', value: '3,104', progress: 93, fill: '#10C456' },
    { label: 'Course creation survey', value: '3,012', progress: 74, fill: '#10C456' },
    { label: 'Onboarding video', value: '2,819', progress: 66, fill: '#C7A24C' },
    { label: 'Payment page', value: '2,588', progress: 57, fill: '#C7A24C' }
  ]
};

export const revenueData = {
  kpis: {
    gross: "$56,240",
    fees: "$15,168",
    net: "$41,072",
    mrr: "$48,320",
    conv: "38.4%",
    churn: "2.3%"
  },
  platform: [
    { label: 'iOS (App Store)', value: '$22,810 (55.5%)', progress: 78, tone: 'green' },
    { label: 'Android (Play Store)', value: '$9,820 (23.9%)', progress: 53, tone: 'gold' },
    { label: 'Web (Stripe)', value: '$8,442 (20.6%)', progress: 42, tone: 'gold' }
  ],
  funnel: [
    { label: 'Trials started', value: '3,104', progress: 96, fill: '#10C456' },
    { label: 'Completed trial', value: '3,104', progress: 74, fill: '#10C456' },
    { label: 'Converted to paid', value: '3,104', progress: 58, fill: '#C7A24C' }
  ]
};

export const executiveSnapshotData = {
  kpis: {
    totalActive: "24,891",
    totalActiveDelta: "+200",
    newUsers: "3,204",
    newUsersDelta: "8.1%",
    downloadPaid: "13.2%",
    downloadPaidDelta: "1.4%",
    mrr: "$48,320",
    mrrDelta: "6.7%",
    netRevenue: "$41,072",
    netRevenueDelta: "4.2%",
    monthlyChurn: "2.3%",
    monthlyChurnDelta: "0.4%"
  },
  engagement: {
    score: "67.0"
  },
  platformSplit: [
    { label: "iOS", pct: "57.0%", value: "14,200", color: "#F2D98E" },
    { label: "Android", pct: "32.5%", value: "8,100", color: "#E8B624" },
    { label: "Web", pct: "10.5%", value: "2,591", color: "#C7A24C" }
  ],
  statusBreakdown: [
    { label: "Free Users", value: "8,420" },
    { label: "Trial Users", value: "3,104" },
    { label: "Paid - Monthly", value: "9,812" },
    { label: "Cancellations (30D)", value: "284", labelColor: "#C7A24C", valueColor: "#FF3B30" }
  ],
  monthlyBars: executiveMonthlyBars,
  days: executiveDays
};

export const exerciseData = {
  kpis: {
    lovable: { value: "6.8", delta: "+200" },
    valuable: { value: "7.1", delta: "8.1%" },
    capable: { value: "6.5", delta: "1.4%" }
  },
  completionCounts: [
    { label: "Morning Gratitude", value: "12,840", progress: 64, tone: "green" },
    { label: "Inner Critic Reframe", value: "10,530", progress: 56, tone: "green" },
    { label: "Values Mapping", value: "9,120", progress: 46, tone: "green" },
    { label: "Self-Compassion Letter", value: "7,060", progress: 34, tone: "green" }
  ],
  reflections: [
    { label: "Morning Gratitude", value: "8,410 / 5,220" },
    { label: "Inner Critic Reframe", value: "6,820 / 4,010" },
    { label: "Values Mapping", value: "5,230 / 3,880" },
    { label: "Self-Compassion", value: "4,110 / 1,920" }
  ],
  engagementHealth: [
    { label: "Avg days between exercises", value: "3.2 days", labelColor: "#C7A24C", valueColor: "#707A8F" },
    { label: "Users stalled 21+ days", value: "1,842 (7.4%)", labelColor: "#C7A24C", valueColor: "#FF3B30" },
    { label: "Stalled sent re-engage", value: "1,842", labelColor: "#C7A24C", valueColor: "#707A8F" },
    { label: "Re-engaged (7D)", value: "614 (33.3%)", labelColor: "#C7A24C", valueColor: "#12C65A" }
  ],
  anonymousLearnings
};

export const usersSectionData = {
  kpis: {
    total: { value: "24,891", delta: "+200" },
    new: { value: "3,204", delta: "8.1%" },
    active: { value: "18,442", delta: "1.4%" },
    monthly: { value: "9,812", delta: "6.7%" },
    annual: { value: "3,555", delta: "4.2%" },
    cancellations: { value: "284", delta: "0.4%" }
  },
  platformSplit: [
    { label: "iOS", pct: "57.0%", value: "14,200" },
    { label: "Android", pct: "32.5%", value: "8,100" },
    { label: "Web", pct: "10.4%", value: "2,591" }
  ],
  statusBreakdown: [
    { label: 'Free', value: '8,420 (33.8%)' },
    { label: 'Trial Users', value: '3,104 (12.5%)' },
    { label: 'Monthly Paid', value: '9,812 (39.4%)' },
    { label: 'Annual Paid', value: '3,555 (14.3%)' }
  ],
  rows: userRows
};

export const couponsSectionData = {
  kpis: {
    active: { value: "4" },
    redemptions: { value: "1,291", delta: 18.4 },
    revenue: { value: "$45,140", delta: 9.1 },
    convRate: { value: "65%", delta: 2.8 }
  },
  list: coupons
};

/* Data Fetching Service Functions */
const simulateDelay = <T>(data: T, ms = 200) => new Promise<T>(resolve => setTimeout(() => resolve(data), ms));

export const getAffiliatesData = async () => simulateDelay({ 
  affiliates, 
  affiliateTrend,
  kpis: {
    activeDelta: 20.0,
    signupsDelta: 21.4,
    revenueDelta: 32.1
  }
});
export const getCouponsData = async () => simulateDelay(couponsSectionData);
export const getExecutiveSnapshotData = async () => simulateDelay(executiveSnapshotData);
export const getExerciseData = async () => simulateDelay(exerciseData);
export const getNotificationsData = async () => simulateDelay(notificationsData);
export const getOnboardingData = async () => simulateDelay(onboardingData);
export const getRevenueData = async () => simulateDelay(revenueData);
export const getUserLookupData = async () => simulateDelay({ users: USERS });
export const getUsersData = async () => simulateDelay(usersSectionData);

