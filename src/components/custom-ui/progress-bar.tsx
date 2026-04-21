'use client';
import G from '../../utils/design-tokens';
import { ProgressBarProps } from '@/types/ui';

const ProgressBar = ({ value, max, color = G.gold, height = 7 }: ProgressBarProps) => (
  <div style={{ height, background: G.borderL, borderRadius: 4, overflow: 'hidden' }}>
    <div style={{
      height: '100%', width: `${Math.min((value / max) * 100, 100)}%`,
      background: `linear-gradient(90deg,${G.goldL},${color})`, borderRadius: 4,
    }} />
  </div>
);

export default ProgressBar;
