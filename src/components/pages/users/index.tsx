'use client';

import { StatCard } from '@/components/pages/dashboard';
import { StatCardIcon12, StatCardIcon3, StatCardIcon45, StatCardIcon6 } from '@/components/icons/stat-card-icons';
import { AdminListUser, AdminUserStats } from '@/types/user';
import UserListTable from './user-list-table';
import UsersByPlatform from './users-by-platform';
import UsersByStatus from './users-by-status';

interface UserListDataProps {
  userListData: {
    totalCount: number;
    nextToken: string | null;
    users: AdminListUser[];
  } | undefined;

  userStatsData: AdminUserStats;
}

const Users = ({ userListData, userStatsData }: UserListDataProps) => {

  const u = userStatsData || {};

  const kpis = {
    total: u.totalUsers ?? 0,
    new: u.newUsersLast30Days ?? 0,
    active: u.activeUsers ?? 0,
    monthly: u.monthly ?? 0,
    annual: u.annual ?? 0,
    cancellations: u.cancellations30d ?? 0,
  };

  const getDelta = (current: number, prev?: number | null) => {
    if (!prev) return '-';
    const d = ((current - prev) / prev) * 100;
    return `${d >= 0 ? '+' : ''}${d.toFixed(1)}%`;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12 }}>
        <StatCard icon={<StatCardIcon12 />} label="Total Users" value={kpis.total} delta={getDelta(kpis.total, u.previousTotalUsers)} />
        <StatCard icon={<StatCardIcon12 />} label="New Users (30d)" value={kpis.new} delta={getDelta(kpis.new, u.previousNewUsers)} />
        <StatCard icon={<StatCardIcon3 />} label="Active Users" value={kpis.active} delta={getDelta(kpis.active, u.previousActiveUsers)} />
        <StatCard icon={<StatCardIcon45 />} label="Monthly Subscribers" value={kpis.monthly} delta={getDelta(kpis.monthly, u.previousMonthly)} />
        <StatCard icon={<StatCardIcon45 />} label="Annual Subscribers" value={kpis.annual} delta={getDelta(kpis.annual, u.previousAnnual)} />
        <StatCard icon={<StatCardIcon6 />} label="Cancellations (30D)" value={kpis.cancellations} delta={getDelta(kpis.cancellations, u.previousCancellations30d)} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 12 }}>
        <UsersByPlatform userStatsData={userStatsData} />
        <UsersByStatus userStatsData={userStatsData} />
      </div>
      <UserListTable userListData={userListData} />
    </div>
  );
}


export default Users;