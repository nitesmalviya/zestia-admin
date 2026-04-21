import { CSSProperties, ReactNode, ElementType } from 'react';

export interface PanelProps {
  children: ReactNode;
  style?: CSSProperties;
}

export interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  delta: string;
}

export interface ExecutiveStatCardProps {
  icon: ElementType;
  label: string;
  value: string;
  delta: number;
  deltaLabel?: string;
  invertDelta?: boolean;
}

export interface PanelHeaderProps {
  title: string;
  subtitle?: string;
  right?: ReactNode;
}

export interface KeyValueRowProps {
  label: string;
  value: string;
  labelColor?: string;
  valueColor?: string;
}

export interface ProgressRowProps {
  label: string;
  value: string;
  progress: number;
  tone?: 'green' | 'gold';
}
