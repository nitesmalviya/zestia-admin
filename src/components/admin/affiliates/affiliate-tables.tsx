'use client';

import {
    Link2,
    Plus, Copy,
} from 'lucide-react';
import G from '../../../utils/design-tokens';
import { Card } from '../../custom-ui/card';
import SecHead from '../../custom-ui/sec-head';
import Badge from '../../custom-ui/badge';
import GoldBtn from '../../custom-ui/gold-btn';
import { Th, Td } from '../../custom-ui/table';
import { useState } from 'react';

const AffiliateTables = ({ setShowAdd, setDetail, TierBadge, data }: { setShowAdd: (value: boolean) => void, setDetail: (value: any) => void, TierBadge: ({ tier }: { tier: string }) => React.JSX.Element, data?: any }) => {
    const { affiliates: affiliatesList = [] } = data || {};
    const [activeTab, setActiveTab] = useState('all');

    const filtered = activeTab === 'all'
        ? affiliatesList
        : affiliatesList.filter((a: any) => a.status === activeTab || a.tier === activeTab);

    const totalOwed = affiliatesList.reduce((a: any, x: any) => a + (x.commissionEarned - x.commissionPaid), 0);

    return (
        <Card>
            <SecHead icon={Link2} title="Affiliate Partners"
                subtitle="Click any row to view full profile · track clicks, signups, conversions, and commissions"
                action={<GoldBtn small onClick={() => setShowAdd(true)}><Plus size={13} />Add Affiliate</GoldBtn>} />

            {/* Filter tabs */}
            <div style={{ display: 'flex', gap: 6, marginBottom: 16, flexWrap: 'wrap' }}>
                {['all', 'Active', 'Pending', 'Platinum', 'Gold', 'Silver', 'Bronze'].map(tab => (
                    <button key={tab} onClick={() => setActiveTab(tab)} style={{
                        padding: '5px 13px', borderRadius: 20, fontSize: 11, fontWeight: 600, cursor: 'pointer',
                        background: activeTab === tab ? `linear-gradient(135deg,${G.goldL},${G.goldD})` : G.goldGhost,
                        color: activeTab === tab ? G.white : G.goldD,
                        border: `1px solid ${activeTab === tab ? 'transparent' : G.border}`,
                    }}>{tab.charAt(0).toUpperCase() + tab.slice(1)}</button>
                ))}
            </div>

            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 1020 }}>
                    <thead>
                        <tr>
                            <Th>Affiliate</Th><Th>Type</Th><Th>Tier</Th><Th>Code</Th>
                            <Th right>Clicks</Th><Th right>Signups</Th><Th right>Conv.</Th>
                            <Th right>Conv %</Th><Th right>Revenue</Th>
                            <Th right>Earned</Th><Th right>Paid</Th><Th right>Owed</Th>
                            <Th>Status</Th><Th>Actions</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((a: any) => {
                            const cp = a.signups > 0 ? ((a.conversions / a.signups) * 100).toFixed(1) : '0';
                            const owed = a.commissionEarned - a.commissionPaid;
                            return (
                                <tr key={a.id} style={{ cursor: 'pointer' }} onClick={() => setDetail(a)}>
                                    <Td>
                                        <div>
                                            <div style={{ fontWeight: 700, color: G.dark }}>{a.name}</div>
                                            <div style={{ fontSize: 10, color: G.slateL }}>{a.handle} · {a.email}</div>
                                        </div>
                                    </Td>
                                    <Td><Badge color={G.blueL} text={G.blue}>{a.type}</Badge></Td>
                                    <Td><TierBadge tier={a.tier} /></Td>
                                    <Td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                                            <span style={{ fontFamily: 'monospace', fontSize: 12, fontWeight: 700, color: G.goldD }}>{a.code}</span>
                                            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: G.slateL, padding: 1 }} onClick={e => e.stopPropagation()}>
                                                <Copy size={10} />
                                            </button>
                                        </div>
                                    </Td>
                                    <Td style={{ textAlign: 'right' }}>{a.clicks.toLocaleString()}</Td>
                                    <Td style={{ textAlign: 'right' }}>{a.signups.toLocaleString()}</Td>
                                    <Td style={{ textAlign: 'right', fontWeight: 600 }}>{a.conversions.toLocaleString()}</Td>
                                    <Td style={{ textAlign: 'right' }}>
                                        <Badge
                                            color={parseFloat(cp) >= 40 ? G.greenL : parseFloat(cp) >= 20 ? G.amberL : G.redL}
                                            text={parseFloat(cp) >= 40 ? G.green : parseFloat(cp) >= 20 ? G.amber : G.red}
                                        >{cp}%</Badge>
                                    </Td>
                                    <Td style={{ textAlign: 'right', color: G.green, fontWeight: 700 }}>${a.revenue.toLocaleString()}</Td>
                                    <Td style={{ textAlign: 'right', color: G.goldD, fontWeight: 600 }}>${a.commissionEarned.toLocaleString()}</Td>
                                    <Td style={{ textAlign: 'right', color: G.slateL }}>${a.commissionPaid.toLocaleString()}</Td>
                                    <Td style={{ textAlign: 'right' }}>
                                        {owed > 0
                                            ? <span style={{ color: G.red, fontWeight: 700 }}>${owed.toLocaleString()}</span>
                                            : <span style={{ color: G.green, fontSize: 11 }}>✓ Paid</span>}
                                    </Td>
                                    <Td>
                                        <Badge color={a.status === 'Active' ? G.greenL : G.amberL} text={a.status === 'Active' ? G.green : G.amber}>{a.status}</Badge>
                                    </Td>
                                    <Td>
                                        <div style={{ display: 'flex', gap: 5 }} onClick={e => e.stopPropagation()}>
                                            <button style={{ background: G.goldPale, border: 'none', borderRadius: 6, padding: '4px 9px', fontSize: 10, color: G.goldD, cursor: 'pointer', fontWeight: 600 }}>View</button>
                                            {owed > 0 && (
                                                <button style={{ background: G.greenL, border: 'none', borderRadius: 6, padding: '4px 9px', fontSize: 10, color: G.green, cursor: 'pointer', fontWeight: 600 }}>Pay</button>
                                            )}
                                        </div>
                                    </Td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Commission summary footer */}
            <div style={{ display: 'flex', marginTop: 16, background: G.goldGhost, borderRadius: 12, border: `1px solid ${G.border}`, overflow: 'hidden' }}>
                {[
                    { label: 'Total commission earned', value: `$${affiliatesList.reduce((a: any, x: any) => a + x.commissionEarned, 0).toLocaleString()}` },
                    { label: 'Total commission paid', value: `$${affiliatesList.reduce((a: any, x: any) => a + x.commissionPaid, 0).toLocaleString()}`, color: G.green },
                    { label: 'Total commission owed', value: `$${totalOwed.toLocaleString()}`, color: G.red },
                    { label: 'Avg commission rate', value: `${(affiliatesList.reduce((a: any, x: any) => a + x.commissionRate, 0) / (affiliatesList.length || 1)).toFixed(1)}%` },
                ].map((s, i, arr) => (
                    <div key={s.label} style={{ flex: 1, padding: '14px 18px', textAlign: 'center', borderRight: i < arr.length - 1 ? `1px solid ${G.border}` : 'none' }}>
                        <div style={{ fontSize: 10, color: G.slateL, marginBottom: 3 }}>{s.label}</div>
                        <div style={{ fontSize: 19, fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, color: s.color || G.goldD }}>{s.value}</div>
                    </div>
                ))}
            </div>
        </Card>

    )
}

export default AffiliateTables