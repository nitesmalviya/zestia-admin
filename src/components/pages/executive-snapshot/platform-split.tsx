import { AdminUserStats } from "@/types/user";
import { Panel, PanelHeader } from "../dashboard";
import { safeParseJson } from "@/utils/parser/json";

interface userStatsDataProps {
    userStatsData: AdminUserStats;
}


const PlatformSplit = ({ userStatsData }: userStatsDataProps) => {

    const platformSplit = safeParseJson<{
        iOS: number;
        Android: number;
        Web: number;
    }>(userStatsData?.platformBreakdown, {
        iOS: 0,
        Android: 0,
        Web: 0,
    });

    const total =
        platformSplit.iOS +
        platformSplit.Android +
        platformSplit.Web;

    const platformData = [
        {
            label: 'iOS',
            value: platformSplit.iOS,
            pct: total ? ((platformSplit.iOS / total) * 100).toFixed(1) + '%' : '0%',
            color: '#F2D98E',
        },
        {
            label: 'Android',
            value: platformSplit.Android,
            pct: total ? ((platformSplit.Android / total) * 100).toFixed(1) + '%' : '0%',
            color: '#E8B624',
        },
        {
            label: 'Web',
            value: platformSplit.Web,
            pct: total ? ((platformSplit.Web / total) * 100).toFixed(1) + '%' : '0%',
            color: '#C7A24C',
        },
    ];

    const iosPct = total ? (platformSplit.iOS / total) * 100 : 0;
    const androidPct = total ? (platformSplit.Android / total) * 100 : 0;
    const webPct = total ? (platformSplit.Web / total) * 100 : 0;

    const gradient = `
  conic-gradient(
    #F2D98E 0 ${iosPct}%,
    #E8B624 ${iosPct}% ${iosPct + androidPct}%,
    #C7A24C ${iosPct + androidPct}% 100%
  )
`;

    return (
        <Panel>
            <PanelHeader title="Platform Split" subtitle="Active users by platform" />
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                <div style={{
                    width: 140,
                    height: 140,
                    borderRadius: '50%',
                    background: gradient,
                    position: 'relative',
                }}>
                    <div style={{ position: 'absolute', inset: 16, borderRadius: '50%', background: '#fff' }} />
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {platformData.map((p) => (
                        <div
                            key={p.label}
                            style={{
                                color: '#6E7487',
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: 30 / 2.1,
                                fontWeight: 600,
                            }}
                        >
                            <span style={{ color: p.color }}>●</span> {p.label}: {p.pct}{' '}
                            <span style={{ color: '#C7A24C' }}>{p.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Panel>
    )
}

export default PlatformSplit;