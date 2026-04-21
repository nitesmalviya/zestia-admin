'use client';
import UsersKpi from './users-kpi';
import UsersPlatform from './users-platform';
import UsersSegments from './users-segments';
import UsersGeography from './users-geography';
import UsersSubscribersKpi from './users-subscribers-kpi';

export default function SectionUsers() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Top 4 Kpi Cards */}
      <UsersKpi />

      {/* Contains By Platform, User Segments, Geography */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 18 }}>
        <UsersPlatform />
        <UsersSegments />
        <UsersGeography />
      </div>

      {/* Bottom 4 Subscription Kpi Cards */}
      <UsersSubscribersKpi />
    </div>
  );
}
