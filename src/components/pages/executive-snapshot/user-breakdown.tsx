'use client';
import G from '@/utils/design-tokens';

const ROWS = [
  { label: 'Free Users', value: '8,420', color: G.green },
  { label: 'Trial Users', value: '3,104', color: G.gold },
  { label: 'Paid — Monthly', value: '9,812', color: G.dark },
  { label: 'Cancellations (30D)', value: '284', color: G.red },
];

export default function UserBreakdown() {
  return (
    <div style={{
      background: G.white,
      border: `1px solid ${G.border}`,
      borderRadius: 14,
      padding: '22px 24px',
      flex: 1,
      minWidth: 0,
    }}>
      {/* Header */}
      <div style={{ marginBottom: 18 }}>
        <div style={{
          fontSize: 15, fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 700, color: G.dark,
        }}>
          User Status Breakdown
        </div>
        <div style={{ fontSize: 11, color: G.slateL, marginTop: 2 }}>
          All registered users
        </div>
      </div>

      {/* Rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {ROWS.map((row, i) => (
          <div key={row.label} style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center',
            padding: '14px 0',
            borderBottom: i < ROWS.length - 1 ? `1px solid ${G.borderL}` : 'none',
          }}>
            <span style={{
              fontSize: 13, fontWeight: 500, color: row.color,
              fontFamily: "'DM Sans', sans-serif",
            }}>
              {row.label}
            </span>
            <span style={{
              fontSize: 14, fontWeight: 700, color: row.color,
              fontFamily: "'Cormorant Garamond', serif",
              letterSpacing: '0.01em',
            }}>
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
