'use client';

import { KeyValueRow, Panel, PanelHeader, ProgressRow, StatCard } from '@/components/pages/dashboard/page';
import { StatCardIcon12, StatCardIcon3 } from '@/components/icons/stat-card-icons';

export default function SectionExercise({ data }: { data?: any }) {
  const { 
    kpis = {}, 
    completionCounts = [], 
    reflections = [], 
    engagementHealth = [], 
    anonymousLearnings = [] 
  } = data || {};

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
        <StatCard icon={<StatCardIcon12 />} label="Avg Lovable" value={kpis.lovable?.value} delta={kpis.lovable?.delta} />
        <StatCard icon={<StatCardIcon12 />} label="Avg Valuable" value={kpis.valuable?.value} delta={kpis.valuable?.delta} />
        <StatCard icon={<StatCardIcon3 />} label="Avg Capable" value={kpis.capable?.value} delta={kpis.capable?.delta} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 12 }}>
        <Panel>
          <PanelHeader title="Exercise Completion Counts" subtitle="All time, by exercise name" />
          {completionCounts.map((item: any) => (
            <ProgressRow key={item.label} label={item.label} value={item.value} progress={item.progress} tone={item.tone} />
          ))}
        </Panel>

        <Panel>
          <PanelHeader title="Reflections & Saved Entries" subtitle="Per exercise - Reflections / Saved" />
          {reflections.map((item: any) => (
            <KeyValueRow key={item.label} label={item.label} value={item.value} />
          ))}
        </Panel>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 12 }}>
        <Panel>
          <PanelHeader title="Engagement Health" subtitle="Exercise cadence signals" />
          {engagementHealth.map((item: any) => (
            <KeyValueRow key={item.label} label={item.label} value={item.value} labelColor={item.labelColor} valueColor={item.valueColor} />
          ))}
        </Panel>

        <Panel>
          <PanelHeader title="Anonymous Learnings" subtitle="Running list from user reflections" />
          {anonymousLearnings.map((quote: string, index: number) => (
            <p
              key={quote}
              style={{
                margin: 0,
                padding: '14px 0',
                borderTop: index ? '1px solid #EFE7D7' : 'none',
                color: '#D6A944',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontStyle: 'italic',
                fontSize: 30 / 2.1,
              }}
            >
              {quote}
            </p>
          ))}
        </Panel>
      </div>
    </div>
  );
}
