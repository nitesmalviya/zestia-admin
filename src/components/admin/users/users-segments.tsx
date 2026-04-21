'use client';
import { Layers } from 'lucide-react';
import G from '../../../utils/design-tokens';
import { Card } from '../../custom-ui/card';
import SecHead from '../../custom-ui/sec-head';
import ProgressBar from '../../custom-ui/progress-bar';

export default function UsersSegments() {
    return (
        <Card>
            <SecHead icon={Layers} title="User Segments" subtitle="Subscription & engagement tiers" />
            <div style={{ marginBottom: 14 }}>
                {[
                    { label: 'Free', value: 8420, color: G.slateL },
                    { label: 'Trial', value: 4210, color: G.amber },
                    { label: 'Monthly Paid', value: 7840, color: G.gold },
                    { label: 'Yearly Paid', value: 4421, color: G.goldD },
                ].map(s => (
                    <div key={s.label} style={{ marginBottom: 9 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                            <span style={{ fontSize: 11, color: G.slate }}>{s.label}</span>
                            <span style={{ fontSize: 11, fontWeight: 700, color: G.dark }}>{s.value.toLocaleString()}</span>
                        </div>
                        <ProgressBar value={s.value} max={24891} color={s.color} height={7} />
                    </div>
                ))}
            </div>
            <div style={{ height: 1, background: G.borderL, margin: '2px 0 12px' }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7 }}>
                {[
                    { label: 'Full-price', value: '61%' },
                    { label: 'Coupon users', value: '22%' },
                    { label: 'Affiliate users', value: '17%' },
                    { label: 'Highly engaged', value: '38%' },
                ].map(s => (
                    <div key={s.label} style={{ background: G.goldGhost, borderRadius: 9, padding: '8px 10px' }}>
                        <div style={{ fontSize: 10, color: G.slateL }}>{s.label}</div>
                        <div style={{ fontSize: 17, fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, color: G.goldD }}>{s.value}</div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
