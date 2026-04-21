import { ReactNode, ElementType } from 'react';

export interface BadgeProps {
  children: ReactNode;
  color?: string;
  text?: string;
  size?: number;
}

export interface GoldBtnProps {
  children: ReactNode;
  onClick?: () => void;
  full?: boolean;
  small?: boolean;
  outline?: boolean;
  disabled?: boolean;
}

export interface ProgressBarProps {
  value: number;
  max: number;
  color?: string;
  height?: number;
}

export interface SecHeadProps {
  icon: ElementType;
  title: string;
  subtitle: string;
  action?: ReactNode;
}

export interface KpiCardProps {
  label: string;
  value: string;
  delta?: number;
  icon: ElementType;
  invertDelta?: boolean;
  sub?: string;
}

export interface ChartTooltipProps {
  active?: boolean;
  payload?: { name: string; value?: number; color?: string }[];
  label?: string;
}
