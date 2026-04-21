import KpiCard from "@/components/custom-ui/kpi-card"
import { Tag, Hash, DollarSign, Target } from 'lucide-react';


const CouponsKpi = ({ data }: { data?: any }) => {
    const { kpis = {} } = data || {};
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
            <KpiCard label="Active Coupons" value={kpis.active?.value} icon={Tag} />
            <KpiCard label="Total Redemptions" value={kpis.redemptions?.value} delta={kpis.redemptions?.delta} icon={Hash} />
            <KpiCard label="Revenue via Coupons" value={kpis.revenue?.value} delta={kpis.revenue?.delta} icon={DollarSign} />
            <KpiCard label="Avg Conv. Rate" value={kpis.convRate?.value} delta={kpis.convRate?.delta} icon={Target} />
        </div>
    )
}

export default CouponsKpi