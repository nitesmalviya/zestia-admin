'use client';
import { useState } from 'react';
import {
  AreaChart, Area, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import {
  TrendingUp, Award,
} from 'lucide-react';
import G from '../../../utils/design-tokens';
import { Card } from '../../custom-ui/card';
import SecHead from '../../custom-ui/sec-head';
import Badge from '../../custom-ui/badge';
import ChartTooltip from '../../custom-ui/chart-tooltip';
import AffiliateTables from './affiliate-tables';
import Drawer from './drawer';
import AffiliateModal from './affiliate-modal';
import AffiliateKpi from './affiliate-kpi';

const TIERS: Record<string, { color: string; bg: string; rate: string; minSales: number }> = {
  Bronze: { color: G.amber, bg: G.amberL, rate: '10%', minSales: 0 },
  Silver: { color: '#5A5A6A', bg: '#EEECF2', rate: '15%', minSales: 500 },
  Gold: { color: G.goldD, bg: G.goldPale, rate: '20%', minSales: 2000 },
  Platinum: { color: G.purple, bg: G.purpleL, rate: '25%', minSales: 5000 },
};

const TierBadge = ({ tier }: { tier: string }) => {
  const t = TIERS[tier] || TIERS.Bronze;
  return <Badge color={t.bg} text={t.color}>{tier}</Badge>;
};

export default function SectionAffiliates({ data }: { data?: any }) {
  const { affiliates = [], affiliateTrend = [] } = data || {};
  const [showAdd, setShowAdd] = useState(false);
  const [detail, setDetail] = useState<any | null>(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* KPIs */}
      <AffiliateKpi data={data} />

      {/* Trend + Tier */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 18 }}>
        <Card>
          <SecHead icon={TrendingUp} title="Affiliate Revenue Trend" subtitle="Revenue & signups driven by affiliates · 6 months" />
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={affiliateTrend}>
              <defs>
                <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={G.goldL} stopOpacity={0.28} />
                  <stop offset="95%" stopColor={G.goldL} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={G.borderL} vertical={false} />
              <XAxis dataKey="m" tick={{ fontSize: 10, fill: G.slateL }} axisLine={false} tickLine={false} />
              <YAxis yAxisId="r" tick={{ fontSize: 10, fill: G.slateL }} axisLine={false} tickLine={false} tickFormatter={v => `$${v / 1000}K`} />
              <YAxis yAxisId="s" orientation="right" tick={{ fontSize: 10, fill: G.slateL }} axisLine={false} tickLine={false} />
              <Tooltip content={<ChartTooltip />} />
              <Area yAxisId="r" type="monotone" dataKey="revenue" name="Revenue" stroke={G.gold} strokeWidth={2.5} fill="url(#ag)" dot={{ r: 3, fill: G.gold }} />
              <Line yAxisId="s" type="monotone" dataKey="signups" name="Signups" stroke={G.goldD} strokeWidth={2} dot={{ r: 3, fill: G.goldD }} strokeDasharray="4 2" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <SecHead icon={Award} title="Commission Tier Structure" subtitle="Rates auto-applied by total revenue driven" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {Object.entries(TIERS).map(([tier, t]) => (
              <div key={tier} style={{ background: t.bg, borderRadius: 12, padding: '12px 16px', border: `1px solid ${t.color}28`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: t.color }}>{tier}</div>
                  <div style={{ fontSize: 10, color: t.color, opacity: 0.65 }}>
                    {tier === 'Bronze' ? 'Entry level' : `Min $${t.minSales.toLocaleString()} revenue`}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 24, fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, color: t.color }}>{t.rate}</div>
                  <div style={{ fontSize: 9, color: t.color, opacity: 0.6 }}>commission</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Table */}
      <AffiliateTables setShowAdd={setShowAdd} setDetail={setDetail} TierBadge={TierBadge} data={data} />

      {/* Detail Drawer */}
      {detail && <Drawer detail={detail} setDetail={setDetail} TierBadge={TierBadge} />}

      {/* Add Affiliate Modal */}
      {showAdd && (
        <AffiliateModal setShowAdd={setShowAdd} setDetail={setDetail} TierBadge={TierBadge} />
      )}
    </div>
  );
}
