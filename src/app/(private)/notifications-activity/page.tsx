
import SectionNotifications from '@/components/pages/notifications-activity/page';
import { getNotificationsData } from '@/utils/mock-data';

export default async function NotificationsActivityPage() {
  const data = await getNotificationsData();
  return <SectionNotifications data={data} />;
}
