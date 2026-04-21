'use client';

import { Panel, PanelHeader, StatCard } from '@/components/pages/dashboard/page';
import { StatCardIcon12, StatCardIcon3, StatCardIcon45, StatCardIcon6 } from '@/components/icons/stat-card-icons';

export default function SectionOnboarding({ data }: { data?: any }) {
  const { kpis = {}, funnel = [] } = data || {};

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12 }}>
        <StatCard icon={<StatCardIcon12 />} label="Onboarding Started" value={kpis.started} delta="+200" />
        <StatCard icon={<StatCardIcon12 />} label="Onboarding Completed" value={kpis.completed} delta="8.1%" />
        <StatCard icon={<StatCardIcon3 />} label="Completion Rate" value={kpis.rate} delta="1.4%" />
        <StatCard icon={<StatCardIcon45 />} label="Avg Completion Time" value={kpis.time} delta="6.7%" />
        <StatCard icon={<StatCardIcon45 />} label="Drop-off Rate" value={kpis.drop} delta="4.2%" />
        <StatCard icon={<StatCardIcon6 />} label="Completed + Active" value={kpis.active} delta="0.4%" />
      </div>

      <Panel>
        <PanelHeader title="Trial to Paid Conversion Funnel" subtitle="Last 30 days" />
        <div style={{ display: 'grid', gap: 12 }}>
          {funnel.map((item: any) => (
            <div key={item.label} style={{ display: 'grid', gridTemplateColumns: '145px 1fr', alignItems: 'center', gap: 0 }}>
              <span
                style={{
                  color: '#6E7487',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  fontSize: 27 / 2.1,
                }}
              >
                {item.label}
              </span>
              <div style={{ height: 16, background: '#EFE4CA', borderRadius: 0, position: 'relative', overflow: 'hidden' }}>
                <div style={{ width: `${item.progress}%`, height: '100%', background: item.fill, borderRadius: 0 }} />
                <span
                  style={{
                    position: 'absolute',
                    right: 8,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#1F2937',
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    fontSize: 27 / 2.1,
                  }}
                >
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Panel>

      <div style={{ height: 220 }} />
    </div>
  );
}
