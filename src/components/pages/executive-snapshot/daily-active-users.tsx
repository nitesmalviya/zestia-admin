import { AdminUserStats } from "@/types/user";
import { Panel, PanelHeader } from "../dashboard";
interface userStatsDataProps {
    userStatsData: AdminUserStats;

}

const DailyActiveUsers = ({ userStatsData }: userStatsDataProps) => {

    const safeParse = <T,>(data: string | undefined, fallback: T): T => {
        if (!data) return fallback;
        try {
            return JSON.parse(data);
        } catch {
            return fallback;
        }
    };

    const dailyUsersRaw = safeParse<
        { date: string; count: number }[]
    >(userStatsData?.dailyActiveUsers, []);

    const sortedData = [...dailyUsersRaw].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    const maxCount = Math.max(...sortedData.map(d => d.count), 1);

    const monthlyBars = sortedData.map(d => {
        if (d.count === 0) return 5;
        return Math.round((d.count / maxCount) * 100);
    });

    return (
        <Panel>
            <PanelHeader title="Daily Active Users" subtitle="Last 12 months - weekly avg" />
            <div style={{ display: 'grid', gridTemplateColumns: '34px 1fr', gap: 8 }}>
                <div style={{ display: 'grid', color: '#6E7487', fontSize: 11, fontWeight: 600 }}>
                    <span>$100k</span>
                    <span>$50k</span>
                    <span>$25k</span>
                    <span>$10k</span>
                    <span>0</span>
                </div>
                <div>
                    <div style={{ height: 180, display: 'flex', alignItems: 'end', gap: 8, borderBottom: '1px dashed #D9DEE7', position: 'relative' }}>
                        {[20, 40, 60, 80].map((tick) => (
                            <div
                                key={tick}
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    bottom: `${tick}%`,
                                    borderTop: '1px dashed #D9DEE7',
                                    pointerEvents: 'none',
                                    zIndex: 0,
                                }}
                            />
                        ))}
                        {monthlyBars.map((height, idx) => {
                            const selected = idx === monthlyBars.length - 1;

                            return (
                                <div key={idx} style={{ flex: 1, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                                    <div
                                        title={`${sortedData[idx].count} users`}
                                        style={{
                                            width: '58%',
                                            height: `${height}%`,
                                            borderRadius: '10px 10px 0 0',
                                            background: selected ? '#C7A24C' : '#EFE4CA',
                                        }}
                                    />
                                </div>
                            );
                        })}

                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', marginTop: 8 }}>
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Oct', 'Dec'].map((month) => (
                            <span
                                key={month}
                                style={{
                                    textAlign: 'center',
                                    fontFamily: "'Montserrat', sans-serif",
                                    color: month === 'Aug' ? '#C7A24C' : '#4B5563',
                                    fontWeight: month === 'Aug' ? 600 : 500,
                                    fontSize: 12,
                                }}
                            >
                                {month}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Panel>
    )
}

export default DailyActiveUsers;