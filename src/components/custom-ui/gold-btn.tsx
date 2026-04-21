'use client';
import G from '../../utils/design-tokens';

import { GoldBtnProps } from '@/types/ui';

const GoldBtn = ({ children, onClick, small, outline, full, disabled }: GoldBtnProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={{
      background: outline ? 'transparent' : `linear-gradient(135deg,${G.goldL},${G.goldD})`,
      color: outline ? G.goldD : G.white,
      border: outline ? `1.5px solid ${G.goldD}` : 'none',
      borderRadius: 10,
      padding: small ? '7px 14px' : '10px 20px',
      fontSize: small ? 11 : 13,
      fontWeight: 700,
      cursor: disabled ? 'default' : 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      letterSpacing: '0.04em',
      boxShadow: outline ? 'none' : '0 4px 14px rgba(180,150,60,0.3)',
      flexShrink: 0,
      width: full ? '100%' : undefined,
      justifyContent: full ? 'center' : undefined,
      opacity: disabled ? 0.6 : 1,
    }}
  >
    {children}
  </button>
);

export default GoldBtn;
