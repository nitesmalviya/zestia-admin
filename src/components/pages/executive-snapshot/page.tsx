'use client';
import { KeyValueRow, Panel, PanelHeader, StatCard } from '@/components/pages/dashboard/page';
import { StatCardIcon12, StatCardIcon3, StatCardIcon45, StatCardIcon6 } from '@/components/icons/stat-card-icons';
import { AdminUserStats, ExecutiveSnapshotApiData } from '@/types/user';
import { stat } from 'fs';

interface userStatsDataProps {
  userStatsData: AdminUserStats;
  data: any;
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


const EMPTY_DELTAS: ExecutiveSnapshotApiData['deltas'] = {
  activeUsers: null,
  newUsers: null,
  totalUsers: null,
  monthly: null,
  annual: null,
  cancellations30d: null,
  mrr: null,
  netRevenue: null,
  grossRevenue: null,
  monthlyChurn: null,
  trialToPaid: null,
};

export default function SectionExecutiveSnapshot({ data, userStatsData }: userStatsDataProps) {
  console.log(userStatsData, "user Stats Data");


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

  const {
    kpis = {},
    engagement = {},
    platformSplit = [],
    statusBreakdown = [],
    monthlyBars = [100, 84, 52, 73, 92, 72, 50, 72, 50, 72, 60, 84],
    days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  } = data || {};

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
        <Panel>
          <PanelHeader title="Daily Active Users" subtitle="Last 12 months - weekly avg" />
          <div style={{ display: 'grid', gridTemplateColumns: '34px 1fr', gap: 8 }}>
            <div style={{ display: 'grid', color: '#6E7487', fontSize: 11, fontWeight: 600 }}>
              <span>$100k</span>
              <span>$50k</span>
              <span>$25k</span>
              <span>$10k</span>
              <span>0</span>
            </div>
            <div>
              <div style={{ height: 180, display: 'flex', alignItems: 'end', gap: 8, borderBottom: '1px dashed #D9DEE7', position: 'relative' }}>
                {[20, 40, 60, 80].map((tick) => (
                  <div
                    key={tick}
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: `${tick}%`,
                      borderTop: '1px dashed #D9DEE7',
                      pointerEvents: 'none',
                      zIndex: 0,
                    }}
                  />
                ))}
                {monthlyBars.map((height: number, idx: number) => {
                  const selected = idx === 7;
                  return (
                    <div key={height + idx} style={{ flex: 1, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', zIndex: 1 }}>
                      <div
                        style={{
                          width: '58%',
                          height: `${height}%`,
                          borderRadius: '10px 10px 0 0',
                          background: selected ? '#C7A24C' : '#EFE4CA',
                        }}
                      />
                    </div>
                  );
                })}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', marginTop: 8 }}>
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Oct', 'Dec'].map((month) => (
                  <span
                    key={month}
                    style={{
                      textAlign: 'center',
                      fontFamily: "'Montserrat', sans-serif",
                      color: month === 'Aug' ? '#C7A24C' : '#4B5563',
                      fontWeight: month === 'Aug' ? 600 : 500,
                      fontSize: 12,
                    }}
                  >
                    {month}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Panel>

        <Panel>
          <PanelHeader
            title="Avg Engagement Score"
            subtitle="Composite 0-100 - updated daily"
            right={
              <div style={{ textAlign: 'right', color: '#111827' }}>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 26, lineHeight: '20.13px', fontWeight: 600, letterSpacing: '0' }}>{engagement.score}</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: '20.13px', fontWeight: 500 }}>out of 100</div>
              </div>
            }
          />
          <div style={{ height: 180, position: 'relative' }}>
            <svg viewBox="0 0 640 180" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
              <defs>
                <linearGradient id="engArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#EED69C" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#EED69C" stopOpacity="0.08" />
                </linearGradient>
              </defs>
              {[30, 60, 90, 120, 150].map((y) => (
                <line key={y} x1="0" y1={y} x2="640" y2={y} stroke="#D9DEE7" strokeWidth="1" strokeDasharray="5 6" />
              ))}
              <path d="M10 130 C 40 80, 60 130, 90 90 C 120 50, 150 110, 190 80 C 240 30, 280 165, 320 110 C 360 45, 395 170, 440 120 C 490 50, 520 20, 560 30 C 580 35, 595 24, 610 20 C 620 21, 628 22, 635 24 L 635 180 L 10 180 Z" fill="url(#engArea)" />
              <path d="M10 130 C 40 80, 60 130, 90 90 C 120 50, 150 110, 190 80 C 240 30, 280 165, 320 110 C 360 45, 395 170, 440 120 C 490 50, 520 20, 560 30 C 580 35, 595 24, 610 20 C 620 21, 628 22, 635 24" fill="none" stroke="#D7B054" strokeWidth="3" />
              <circle cx="610" cy="20" r="12" fill="#D7B054" stroke="#FDFBF4" strokeWidth="3" />
            </svg>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
            {days.map((day: any, index: number) => (
              <span
                key={day + index}
                style={{
                  textAlign: 'center',
                  color: day === 'S' && index === 5 ? '#C7A24C' : '#4B5563',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: 12,
                }}
              >
                {day}
              </span>
            ))}
          </div>
        </Panel>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 12 }}>
        <Panel>
          <PanelHeader title="Platform Split" subtitle="Active users by platform" />
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div style={{ width: 140, height: 140, borderRadius: '50%', background: 'conic-gradient(#F2D98E 0 57%, #E8B624 57% 89.5%, #C7A24C 89.5% 100%)', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 16, borderRadius: '50%', background: '#fff' }} />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {platformSplit.map((p: any) => (
                <div key={p.label} style={{ color: '#6E7487', fontFamily: "'Montserrat', sans-serif", fontSize: 30 / 2.1, fontWeight: 600 }}>
                  &#9679; {p.label}: {p.pct} <span style={{ color: '#C7A24C' }}>{p.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Panel>

        <Panel>
          <PanelHeader title="User Status Breakdown" subtitle="All registered users" />
          {statusBreakdown.map((s: any) => (
            <KeyValueRow key={s.label} label={s.label} value={s.value} labelColor={s.labelColor} valueColor={s.valueColor} />
          ))}
        </Panel>
      </div>
    </div>
  );
}
