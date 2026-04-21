
'use client';
import React from 'react';
import {
    Award, X, Edit3, Trash2, CheckCircle, Send, ExternalLink, Percent,
} from 'lucide-react';
import G from '../../../utils/design-tokens';
import Badge from '../../custom-ui/badge';
import GoldBtn from '../../custom-ui/gold-btn';

const Drawer = ({ detail, setDetail, TierBadge }: { detail: any, setDetail: (value: any) => void, TierBadge: ({ tier }: { tier: string }) => React.JSX.Element }) => {
    return (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(24,20,13,0.5)', zIndex: 200, display: 'flex', justifyContent: 'flex-end', backdropFilter: 'blur(2px)' }}
            onClick={() => setDetail(null)}>
            <div style={{ background: G.white, width: 440, height: '100%', overflowY: 'auto', boxShadow: '-20px 0 60px rgba(0,0,0,0.18)', padding: 28 }}
                onClick={e => e.stopPropagation()}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                    <div>
                        <div style={{ fontSize: 20, fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, color: G.dark }}>{detail.name}</div>
                        <div style={{ fontSize: 11, color: G.slateL }}>{detail.handle} · {detail.id}</div>
                    </div>
                    <button onClick={() => setDetail(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: G.slateL }}><X size={18} /></button>
                </div>
                <div style={{ height: 3, background: `linear-gradient(90deg,${G.goldL},${G.goldD})`, borderRadius: 4, marginBottom: 18 }} />
                <div style={{ display: 'flex', gap: 7, marginBottom: 18, flexWrap: 'wrap' }}>
                    <TierBadge tier={detail.tier} />
                    <Badge color={G.blueL} text={G.blue}>{detail.type}</Badge>
                    <Badge color={detail.status === 'Active' ? G.greenL : G.amberL} text={detail.status === 'Active' ? G.green : G.amber}>{detail.status}</Badge>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9, marginBottom: 18 }}>
                    {[
                        { l: 'Email', v: detail.email },
                        { l: 'Coupon Code', v: detail.code },
                        { l: 'Commission Rate', v: `${detail.commissionRate}%` },
                        { l: 'Joined', v: detail.joined },
                        { l: 'Last Payout', v: detail.lastPayout },
                        { l: 'Affiliate ID', v: detail.id },
                    ].map(s => (
                        <div key={s.l} style={{ background: G.goldGhost, borderRadius: 10, padding: '9px 12px' }}>
                            <div style={{ fontSize: 10, color: G.slateL }}>{s.l}</div>
                            <div style={{ fontSize: 12, fontWeight: 600, color: G.dark, marginTop: 2 }}>{s.v}</div>
                        </div>
                    ))}
                </div>
                <div style={{ fontSize: 12, fontWeight: 700, color: G.dark, marginBottom: 10 }}>Performance</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9, marginBottom: 18 }}>
                    {[
                        { l: 'Clicks', v: detail.clicks.toLocaleString(), c: G.goldD },
                        { l: 'Signups', v: detail.signups.toLocaleString(), c: G.goldD },
                        { l: 'Conversions', v: detail.conversions.toLocaleString(), c: G.green },
                        { l: 'Revenue Generated', v: `$${detail.revenue.toLocaleString()}`, c: G.green },
                        { l: 'Commission Earned', v: `$${detail.commissionEarned.toLocaleString()}`, c: G.goldD },
                        { l: 'Commission Paid', v: `$${detail.commissionPaid.toLocaleString()}`, c: G.slateL },
                    ].map(s => (
                        <div key={s.l} style={{ background: G.white, border: `1px solid ${G.borderL}`, borderRadius: 10, padding: '10px 12px' }}>
                            <div style={{ fontSize: 10, color: G.slateL }}>{s.l}</div>
                            <div style={{ fontSize: 18, fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, color: s.c }}>{s.v}</div>
                        </div>
                    ))}
                </div>
                {(detail.commissionEarned - detail.commissionPaid) > 0 && (
                    <div style={{ background: G.redL, borderRadius: 12, padding: '14px 16px', marginBottom: 18, border: `1px solid ${G.red}28` }}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: G.red, marginBottom: 2 }}>Commission Outstanding</div>
                        <div style={{ fontSize: 24, fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, color: G.red, marginBottom: 10 }}>
                            ${(detail.commissionEarned - detail.commissionPaid).toLocaleString()}
                        </div>
                        <GoldBtn small><CheckCircle size={12} />Mark as Paid</GoldBtn>
                    </div>
                )}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                    {[
                        { l: 'Edit Affiliate Details', i: Edit3, bg: G.goldPale, c: G.goldD },
                        { l: 'Change Tier', i: Award, bg: G.goldPale, c: G.goldD },
                        { l: 'Update Commission Rate', i: Percent, bg: G.goldPale, c: G.goldD },
                        { l: 'Send Message', i: Send, bg: G.blueL, c: G.blue },
                        { l: 'View Referral Links', i: ExternalLink, bg: G.blueL, c: G.blue },
                        { l: 'Deactivate Affiliate', i: Trash2, bg: G.redL, c: G.red },
                    ].map(a => (
                        <button key={a.l} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 14px', borderRadius: 10, border: `1px solid ${a.c}22`, background: a.bg, cursor: 'pointer', fontSize: 12, fontWeight: 600, color: a.c, textAlign: 'left' }}>
                            <a.i size={13} />{a.l}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Drawer