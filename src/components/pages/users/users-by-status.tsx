import { AdminUserStats } from "@/types/user";
import { Panel, PanelHeader } from "../dashboard/page";

interface UserListDataProps {
    userStatsData: AdminUserStats;
}

const UsersByStatus = ({ userStatsData }: UserListDataProps) => {
    const u = userStatsData || {};

    const statusRaw = (() => {
        try {
            return u.userStatusBreakdown ? JSON.parse(u.userStatusBreakdown) : {};
        } catch {
            return {};
        }
    })();

    const totalUsers = u.totalUsers || 1;

    const statusBreakdown = [
        {
            label: 'Free',
            value: `${statusRaw.free ?? 0} (${(((statusRaw.free ?? 0) / totalUsers) * 100).toFixed(1)}%)`,
        },
        {
            label: 'Trial Users',
            value: `${statusRaw.trial ?? 0} (${(((statusRaw.trial ?? 0) / totalUsers) * 100).toFixed(1)}%)`,
        },
        {
            label: 'Monthly Paid',
            value: `${statusRaw.monthlyPaid ?? 0} (${(((statusRaw.monthlyPaid ?? 0) / totalUsers) * 100).toFixed(1)}%)`,
        },
        {
            label: 'Annual Paid',
            value: `${statusRaw.annualPaid ?? 0} (${(((statusRaw.annualPaid ?? 0) / totalUsers) * 100).toFixed(1)}%)`,
        },
    ];

    return (
        <Panel>
            <PanelHeader title="Users by Status" subtitle="Subscription tier breakdown" />
            {statusBreakdown.map((item: any, index: number) => (
                <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0', borderTop: index ? '1px solid #F3EAD6' : 'none' }}>
                    <span style={{ color: '#C7A24C', fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 500 }}>{item.label}</span>
                    <span style={{ color: '#C7A24C', fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 600 }}>{item.value}</span>
                </div>
            ))}
        </Panel>
    )
}

export default UsersByStatus;