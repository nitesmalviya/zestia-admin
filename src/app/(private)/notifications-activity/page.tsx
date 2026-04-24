import SectionNotifications from '@/components/pages/notifications-activity/page';
import { getAdminNotificationStatsAction } from '@/utils/graphql/notification/action';

const NotificationsActivityPage = async () => {

  const res = await getAdminNotificationStatsAction();
  const notificationData = res?.adminGetNotificationStats || null;

  return <SectionNotifications notificationData={notificationData} />;
}

export default NotificationsActivityPage;
