'use client';
import { toast } from 'react-toastify';
import { BehaviorSubject } from "rx";

// for global loader service
export const isLoading = new BehaviorSubject<boolean>(false);

export const isDialogOpen = new BehaviorSubject<any>({
  open: false,
  data: { message: "Are you Sure?", title: "" },
  cancelText: "Cancel",
  confirmText: "Okay",
  onConfirm: () => { },
});

export const forSuccess = (message: string, id?: string) =>
  toast.success(message, { autoClose: 3000, toastId: id ? id : 1 })

export const forError = (message: string, id?: string) =>
  toast.error(message, { autoClose: 3000, toastId: id ? id : 1 })

export const forWarning = (message: string, id?: string) =>
  toast.warning(message, { autoClose: 3000, toastId: id ? id : 1 })

import moment from 'moment';

/**
 * Format a given date string or Date object to a standard UI format.
 * Default format: 'DD MMM YYYY' (e.g., 26 Mar 2026)
 */
export const formatDate = (date: string | Date, format = 'DD MMM YYYY'): string => {
  if (!date) return '-';
  const mDate = moment(date);
  return mDate.isValid() ? mDate.format(format) : '-';
};

/**
 * Format a given date string or Date object including time.
 * Default format: 'ddd, DD MMM YYYY hh:mm A' (e.g., Thu, 26 Mar 2026 04:30 PM)
 */
export const formatDateTime = (date: string | Date, format = 'ddd, DD MMM YYYY hh:mm A'): string => {
  if (!date) return '-';
  const mDate = moment(date);
  return mDate.isValid() ? mDate.format(format) : '-';
};

/**
 * Get relative time from now.
 * e.g., "3 min ago", "2 hours ago"
 */
export const formatRelativeTime = (date: string | Date): string => {
  if (!date) return '-';
  const mDate = moment(date);
  return mDate.isValid() ? mDate.fromNow() : '-';
};

/**
 * Calculate the percentage increase or decrease comparing current value with previous value.
 * @param current - Current value
 * @param previous - Previous value (e.g., last month)
 * @returns An object with delta (percentage), label (Increase/Decrease), and boolean indicator.
 */
export const calculatePercentageChange = (current: number | null | undefined, previous: number | null | undefined) => {
  const cur = current ?? 0;
  const prev = previous ?? 0;

  if (prev === 0) {
    if (cur === 0) return { delta: 0, label: 'vs last month', isIncrease: true };
    return { delta: 100, label: 'Increase by', isIncrease: true };
  }

  const diff = cur - prev;
  const percentage = (diff / prev) * 100;
  const isIncrease = percentage >= 0;

  return {
    delta: Math.abs(Number(percentage.toFixed(1))), // Round to 1 decimal place
    label: isIncrease ? 'Increase by' : 'Decrease by',
    isIncrease
  };
};
