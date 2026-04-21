'use client';

import { Panel, PanelHeader, StatCard } from '@/components/pages/dashboard/page';
import { StatCardIcon12, StatCardIcon3, StatCardIcon45, StatCardIcon6 } from '@/components/icons/stat-card-icons';
import { AdminListUser } from '@/types/user';
import { formatDate } from '@/utils/constants';
import style from 'styled-jsx/style';

interface UserListDataProps {
  userListData: {
    totalCount: number;
    nextToken: string | null;
    users: AdminListUser[];
  } | undefined;

  userStatsData: any;
}

export default function SectionUsers({ userListData, userStatsData }: UserListDataProps) {

  const u = userStatsData || {};

  console.log(userStatsData, "userStatsDatauserStatsData");

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

  const platformBreakdown = (() => {
    try {
      return u.platformBreakdown ? JSON.parse(u.platformBreakdown) : {};
    } catch {
      return {};
    }
  })();

  const totalPlatform = Object.values(platformBreakdown).reduce((a: number, b: any) => a + b, 0) || 1;

  const platformSplit = Object.entries(platformBreakdown).map(([key, value]: any) => ({
    label: key,
    value,
    pct: ((value / totalPlatform) * 100).toFixed(1) + '%',
  }));

  const statusRaw = (() => {
    try {
      return u.userStatusBreakdown ? JSON.parse(u.userStatusBreakdown) : {};
    } catch {
      return {};
    }
  })();

  const totalUsers = u.totalUsers || 1;


  const statusBreakdown = [
    {
      label: 'Free',
      value: `${statusRaw.free ?? 0} (${(((statusRaw.free ?? 0) / totalUsers) * 100).toFixed(1)}%)`,
    },
    {
      label: 'Trial Users',
      value: `${statusRaw.trial ?? 0} (${(((statusRaw.trial ?? 0) / totalUsers) * 100).toFixed(1)}%)`,
    },
    {
      label: 'Monthly Paid',
      value: `${statusRaw.monthlyPaid ?? 0} (${(((statusRaw.monthlyPaid ?? 0) / totalUsers) * 100).toFixed(1)}%)`,
    },
    {
      label: 'Annual Paid',
      value: `${statusRaw.annualPaid ?? 0} (${(((statusRaw.annualPaid ?? 0) / totalUsers) * 100).toFixed(1)}%)`,
    },
  ];

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
        <Panel>
          <PanelHeader title="Users by Platform" subtitle="Active users - current" />
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div style={{ width: 140, height: 140, borderRadius: '50%', background: 'conic-gradient(#F2D98E 0 57%, #E8B624 57% 89.5%, #C7A24C 89.5% 100%)', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 16, borderRadius: '50%', background: '#fff' }} />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {platformSplit.map((p: any) => (
                <div key={p.label} style={{ color: '#6E7487', fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 600 }}>
                  &#9679; {p.label}: {p.pct} <span style={{ color: '#C7A24C' }}>{p.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Panel>

        <Panel>
          <PanelHeader title="Users by Status" subtitle="Subscription tier breakdown" />
          {statusBreakdown.map((item: any, index: number) => (
            <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0', borderTop: index ? '1px solid #F3EAD6' : 'none' }}>
              <span style={{ color: '#C7A24C', fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 500 }}>{item.label}</span>
              <span style={{ color: '#C7A24C', fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 600 }}>{item.value}</span>
            </div>
          ))}
        </Panel>
      </div>

      <Panel style={{ padding: 0, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Montserrat', sans-serif" }}>
          <thead style={{ background: '#E9DCB9' }}>
            <tr>
              {['User Name', 'Platform', 'Status', 'Joined', 'Last Active', 'Coupon'].map((heading) => (
                <th key={heading} style={{ textAlign: 'left', padding: '10px 18px', color: '#26303D', fontSize: 24 / 2.1, fontWeight: 700 }}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {userListData?.users?.map((user: AdminListUser) => (
              <tr key={user.userId}>
                <td
                  style={{ padding: '14px 18px', color: '#C7A24C', borderTop: '1px solid #EFE7D7', fontSize: 14, fontWeight: 500 }}>
                  {user.userName}
                </td>
                <td style={{ padding: '14px 18px', color: '#4B5563', borderTop: '1px solid #EFE7D7', fontSize: 14, fontWeight: 600 }}>
                  {user.platform || '-'}
                </td>
                <td style={{ padding: '14px 18px', borderTop: '1px solid #EFE7D7' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      borderRadius: 7,
                      padding: '4px 10px',
                      fontSize: 14,
                      fontWeight: 600,
                      color: user.subscriptionStatus === 'Free' ? '#FF5A3C' : user.subscriptionStatus === 'Trial' ? '#8A8F9D' : '#16A34A',
                      background: user.subscriptionStatus === 'Free' ? '#FDEBE7' : user.subscriptionStatus === 'Trial' ? '#EEF0F4' : '#DFF5E7',
                    }}
                  >
                    {user.subscriptionStatus}
                  </span>
                </td>
                <td style={{ padding: '14px 18px', color: '#4B5563', borderTop: '1px solid #EFE7D7', fontSize: 14, fontWeight: 600 }}>
                  {formatDate(user.joinedAt)}
                </td>
                <td style={{ padding: '14px 18px', color: '#4B5563', borderTop: '1px solid #EFE7D7', fontSize: 14, fontWeight: 600 }}>
                  {formatDate(user.lastActiveAt)}
                </td>
                <td style={{ padding: '14px 18px', color: '#4B5563', borderTop: '1px solid #EFE7D7', fontSize: 14, fontWeight: 600 }}>
                  {user.couponCode || "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>
    </div>
  );
}
