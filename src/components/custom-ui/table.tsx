'use client';
import G from '../../utils/design-tokens';

export const Th = ({ children, right }: { children: React.ReactNode; right?: boolean }) => (
  <th style={{
    textAlign: right ? 'right' : 'left', fontSize: 10, color: G.slateL, fontWeight: 700,
    padding: '7px 12px', letterSpacing: '0.07em', textTransform: 'uppercase',
    borderBottom: `1px solid ${G.border}`, whiteSpace: 'nowrap',
  }}>{children}</th>
);

export const Td = ({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <td style={{
    padding: '10px 12px', fontSize: 12, color: G.dark,
    borderBottom: `1px solid ${G.borderL}`, ...style,
  }}>{children}</td>
);
