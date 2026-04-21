'use client';
import {
  Users, UserPlus, ArrowDownToLine,
  DollarSign, Wallet, TrendingDown,
} from 'lucide-react';
import StatCard from './stat-card';

const STATS = [
  { id: 'active-users', icon: Users, label: 'Total Active Users', value: '24,891', delta: 200, deltaLabel: 'vs last month' },
  { id: 'new-users', icon: UserPlus, label: 'New Users (30d)', value: '3,204', delta: 8.1, deltaLabel: 'vs last month' },
  { id: 'download-paid', icon: ArrowDownToLine, label: 'Download → Paid', value: '13.2%', delta: 1.4, deltaLabel: 'vs last month' },
  { id: 'mrr', icon: DollarSign, label: 'MRR', value: '$48,320', delta: 6.7, deltaLabel: 'vs last month' },
  { id: 'net-revenue', icon: Wallet, label: 'Net Revenue', value: '$41,072', delta: 4.2, deltaLabel: 'vs last month' },
  { id: 'churn', icon: TrendingDown, label: 'Monthly Churn', value: '2.3%', delta: -0.4, invertDelta: true, deltaLabel: 'vs last month' },
];

export default function StatsGrid() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16,
    }}>
      {STATS.map(s => (
        <StatCard
          key={s.id}
          icon={s.icon}
          label={s.label}
          value={s.value}
          delta={s.delta}
          deltaLabel={s.deltaLabel}
          invertDelta={s.invertDelta}
        />
      ))}
    </div>
  );
}
