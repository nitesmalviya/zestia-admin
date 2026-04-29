import { AdminUserStats } from "@/types/user";
import { KeyValueRow, Panel, PanelHeader } from "../dashboard";
import { safeParseJson } from "@/utils/parser/json";

interface userStatsDataProps {
    userStatsData: AdminUserStats;
}

const UserStatusBreakdown = ({ userStatsData }: userStatsDataProps) => {

    const statusRaw = safeParseJson<{
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
            value: statusRaw.free.toLocaleString(),
            labelColor: '#6B7280',
            valueColor: '#6B7280',
        },
        {
            label: 'Trial Users',
            value: statusRaw.trial.toLocaleString(),
            labelColor: '#C7A24C',
            valueColor: '#C7A24C',
        },
        {
            label: 'Monthly Paid',
            value: statusRaw.monthlyPaid.toLocaleString(),
            labelColor: '#10C456',
            valueColor: '#10C456',
        },
        {
            label: 'Annual Paid',
            value: statusRaw.annualPaid.toLocaleString(),
            labelColor: '#4F46E5',
            valueColor: '#4F46E5',
        },
        {
            label: 'Cancellations (30d)',
            value: statusRaw.cancellations30d.toLocaleString(),
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