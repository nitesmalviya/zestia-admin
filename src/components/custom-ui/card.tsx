'use client';
import G from '../../utils/design-tokens';

export const Card = ({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{
    background: G.white, border: `1px solid ${G.border}`, borderRadius: 16,
    padding: '22px 24px', boxShadow: '0 2px 16px rgba(180,150,60,0.06)', ...style,
  }}>
    {children}
  </div>
);

