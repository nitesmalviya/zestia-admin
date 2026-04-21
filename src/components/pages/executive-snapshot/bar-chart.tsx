'use client';
import G from '@/utils/design-tokens';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const VALUES = [45, 52, 78, 60, 55, 48, 52, 95, 72, 65, 58, 50]; // Relative percentages
const MAX_VAL = 100;
const Y_LABELS = ['$100K', '$75K', '$50K', '$25K', '$10K', '0'];

export default function BarChart() {
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
          Daily Active Users
        </div>
        <div style={{ fontSize: 11, color: G.slateL, marginTop: 2 }}>
          Last 12 months · weekly avg
        </div>
      </div>

      {/* Chart area */}
      <div style={{ display: 'flex', gap: 0 }}>
        {/* Y-axis labels */}
        <div style={{
          display: 'flex', flexDirection: 'column',
          justifyContent: 'space-between',
          paddingBottom: 24, marginRight: 8,
          minWidth: 40,
        }}>
          {Y_LABELS.map(l => (
            <span key={l} style={{
              fontSize: 9, color: G.slateL, textAlign: 'right',
              fontFamily: "'DM Sans', sans-serif",
            }}>
              {l}
            </span>
          ))}
        </div>

        {/* Bars */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{
            flex: 1, display: 'flex', alignItems: 'flex-end',
            gap: 6, height: 180,
            borderBottom: `1px solid ${G.borderL}`,
            paddingBottom: 0,
          }}>
            {VALUES.map((v, i) => {
              const isHighlighted = i === 7; // August
              return (
                <div key={MONTHS[i]} style={{
                  flex: 1, display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'flex-end',
                  height: '100%',
                }}>
                  <div style={{
                    width: '70%',
                    maxWidth: 32,
                    height: `${(v / MAX_VAL) * 100}%`,
                    background: isHighlighted
                      ? `linear-gradient(180deg, ${G.gold} 0%, ${G.goldD} 100%)`
                      : `linear-gradient(180deg, ${G.goldPale} 0%, #EDE4CC 100%)`,
                    borderRadius: '4px 4px 0 0',
                    transition: 'height 0.3s ease',
                    minHeight: 4,
                  }} />
                </div>
              );
            })}
          </div>

          {/* X-axis labels */}
          <div style={{
            display: 'flex', gap: 6, marginTop: 8,
          }}>
            {MONTHS.map((m, i) => (
              <div key={m} style={{
                flex: 1, textAlign: 'center',
                fontSize: 9, color: i === 7 ? G.dark : G.slateL,
                fontWeight: i === 7 ? 700 : 400,
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {m}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
