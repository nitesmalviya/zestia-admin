'use client';
import { ArrowUp, ArrowDown } from 'lucide-react';
import G from '../../utils/design-tokens';
import { GoldTopBar } from './gold-top-bar';


import { KpiCardProps } from '@/types/ui';

const KpiCard = ({ label, value, delta, icon: Icon, invertDelta, sub }: KpiCardProps) => {
  const pos = invertDelta ? (delta ?? 0) < 0 : (delta ?? 0) > 0;
  return (
    <div style={{
      background: G.white, border: `1px solid ${G.border}`, borderRadius: 16,
      padding: '18px 20px', boxShadow: '0 2px 12px rgba(180,150,60,0.06)',
      overflow: 'hidden', position: 'relative',
    }}>
      <GoldTopBar />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
        <span style={{
          fontSize: 11, fontFamily: "'Cormorant Garamond',serif", letterSpacing: '0.09em',
          color: G.slate, textTransform: 'uppercase', fontWeight: 600,
        }}>{label}</span>
        <div style={{
          width: 32, height: 32, borderRadius: 9, background: G.goldPale,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon size={15} color={G.goldD} />
        </div>
      </div>
      <div style={{
        fontSize: 27, fontFamily: "'Cormorant Garamond',serif", fontWeight: 700,
        color: G.dark, lineHeight: 1, marginBottom: sub ? 4 : 6,
      }}>{value}</div>
      {sub && <div style={{ fontSize: 10, color: G.slateL, marginBottom: 5 }}>{sub}</div>}
      {delta !== undefined && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {pos ? <ArrowUp size={11} color={G.green} /> : <ArrowDown size={11} color={G.red} />}
          <span style={{ fontSize: 11, color: pos ? G.green : G.red, fontWeight: 600 }}>{Math.abs(delta)}%</span>
          <span style={{ fontSize: 10, color: G.slateL }}>vs last mo</span>
        </div>
      )}
    </div>
  );
};

export default KpiCard;
