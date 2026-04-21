'use client';
import OverviewKpi from './overview-kpi';
import OverviewBargraph from './overview-bargraph';
import OverviewDriver from './overview-driver';
import OverviewStats from './overview-stats';

export default function SectionOverview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
      <OverviewKpi />
      <OverviewStats />
      <OverviewDriver />
      <OverviewBargraph />
    </div>
  );
}
