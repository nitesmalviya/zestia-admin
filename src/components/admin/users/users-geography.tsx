'use client';
import { Globe } from 'lucide-react';
import G from '../../../utils/design-tokens';
import { Card } from '../../custom-ui/card';
import SecHead from '../../custom-ui/sec-head';
import ProgressBar from '../../custom-ui/progress-bar';
import { geoData } from '../../../utils/mock-data';

export default function UsersGeography() {
    return (
        <Card>
            <SecHead icon={Globe} title="Geography" subtitle="Top countries by user count" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                {geoData.map(g => (
                    <div key={g.country}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                            <span style={{ fontSize: 11, color: G.dark }}>{g.country}</span>
                            <div style={{ display: 'flex', gap: 8 }}>
                                <span style={{ fontSize: 10, color: G.slateL }}>{g.users.toLocaleString()}</span>
                                <span style={{ fontSize: 11, fontWeight: 700, color: G.goldD }}>{g.pct}%</span>
                            </div>
                        </div>
                        <ProgressBar value={g.pct} max={100} height={5} />
                    </div>
                ))}
            </div>
        </Card>
    );
}
