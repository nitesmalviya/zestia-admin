import KpiCard from '@/components/custom-ui/kpi-card'
import { DollarSign, TrendingUp, UserCheck, Target, RefreshCw, Users } from 'lucide-react';

const OverviewKpi = () => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
            <KpiCard label="Total Active Users" value="24,891" delta={12.4} icon={Users} sub="DAU 4,120 · WAU 9,800 · MAU 24,891" />
            <KpiCard label="New Users (30d)" value="3,204" delta={8.1} icon={UserCheck} sub="Today 112 · This week 741" />
            <KpiCard label="Download → Paid" value="13.2%" delta={1.4} icon={Target} sub="Trial → Paid conversion: 44.3%" />
            <KpiCard label="MRR" value="$48,320" delta={6.7} icon={DollarSign} sub="ARR $579,840" />
            <KpiCard label="Net Revenue" value="$41,072" delta={4.2} icon={TrendingUp} sub="After Apple/Google 15% fees" />
            <KpiCard label="Monthly Churn" value="2.3%" delta={-0.4} icon={RefreshCw} invertDelta sub="Cohort churn: 1.8%" />
        </div>
    )
}

export default OverviewKpi