'use client';
import G from '@/utils/design-tokens';

const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
// Engagement scores mapped to y positions (0=top, 100=bottom)
const POINTS = [
  { x: 0, y: 65 },
  { x: 1, y: 55 },
  { x: 2, y: 60 },
  { x: 3, y: 40 },
  { x: 4, y: 30 },
  { x: 5, y: 15 },
  { x: 6, y: 20 },
];

export default function LineChart() {
  const W = 320;
  const H = 160;
  const PAD_X = 10;
  const PAD_Y = 10;
  const chartW = W - PAD_X * 2;
  const chartH = H - PAD_Y * 2;

  const toX = (i: number) => PAD_X + (i / (POINTS.length - 1)) * chartW;
  const toY = (v: number) => PAD_Y + (v / 100) * chartH;

  // Build smooth curve path
  const pathPoints = POINTS.map((p, i) => ({ x: toX(i), y: toY(p.y) }));
  let d = `M ${pathPoints[0].x} ${pathPoints[0].y}`;
  for (let i = 1; i < pathPoints.length; i++) {
    const prev = pathPoints[i - 1];
    const curr = pathPoints[i];
    const cpx1 = prev.x + (curr.x - prev.x) * 0.4;
    const cpx2 = curr.x - (curr.x - prev.x) * 0.4;
    d += ` C ${cpx1} ${prev.y}, ${cpx2} ${curr.y}, ${curr.x} ${curr.y}`;
  }

  // Area fill path
  const lastPoint = pathPoints[pathPoints.length - 1];
  const firstPoint = pathPoints[0];
  const areaD = d + ` L ${lastPoint.x} ${H} L ${firstPoint.x} ${H} Z`;

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
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-start', marginBottom: 16,
      }}>
        <div>
          <div style={{
            fontSize: 15, fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700, color: G.dark,
          }}>
            Avg Engagement Score
          </div>
          <div style={{ fontSize: 11, color: G.slateL, marginTop: 2 }}>
            Composite 0–100 · updated daily
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{
            fontSize: 32, fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700, color: G.dark, lineHeight: 1,
          }}>
            67.0
          </div>
          <div style={{ fontSize: 10, color: G.slateL, marginTop: 2 }}>
            out of 100
          </div>
        </div>
      </div>

      {/* SVG Chart */}
      <div style={{ width: '100%', marginBottom: 8 }}>
        <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto' }} preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={G.gold} stopOpacity={0.3} />
              <stop offset="100%" stopColor={G.gold} stopOpacity={0.02} />
            </linearGradient>
          </defs>
          {/* Area fill */}
          <path d={areaD} fill="url(#lineGrad)" />
          {/* Line */}
          <path d={d} fill="none" stroke={G.gold} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
          {/* End dot */}
          <circle cx={lastPoint.x} cy={lastPoint.y} r={5} fill={G.white} stroke={G.gold} strokeWidth={2.5} />
        </svg>
      </div>

      {/* X-axis labels */}
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        padding: '0 10px',
      }}>
        {DAYS.map((d, i) => (
          <span key={`${d}-${i}`} style={{
            fontSize: 10,
            color: i === 5 ? G.gold : G.slateL,
            fontWeight: i === 5 ? 700 : 400,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            {d}
          </span>
        ))}
      </div>
    </div>
  );
}
