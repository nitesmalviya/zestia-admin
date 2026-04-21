
'use client';
import { Tag, Plus, Edit3, Trash2, Copy } from 'lucide-react';
import G from '../../../utils/design-tokens';
import { Card } from '../../custom-ui/card';
import SecHead from '../../custom-ui/sec-head';
import Badge from '../../custom-ui/badge';
import GoldBtn from '../../custom-ui/gold-btn';
import ProgressBar from '../../custom-ui/progress-bar';
import { Th, Td } from '../../custom-ui/table';
import { CouponForm } from '@/types/marketing';


const CouponsTables = ({ setShowModal, setForm, data }: { setShowModal: (showModal: boolean) => void, setForm: React.Dispatch<React.SetStateAction<CouponForm>>, data?: any }) => {
    const { list: couponsList = [] } = data || {};
    const handleEditClick = (i: number) => {
        setForm(couponsList[i])
        setShowModal(true)
    }
    return (
        <Card>
            <SecHead icon={Tag} title="Coupon Codes"
                subtitle="Create and track discount codes · per-user limits · expiry controls"
                action={<GoldBtn small onClick={() => setShowModal(true)}><Plus size={13} />New Coupon</GoldBtn>} />
            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 920 }}>
                    <thead>
                        <tr>
                            <Th>Code</Th><Th>Type</Th><Th>Value</Th><Th>Applies To</Th>
                            <Th>Duration</Th><Th>Expiry</Th><Th>Uses / Max</Th>
                            <Th right>Revenue</Th><Th right>Conv %</Th><Th right>Retention</Th>
                            <Th>Status</Th><Th>Actions</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {couponsList.map((c: any, i: number) => {
                            const pct = Math.round((c.uses / c.maxUses) * 100);
                            return (
                                <tr key={c.code}>
                                    <Td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                            <span style={{ fontFamily: 'monospace', fontWeight: 700, color: G.goldD, fontSize: 13 }}>{c.code}</span>
                                            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: G.slateL, padding: 2 }}>
                                                <Copy size={10} />
                                            </button>
                                        </div>
                                    </Td>
                                    <Td><Badge>{c.type}</Badge></Td>
                                    <Td style={{ fontWeight: 700, color: G.dark }}>{c.value}</Td>
                                    <Td style={{ color: G.slate }}>{c.applies}</Td>
                                    <Td style={{ color: G.slateL, fontSize: 11 }}>{c.duration}</Td>
                                    <Td style={{ color: G.slateL, fontSize: 11 }}>{c.expiry === 'None' ? 'No expiry' : c.expiry}</Td>
                                    <Td>
                                        <div style={{ minWidth: 130 }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                                                <span style={{ fontSize: 10, color: G.dark, fontWeight: 600 }}>{c.uses}/{c.maxUses}</span>
                                                <span style={{ fontSize: 10, fontWeight: 700, color: c.uses >= c.maxUses ? G.red : G.goldD }}>{pct}%</span>
                                            </div>
                                            <ProgressBar value={c.uses} max={c.maxUses} color={c.uses >= c.maxUses ? G.red : G.gold} height={5} />
                                        </div>
                                    </Td>
                                    <Td style={{ textAlign: 'right', color: G.green, fontWeight: 700 }}>${c.revenue.toLocaleString()}</Td>
                                    <Td style={{ textAlign: 'right' }}>{c.convRate}%</Td>
                                    <Td style={{ textAlign: 'right' }}>{c.retention}%</Td>
                                    <Td>
                                        <Badge
                                            color={c.status === 'Active' ? G.greenL : c.status === 'Exhausted' ? G.redL : G.amberL}
                                            text={c.status === 'Active' ? G.green : c.status === 'Exhausted' ? G.red : G.amber}
                                        >{c.status}</Badge>
                                    </Td>
                                    <Td>
                                        <div style={{ display: 'flex', gap: 5 }}>
                                            <button onClick={() => handleEditClick(i)} style={{ background: G.goldPale, border: 'none', borderRadius: 6, padding: '4px 8px', fontSize: 10, color: G.goldD, cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 3 }}>
                                                <Edit3 size={10} />Edit
                                            </button>
                                            <button style={{ background: G.redL, border: 'none', borderRadius: 6, padding: '4px 8px', fontSize: 10, color: G.red, cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 3 }}>
                                                <Trash2 size={10} />
                                            </button>
                                        </div>
                                    </Td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </Card>
    )
}

export default CouponsTables