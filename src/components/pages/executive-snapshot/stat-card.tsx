'use client';
import G from '@/utils/design-tokens';

import { ExecutiveStatCardProps } from '@/types/dashboard';

export default function StatCard({
  icon: Icon,
  label,
  value,
  delta,
  deltaLabel = 'vs last month',
  invertDelta = false,
}: ExecutiveStatCardProps) {
  const isPositive = invertDelta ? delta < 0 : delta > 0;

  return (
    <div style={{
      background: G.white,
      border: `1px solid ${G.border}`,
      borderRadius: 14,
      padding: '18px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      minWidth: 0,
    }}>
      {/* Top row: icon + label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{
          width: 28, height: 28, borderRadius: 7,
          background: G.goldPale,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <Icon size={14} color={G.goldD} />
        </div>
        <span style={{
          fontSize: 13, color: '#4B5563',
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 600,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          lineHeight: 1,
        }}>
          {label}
        </span>
      </div>

      {/* Value */}
      <div style={{
        fontSize: 24,
        fontFamily: "'Bebas Neue', cursive",
        fontWeight: 700,
        color: '#111827',
        lineHeight: 1,
      }}>
        {value}
      </div>

      {/* Delta row */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 4,
        fontSize: 10.5, color: '#4B5563',
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
      }}>
        <span style={{ lineHeight: '15px' }}>Increase by</span>
        <span style={{
          background: isPositive ? '#e6f4ec' : '#fdecea',
          color: isPositive ? G.green : G.red,
          fontWeight: 600,
          fontSize: 10,
          padding: '1px 6px',
          borderRadius: 4,
        }}>
          {delta > 0 ? '+' : ''}{delta}%
        </span>
        <span style={{ lineHeight: '15px' }}>{deltaLabel}</span>
      </div>
    </div>
  );
}
