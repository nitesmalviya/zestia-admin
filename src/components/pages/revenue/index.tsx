'use client';

import { Panel, PanelHeader, ProgressRow, StatCard } from '@/components/pages/dashboard';
import { StatCardIcon12, StatCardIcon3, StatCardIcon45, StatCardIcon6 } from '@/components/icons/stat-card-icons';
import { RevenueStats } from '@/types/revenue';

interface revenueDataProps {
  revenueData: RevenueStats;
}
export default function SectionRevenue({ revenueData }: revenueDataProps) {

  const funnelRaw = (() => {
    try {
      return revenueData?.trialFunnel
        ? JSON.parse(revenueData.trialFunnel)
        : {};
    } catch {
      return {};
    }
  })();

  const trialsStarted = funnelRaw.trialsStarted ?? 0;
  const completedTrial = funnelRaw.completedTrial ?? 0;
  const convertedToPaid = funnelRaw.convertedToPaid ?? 0;

  const funnel = [
    {
      label: 'Trials Started',
      value: trialsStarted,
      progress: 100, // base
      fill: '#E8B624',
    },
    {
      label: 'Completed Trial',
      value: completedTrial,
      progress: trialsStarted
        ? (completedTrial / trialsStarted) * 100
        : 0,
      fill: '#C7A24C',
    },
    {
      label: 'Converted to Paid',
      value: convertedToPaid,
      progress: completedTrial
        ? (convertedToPaid / completedTrial) * 100
        : 0,
      fill: '#A07830',
    },
  ];

  const revenuePlatformRaw = (() => {
    try {
      return revenueData?.revenueByPlatform
        ? JSON.parse(revenueData.revenueByPlatform)
        : {};
    } catch {
      return {};
    }
  })();

  const totalRevenue =
    Object.values(revenuePlatformRaw).reduce((a: number, b: any) => a + b, 0) || 1;

  const platform = Object.entries(revenuePlatformRaw).map(
    ([key, value]: any) => ({
      label: key === 'unknown' ? 'Other' : key, // 👈 important fix
      value: `$${value.toLocaleString()}`,
      progress: (value / totalRevenue) * 100,
      tone: 'gold', // or dynamic if needed
    })
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12 }}>
        <StatCard icon={<StatCardIcon12 />} label="Gross Revenue" value={`$${revenueData.grossRevenue}`} delta="+200" />
        <StatCard icon={<StatCardIcon12 />} label="Store Fees" value={`$${revenueData.storeFees}`} delta="8.1%" />
        <StatCard icon={<StatCardIcon3 />} label="Net Revenue" value={`$${revenueData.netRevenue}`} delta="1.4%" />
        <StatCard icon={<StatCardIcon45 />} label="MRR" value={`$${revenueData.mrr}`} delta="6.7%" />
        <StatCard icon={<StatCardIcon45 />} label="Trial -> Paid Conv." value={`${revenueData.trialToPaidPercent}%`} delta="4.2%" />
        <StatCard icon={<StatCardIcon6 />} label="Monthly Churn" value={`${revenueData.monthlyChurnPercent}%`} delta="0.4%" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 12 }}>
        <Panel>
          <PanelHeader title="Revenue by Platform" subtitle="Net revenue after store fees" />
          {platform.map((p: any) => (
            <ProgressRow
              key={p.label}
              label={p.label}
              value={p.value}
              progress={p.progress}
              tone={p.tone}
            />
          ))}
        </Panel>

        <Panel>
          <PanelHeader title="Trial to Paid Conversion Funnel" subtitle="Last 30 days" />
          <div style={{ display: 'grid', gap: 12 }}>
            {funnel.map((item: any) => (
              <div key={item.label} style={{ display: 'grid', gridTemplateColumns: '155px 1fr', alignItems: 'center', gap: 0 }}>
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
                <div style={{ height: 22, background: '#EFE4CA', borderRadius: 0, position: 'relative', overflow: 'hidden' }}>
                  <div style={{ width: `${item.progress}%`, height: '100%', background: item.fill, borderRadius: 0 }} />
                  <span
                    style={{
                      position: 'absolute',
                      right: 10,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#111827',
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
      </div>

      <div style={{ height: 260 }} />
    </div>
  );
}
