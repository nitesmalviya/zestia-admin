import { AllNotificationResponse } from "@/types/notification";
import { Panel, PanelHeader, ProgressRow } from "../dashboard";
import { safeParseJson } from "@/utils/parser/json";

interface NotificationDataProps {
    notificationData: AllNotificationResponse;
}

const NotificationRateType = ({ notificationData }: NotificationDataProps) => {

    const getTone = (p: number) => {
        if (p >= 22) return 'green';   // top performers
        if (p >= 17) return 'gold';    // mid
        return 'red';                  // low
    };

    type ActionRateItem = {
        type: string;
        count: number;
        percentage: number;

    };

    const actionRateRaw = safeParseJson<ActionRateItem[]>(
        notificationData?.actionRateByType,
        []
    );

    const types = actionRateRaw.map((item) => ({
        label: item.type,
        value: `${item.count} (${item.percentage}%)`,
        progress: item.percentage,
        tone: getTone(item.percentage),
    }));

    return (
        <Panel>
            <PanelHeader
                title="Notification Action Rate by Type"
                subtitle="% of notifications that triggered app open"
            />
            {types.map((type) => (
                <ProgressRow
                    key={type.label}
                    label={type.label}
                    value={type.value}
                    progress={type.progress}
                    tone={type.tone}
                />
            ))}
        </Panel>
    )
}

export default NotificationRateType;