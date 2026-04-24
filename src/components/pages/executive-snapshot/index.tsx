'use client';
import { StatCard } from '@/components/pages/dashboard/page';
import { StatCardIcon12, StatCardIcon3, StatCardIcon45, StatCardIcon6 } from '@/components/icons/stat-card-icons';
import { AdminUserStats } from '@/types/user';
import DailyActiveUsers from './daily-active-users';
import UserStatusBreakdown from './user-status-breakdown';
import AvgEngagementScore from './avg-engagement-score';
import PlatformSplit from './platform-split';

interface userStatsDataProps {
  userStatsData: AdminUserStats;
}

function fmtDelta(delta: number | null | undefined): string {
  if (delta == null) return '—';
  const sign = delta >= 0 ? '+' : '';
  return `${sign}${delta.toFixed(1)}%`;
}

function fmtCurrency(value: number | undefined): string {
  if (value == null) return '—';
  return `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function fmtNumber(value: number | undefined): string {
  if (value == null) return '—';
  return value.toLocaleString('en-US');
}

function fmtPercent(value: number | undefined, decimals = 1): string {
  if (value == null) return '—';
  return `${value.toFixed(decimals)}%`;
}

const SectionExecutiveSnapshot = ({ userStatsData }: userStatsDataProps) => {

  const statsCards = [
    {
      icon: <StatCardIcon12 />,
      label: 'Total Active Users',
      value: fmtNumber(userStatsData.activeUsers),
      delta: fmtDelta(userStatsData.activeUsers),
    },
    {
      icon: <StatCardIcon12 />,
      label: 'New Users (30d)',
      value: fmtNumber(userStatsData.newUsersLast30Days),
      delta: fmtDelta(userStatsData.newUsers),
    },
    {
      icon: <StatCardIcon3 />,
      label: 'Download → Paid',
      value: fmtPercent(userStatsData.downloadToPaidPercent),
      delta: '—',
    },
    {
      icon: <StatCardIcon45 />,
      label: 'MRR',
      value: fmtCurrency(userStatsData.mrr),
      delta: fmtDelta(userStatsData.mrr),
    },
    {
      icon: <StatCardIcon45 />,
      label: 'Net Revenue',
      value: fmtCurrency(userStatsData.netRevenue),
      delta: fmtDelta(userStatsData.netRevenue),
    },
    {
      icon: <StatCardIcon6 />,
      label: 'Monthly Churn',
      value: fmtPercent(userStatsData.monthlyChurnPercent),
      delta: fmtDelta(userStatsData.monthlyChurn),
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: 12,
        }}
      >

        {
          statsCards.map((stats) => {
            return (
              <StatCard
                key={stats.label}
                icon={stats.icon}
                label={stats.label}
                value={stats.value}
                delta={stats.delta} />
            )
          })
        }
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 12 }}>
        <DailyActiveUsers userStatsData={userStatsData} />
        <AvgEngagementScore userStatsData={userStatsData} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 12 }}>
        <PlatformSplit userStatsData={userStatsData} />
        <UserStatusBreakdown userStatsData={userStatsData} />
      </div>
    </div>
  );
}


export default SectionExecutiveSnapshot;