import { AllNotificationResponse } from "@/types/notification";
import { StatCard } from "../dashboard";
import { StatCardIcon12, StatCardIcon3 } from "@/components/icons/stat-card-icons";

interface notificationDataProps {
    notificationData: AllNotificationResponse['adminGetNotificationStats'];
}

const NotificationStat = ({ notificationData }: notificationDataProps) => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
            <StatCard icon={<StatCardIcon12 />} label="Notifications Sent (30D)" value={notificationData.notifSent30d ?? 0} delta="+200" />
            <StatCard icon={<StatCardIcon12 />} label="Notifications Acted On" value={notificationData.notifActedOn30d ?? 0} delta="8.1%" />
            <StatCard icon={<StatCardIcon3 />} label="Avg Active Days / Week" value={notificationData.avgActiveDaysPerWeek ?? 0} delta="1.4%" />
        </div>
    )

}

export default NotificationStat;