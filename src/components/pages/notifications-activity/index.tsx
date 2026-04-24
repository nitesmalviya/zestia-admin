'use client';

import NotificationStat from './notification-stat';
import NotificationRateType from './notification-rate-type';
import NotifiActiveDaysDistribution from './notifi-active-days-distribution';
import { AllNotificationResponse } from '@/types/notification';

interface SectionNotificationsProps {
  notificationData: AllNotificationResponse;
}

const SectionNotifications = ({ notificationData }: SectionNotificationsProps) => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <NotificationStat notificationData={notificationData} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 12 }}>
        <NotificationRateType notificationData={notificationData} />
        <NotifiActiveDaysDistribution notificationData={notificationData} />
      </div>

      <div style={{ height: 300 }} />
    </div>
  );
}

export default SectionNotifications;
