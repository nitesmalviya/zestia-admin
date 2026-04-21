import KpiCard from '@/components/custom-ui/kpi-card'
import {
    UserPlus, Users, DollarSign, Gift
} from 'lucide-react';

const AffiliateKpi = ({ data }: { data?: any }) => {
    const { affiliates: affiliatesList = [], kpis = {} } = data || {};
    const totalRevenue = affiliatesList.reduce((a: any, x: any) => a + x.revenue, 0);
    const totalSignups = affiliatesList.reduce((a: any, x: any) => a + x.signups, 0);

    const totalOwed = affiliatesList.reduce((a: any, x: any) => a + (x.commissionEarned - x.commissionPaid), 0);
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
            <KpiCard label="Active Affiliates" value={affiliatesList.filter((a: any) => a.status === 'Active').length.toString()} delta={kpis.activeDelta} icon={UserPlus} />
            <KpiCard label="Affiliate Signups (mo)" value={totalSignups.toLocaleString()} delta={kpis.signupsDelta} icon={Users} sub="via affiliate links" />
            <KpiCard label="Affiliate Revenue (mo)" value={`$${totalRevenue.toLocaleString()}`} delta={kpis.revenueDelta} icon={DollarSign} sub="from affiliate-referred subs" />
            <KpiCard label="Commission Owed" value={`$${totalOwed.toLocaleString()}`} icon={Gift} sub="total unpaid earned" />
        </div>
    )
}

export default AffiliateKpi