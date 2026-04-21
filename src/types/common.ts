import { ReactNode, ReactElement, FC } from 'react';

export type AnyType<T> = T | undefined | null | void | [];

export type BoxProps = {
  children: ReactElement;
};

export interface PrivateLayoutProps {
  readonly children: ReactNode;
}

export interface PublicLayoutProps {
  readonly children: ReactNode;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data: AnyType<T>;
}

export interface ApiError {
  success: boolean;
  message: string;
  status: number;
}
