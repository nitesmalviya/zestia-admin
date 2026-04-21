'use client';
import G from '../../utils/design-tokens';

import { SecHeadProps } from '@/types/ui';

const SecHead = ({ icon: Icon, title, subtitle, action }: SecHeadProps) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{
        width: 36, height: 36, borderRadius: 10, background: G.goldPale,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <Icon size={17} color={G.goldD} />
      </div>
      <div>
        <div style={{ fontSize: 15, fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, color: G.dark }}>{title}</div>
        {subtitle && <div style={{ fontSize: 11, color: G.slateL, marginTop: 1 }}>{subtitle}</div>}
      </div>
    </div>
    {action}
  </div>
);

export default SecHead;
