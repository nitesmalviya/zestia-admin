import { Card } from "@/components/custom-ui/card"
import SecHead from "@/components/custom-ui/sec-head"
import { Zap } from "lucide-react"
import { growthDrivers } from "@/utils/mock-data"
import G from "@/utils/design-tokens"
import Badge from "@/components/custom-ui/badge"

const OverviewDriver = () => {
    return (
        <Card>
            <SecHead icon={Zap} title="Top 3 Growth Drivers"
                subtitle="Auto-generated weekly · weighted: 0.4×Day30 + 0.4×Conversion + 0.2×Day7" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
                {growthDrivers.map(d => (
                    <div key={d.rank} style={{
                        background: `linear-gradient(145deg,${G.goldGhost},#FFFDF7)`,
                        borderRadius: 14, padding: '18px 20px', border: `1px solid ${G.border}`,
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 12 }}>
                            <div style={{
                                width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                                background: `linear-gradient(135deg,${G.goldL},${G.goldD})`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <span style={{ fontSize: 12, fontWeight: 700, color: G.white }}>#{d.rank}</span>
                            </div>
                            <span style={{ fontSize: 13, fontWeight: 700, color: G.dark, lineHeight: 1.3 }}>{d.behavior}</span>
                        </div>
                        <div style={{ fontSize: 28, fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, color: G.goldD, marginBottom: 2 }}>{d.impact}</div>
                        <div style={{ fontSize: 11, color: G.slate, marginBottom: 10 }}>{d.metric}</div>
                        <Badge color={G.goldPale} text={G.goldD} size={10}>Driver Score: {d.score}</Badge>
                    </div>
                ))}
            </div>
        </Card>

    )
}

export default OverviewDriver