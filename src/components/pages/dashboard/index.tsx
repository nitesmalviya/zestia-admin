'use client';

import type { CSSProperties, ReactNode } from 'react';
import G from '@/utils/design-tokens';

export const fonts = {
  title: "'Bebas Neue', sans-serif",
  body: "'Montserrat', sans-serif",
  value: "'Bebas Neue', sans-serif",
  micro: "'Inter', sans-serif",
};

export const colors = {
  appBg: '#FDFAF4',
  panelBg: '#FFFFFF',
  border: '#FEBD24',
  borderSoft: 'rgba(254, 189, 36, 0.32)',
  heading: '#111827',
  text: '#4B5563',
  muted: '#9AA0B2',
  green: '#12C65A',
  gold: '#C7A24C',
  danger: '#FF3B30',
};

export const panelStyle: CSSProperties = {
  background: colors.panelBg,
  border: `1px solid ${colors.borderSoft}`,
  borderRadius: 10,
  padding: '14px 16px',
};

import { PanelProps, StatCardProps, PanelHeaderProps, KeyValueRowProps, ProgressRowProps } from '@/types/dashboard';

export function Panel({ children, style }: PanelProps) {
  return <section style={{ ...panelStyle, ...style }}>{children}</section>;
}

export function StatCard({ icon, label, value, delta }: StatCardProps) {
  return (
    <Panel style={{ padding: '10px 14px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div
          style={{
            width: 28,
            height: 28,
            border: '1px solid rgba(254, 189, 36, 0.45)',
            borderRadius: 8,
            display: 'grid',
            placeItems: 'center',
            color: '#048A2E',
          }}
        >
          {icon}
        </div>
        <div>
          <div
            style={{
              color: colors.text,
              fontSize: 13,
              lineHeight: '100%',
              fontFamily: fonts.body,
              fontWeight: 600,
              letterSpacing: '0',
            }}
          >
            {label}
          </div>
          <div
            style={{
              marginTop: 2,
              color: colors.heading,
              fontSize: 24,
              lineHeight: '24px',
              fontFamily: fonts.value,
              fontWeight: 400,
              letterSpacing: '0',
            }}
          >
            {value}
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: 8,
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          color: colors.text,
          fontSize: 10.5,
          lineHeight: '15px',
          fontFamily: fonts.micro,
          fontWeight: 500,
        }}
      >
        <span>Increase by</span>
        <span
          style={{
            color: colors.green,
            background: '#E8FBEF',
            borderRadius: 3,
            padding: '1px 4px',
            fontWeight: 600,
          }}
        >
          {delta}
        </span>
        <span>vs last month</span>
      </div>
    </Panel>
  );
}

export function PanelHeader({ title, subtitle, right }: PanelHeaderProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
      <div>
        <h3
          style={{
            margin: 0,
            color: '#111827',
            fontSize: 14,
            lineHeight: '20.13px',
            fontWeight: 500,
            fontFamily: fonts.body,
            letterSpacing: '0',
          }}
        >
          {title}
        </h3>
        {subtitle ? (
          <p
            style={{
              margin: '7px 0 0',
              color: '#707A8F',
              fontSize: 13 / 1.8,
              lineHeight: '100%',
              fontFamily: fonts.body,
              fontWeight: 600,
            }}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
      {right}
    </div>
  );
}


export function KeyValueRow({ label, value, labelColor = '#C7A24C', valueColor = '#C7A24C' }: KeyValueRowProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 0',
        borderTop: `1px solid ${G.borderL}`,
      }}
    >
      <span style={{ color: labelColor, fontFamily: fonts.body, fontWeight: 500, fontSize: 31 / 2.4 }}>{label}</span>
      <span style={{ color: valueColor, fontFamily: fonts.body, fontWeight: 600, fontSize: 31 / 2.4 }}>{value}</span>
    </div>
  );
}


export function ProgressRow({ label, value, progress, tone = 'green' }: ProgressRowProps) {
  return (
    <div style={{ marginTop: 14 }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: '#6E7487',
          fontSize: 31 / 2.4,
          fontWeight: 600,
          fontFamily: fonts.body,
          marginBottom: 8,
        }}
      >
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div style={{ height: 10, borderRadius: 999, background: '#EFE4CA', overflow: 'hidden' }}>
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            background: tone === 'green' ? '#0FC254' : '#C7A24C',
          }}
        />
      </div>
    </div>
  );
}
