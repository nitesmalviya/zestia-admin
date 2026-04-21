'use client';
import G from '../../utils/design-tokens';

import { BadgeProps } from '@/types/ui';

const Badge = ({ children, color = G.goldPale, text = G.goldD, size = 11 }: BadgeProps) => (
  <span style={{
    background: color, color: text, fontSize: size, fontWeight: 700,
    padding: '3px 9px', borderRadius: 6, letterSpacing: '0.03em', whiteSpace: 'nowrap',
  }}>{children}</span>
);

export default Badge;
