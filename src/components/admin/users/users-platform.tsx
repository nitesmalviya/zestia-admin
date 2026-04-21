'use client';
import {
    PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
} from 'recharts';
import { Smartphone } from 'lucide-react';
import G from '../../../utils/design-tokens';
import { Card } from '../../custom-ui/card';
import SecHead from '../../custom-ui/sec-head';
import { platformData } from '../../../utils/mock-data';

export default function UsersPlatform() {
    return (
        <Card>
            <SecHead icon={Smartphone} title="By Platform" subtitle="Total 24,891 users" />
            <ResponsiveContainer width="100%" height={148}>
                <PieChart>
                    <Pie data={platformData} cx="50%" cy="50%" innerRadius={40} outerRadius={62} paddingAngle={4} dataKey="value">
                        {platformData.map((_, i) => <Cell key={i} fill={[G.goldL, G.gold, G.goldD][i]} />)}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: 10, border: `1px solid ${G.border}`, fontSize: 11 }} />
                </PieChart>
            </ResponsiveContainer>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {platformData.map((p, i) => (
                    <div key={p.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                            <div style={{ width: 10, height: 10, borderRadius: 3, background: [G.goldL, G.gold, G.goldD][i] }} />
                            <span style={{ fontSize: 12, color: G.dark }}>{p.name}</span>
                        </div>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                            <span style={{ fontSize: 10, color: G.slateL }}>{((p.value / 24891) * 100).toFixed(1)}%</span>
                            <span style={{ fontSize: 12, fontWeight: 700, color: G.goldD }}>{p.value.toLocaleString()}</span>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
