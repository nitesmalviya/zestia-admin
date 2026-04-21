
'use client';
import {
    AreaChart, Area, XAxis, YAxis,
    CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { DollarSign, Award, } from 'lucide-react';
import G from '../../../utils/design-tokens';
import { Card } from '../../custom-ui/card';
import SecHead from '../../custom-ui/sec-head';
import ProgressBar from '../../custom-ui/progress-bar';
import ChartTooltip from '../../custom-ui/chart-tooltip';
import { mrrData, engagementBreakdown, } from '../../../utils/mock-data';


const OverviewStats = () => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 18 }}>
            <Card>
                <SecHead icon={DollarSign} title="MRR Trend" subtitle="Monthly Recurring Revenue · 6-month view" />
                <ResponsiveContainer width="100%" height={200}>
                    <AreaChart data={mrrData}>
                        <defs>
                            <linearGradient id="mg" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={G.goldL} stopOpacity={0.28} />
                                <stop offset="95%" stopColor={G.goldL} stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke={G.borderL} vertical={false} />
                        <XAxis dataKey="m" tick={{ fontSize: 10, fill: G.slateL }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fontSize: 10, fill: G.slateL }} axisLine={false} tickLine={false} tickFormatter={v => `$${v / 1000}K`} />
                        <Tooltip content={<ChartTooltip />} />
                        <Area type="monotone" dataKey="mrr" name="MRR" stroke={G.gold} strokeWidth={2.5}
                            fill="url(#mg)" dot={{ r: 3, fill: G.gold, stroke: G.white, strokeWidth: 2 }} />
                    </AreaChart>
                </ResponsiveContainer>
            </Card>

            <Card>
                <SecHead icon={Award} title="Avg Engagement Score" subtitle="Composite 0–100 · updated daily" />
                <div style={{ textAlign: 'center', padding: '6px 0 14px' }}>
                    <div style={{ fontSize: 54, fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, color: G.goldD, lineHeight: 1 }}>67.0</div>
                    <div style={{ fontSize: 11, color: G.slateL, marginTop: 3, marginBottom: 10 }}>out of 100</div>
                    <ProgressBar value={67} max={100} height={10} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                    {engagementBreakdown.map(e => (
                        <div key={e.name} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <div style={{ fontSize: 10, color: G.slate, width: 128, flexShrink: 0 }}>{e.name}</div>
                            <div style={{ flex: 1 }}><ProgressBar value={e.avg} max={e.max} height={5} /></div>
                            <div style={{ fontSize: 10, fontWeight: 700, color: G.goldD, width: 42, textAlign: 'right' }}>{e.avg}/{e.max}</div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    )
}

export default OverviewStats