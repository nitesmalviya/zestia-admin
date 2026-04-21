'use client';
import G from '../../utils/design-tokens';

import { ChartTooltipProps } from '@/types/ui';

const ChartTooltip = ({ active, payload, label }: ChartTooltipProps) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: G.white, border: `1px solid ${G.border}`, borderRadius: 10,
      padding: '10px 14px', fontSize: 11, boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    }}>
      <div style={{ fontWeight: 700, color: G.dark, marginBottom: 4 }}>{label}</div>
      {payload.map(p => (
        <div key={p.name} style={{ color: p.color || G.gold }}>
          {p.name}: <b>{p.value?.toLocaleString?.()}</b>
        </div>
      ))}
    </div>
  );
};

export default ChartTooltip;
