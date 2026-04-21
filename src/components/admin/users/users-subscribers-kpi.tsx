'use client';
import { CheckCircle, DollarSign, RefreshCw, Award } from 'lucide-react';
import KpiCard from '../../custom-ui/kpi-card';

export default function UsersSubscribersKpi() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
            {[
                { label: 'Monthly subscribers', value: '7,840', sub: '63.9% of paid', icon: RefreshCw },
                { label: 'Yearly subscribers', value: '4,421', sub: '36.1% of paid', icon: CheckCircle },
                { label: 'ARPU', value: '$3.92/mo', sub: 'Avg revenue per user', icon: DollarSign },
                { label: 'LTV estimate', value: '$52.40', sub: 'Avg lifetime value', icon: Award },
            ].map(s => <KpiCard key={s.label} label={s.label} value={s.value} icon={s.icon} sub={s.sub} />)}
        </div>
    );
}
