'use client';
import G from '@/utils/design-tokens';

const SEGMENTS = [
  { label: 'iOS', pct: 57.0, count: '14,200', color: '#1A5A3A' },
  { label: 'Android', pct: 32.5, count: '2,591', color: G.gold },
  { label: 'Web', pct: 10.4, count: '2,591', color: '#B8A170' },
];

export default function DonutChart() {
  const SIZE = 140;
  const STROKE = 24;
  const RADIUS = (SIZE - STROKE) / 2;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
  const CENTER = SIZE / 2;

  let cumulativeOffset = 0;

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
      <div style={{ marginBottom: 20 }}>
        <div style={{
          fontSize: 15, fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 700, color: G.dark,
        }}>
          Platform Split
        </div>
        <div style={{ fontSize: 11, color: G.slateL, marginTop: 2 }}>
          Active users by platform
        </div>
      </div>

      {/* Donut + Legend row */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 28,
      }}>
        {/* SVG Donut */}
        <div style={{ position: 'relative', width: SIZE, height: SIZE, flexShrink: 0 }}>
          <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
            {SEGMENTS.map((seg, i) => {
              const dashLen = (seg.pct / 100) * CIRCUMFERENCE;
              const gapLen = CIRCUMFERENCE - dashLen;
              const offset = -cumulativeOffset + CIRCUMFERENCE * 0.25; // start from top
              cumulativeOffset += dashLen;

              return (
                <circle
                  key={seg.label}
                  cx={CENTER}
                  cy={CENTER}
                  r={RADIUS}
                  fill="none"
                  stroke={seg.color}
                  strokeWidth={STROKE}
                  strokeDasharray={`${dashLen} ${gapLen}`}
                  strokeDashoffset={offset}
                  strokeLinecap="butt"
                  style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                />
              );
            })}
          </svg>
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {SEGMENTS.map(seg => (
            <div key={seg.label} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              fontSize: 12, color: G.dark, fontFamily: "'DM Sans', sans-serif",
            }}>
              <div style={{
                width: 8, height: 8, borderRadius: '50%',
                background: seg.color, flexShrink: 0,
              }} />
              <span style={{ color: G.slate, fontWeight: 500 }}>
                {seg.label}: {seg.pct}%
              </span>
              <span style={{ color: G.slateL, fontWeight: 400 }}>
                {seg.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
