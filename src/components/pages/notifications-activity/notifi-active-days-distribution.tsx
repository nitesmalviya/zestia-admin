import { AllNotificationResponse } from "@/types/notification";
import { KeyValueRow, Panel, PanelHeader } from "../dashboard";
import { safeParseJson } from "@/utils/parser/json";
import { formatNumber } from "@/utils/format/number";

interface notificationDataProps {
    notificationData: AllNotificationResponse;
}

const NotifiActiveDaysDistribution = ({ notificationData }: notificationDataProps) => {

    type ActiveDaysDistribution = {
        sevenDays: number;
        fiveToSixDays: number;
        threeToFourDays: number;
        zeroDays: number;
    };

    const activeDaysRaw = safeParseJson<ActiveDaysDistribution>(
        notificationData?.activeDaysDistribution,
        {
            sevenDays: 0,
            fiveToSixDays: 0,
            threeToFourDays: 0,
            zeroDays: 0,
        }
    );

    const distribution = [
        {
            label: '7 days (daily active)',
            value: activeDaysRaw.sevenDays ?? 0,
            valueColor: '#10C456', // green
        },
        {
            label: '5-6 days',
            value: activeDaysRaw.fiveToSixDays ?? 0,
            valueColor: '#C7A24C', // gold
        },
        {
            label: '3-4 days',
            value: activeDaysRaw.threeToFourDays ?? 0,
            valueColor: '#C7A24C', // gold
        },
        {
            label: '0 days (inactive)',
            value: activeDaysRaw.zeroDays ?? 0,
            valueColor: '#FF5A3C', // red
        },
    ];

    return (
        <Panel>
            <PanelHeader title="Active Days Distribution" subtitle="Users by days active in last 7" />
            {distribution.map((dist: any) => (
                <KeyValueRow key={dist.label} label={dist.label} value={formatNumber(dist.value)} valueColor={dist.valueColor} />
            ))}
        </Panel>
    )
}

export default NotifiActiveDaysDistribution;