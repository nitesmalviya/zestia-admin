'use client';

import { KeyValueRow, Panel, PanelHeader, ProgressRow, StatCard } from '@/components/pages/dashboard/page';
import { StatCardIcon12, StatCardIcon3 } from '@/components/icons/stat-card-icons';

export default function SectionNotifications({ data }: { data?: any }) {
  const { kpis = {}, types = [], distribution = [] } = data || {};

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
        <StatCard icon={<StatCardIcon12 />} label="Notifications Sent (30D)" value={kpis.sent} delta="+200" />
        <StatCard icon={<StatCardIcon12 />} label="Notifications Acted On" value={kpis.acted} delta="8.1%" />
        <StatCard icon={<StatCardIcon3 />} label="Avg Active Days / Wee" value={kpis.avgDays} delta="1.4%" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 12 }}>
        <Panel>
          <PanelHeader title="Notification Action Rate by Type" subtitle="% of notifications that triggered app open" />
          {types.map((type: any) => (
            <ProgressRow key={type.label} label={type.label} value={type.value} progress={type.progress} tone={type.tone} />
          ))}
        </Panel>

        <Panel>
          <PanelHeader title="Active Days Distribution" subtitle="Users by days active in last 7" />
          {distribution.map((dist: any) => (
            <KeyValueRow key={dist.label} label={dist.label} value={dist.value} valueColor={dist.valueColor} />
          ))}
        </Panel>
      </div>

      <div style={{ height: 300 }} />
    </div>
  );
}
