import { AdminUserStats } from "@/types/user";
import { KeyValueRow, Panel, PanelHeader } from "../dashboard";

interface userStatsDataProps {
    userStatsData: AdminUserStats;
}

const UserStatusBreakdown = ({ userStatsData }: userStatsDataProps) => {


    const safeParse = <T,>(data: string | undefined, fallback: T): T => {
        if (!data) return fallback;
        try {
            return JSON.parse(data);
        } catch {
            return fallback;
        }
    };

    const statusRaw = safeParse<{
        free: number;
        trial: number;
        monthlyPaid: number;
        annualPaid: number;
        cancellations30d: number;
    }>(userStatsData?.userStatusBreakdown, {
        free: 0,
        trial: 0,
        monthlyPaid: 0,
        annualPaid: 0,
        cancellations30d: 0,
    });

    const statusBreakdown = [
        {
            label: 'Free Users',
            value: statusRaw.free,
            labelColor: '#6B7280',
            valueColor: '#6B7280',
        },
        {
            label: 'Trial Users',
            value: statusRaw.trial,
            labelColor: '#C7A24C',
            valueColor: '#C7A24C',
        },
        {
            label: 'Monthly Paid',
            value: statusRaw.monthlyPaid,
            labelColor: '#10C456',
            valueColor: '#10C456',
        },
        {
            label: 'Annual Paid',
            value: statusRaw.annualPaid,
            labelColor: '#4F46E5',
            valueColor: '#4F46E5',
        },
        {
            label: 'Cancellations (30d)',
            value: statusRaw.cancellations30d,
            labelColor: '#FF5A3C',
            valueColor: '#FF5A3C',
        },
    ];

    return (
        <Panel>
            <PanelHeader title="User Status Breakdown" subtitle="All registered users" />
            {statusBreakdown.map((s) => (
                <KeyValueRow
                    key={s.label}
                    label={s.label}
                    value={s.value}
                    labelColor={s.labelColor}
                    valueColor={s.valueColor}
                />
            ))}
        </Panel>
    )
}

export default UserStatusBreakdown;