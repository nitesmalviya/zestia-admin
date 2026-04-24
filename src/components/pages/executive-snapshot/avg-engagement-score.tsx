import { AdminUserStats } from "@/types/user";
import { Panel, PanelHeader } from "../dashboard/page";

interface userStatsDataProps {
    userStatsData: AdminUserStats;
}

const AvgEngagementScore = ({ userStatsData }: userStatsDataProps) => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return (
        <Panel>
            <PanelHeader
                title="Avg Engagement Score"
                subtitle="Composite 0-100 - updated daily"
                right={
                    <div style={{ textAlign: 'right', color: '#111827' }}>
                        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 26, lineHeight: '20.13px', fontWeight: 600, letterSpacing: '0' }}>{userStatsData?.avgEngagementScore}</div>
                        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, lineHeight: '20.13px', fontWeight: 500 }}>out of 100</div>
                    </div>
                }
            />
            <div style={{ height: 180, position: 'relative' }}>
                <svg viewBox="0 0 640 180" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="engArea" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#EED69C" stopOpacity="0.7" />
                            <stop offset="100%" stopColor="#EED69C" stopOpacity="0.08" />
                        </linearGradient>
                    </defs>
                    {[30, 60, 90, 120, 150].map((y) => (
                        <line key={y} x1="0" y1={y} x2="640" y2={y} stroke="#D9DEE7" strokeWidth="1" strokeDasharray="5 6" />
                    ))}
                    <path d="M10 130 C 40 80, 60 130, 90 90 C 120 50, 150 110, 190 80 C 240 30, 280 165, 320 110 C 360 45, 395 170, 440 120 C 490 50, 520 20, 560 30 C 580 35, 595 24, 610 20 C 620 21, 628 22, 635 24 L 635 180 L 10 180 Z" fill="url(#engArea)" />
                    <path d="M10 130 C 40 80, 60 130, 90 90 C 120 50, 150 110, 190 80 C 240 30, 280 165, 320 110 C 360 45, 395 170, 440 120 C 490 50, 520 20, 560 30 C 580 35, 595 24, 610 20 C 620 21, 628 22, 635 24" fill="none" stroke="#D7B054" strokeWidth="3" />
                    <circle cx="610" cy="20" r="12" fill="#D7B054" stroke="#FDFBF4" strokeWidth="3" />
                </svg>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
                {days.map((day: any, index: number) => (
                    <span
                        key={day + index}
                        style={{
                            textAlign: 'center',
                            color: day === 'S' && index === 5 ? '#C7A24C' : '#4B5563',
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: 600,
                            fontSize: 12,
                        }}
                    >
                        {day}
                    </span>
                ))}
            </div>
        </Panel>
    )
}

export default AvgEngagementScore;