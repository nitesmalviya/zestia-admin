'use client';
import { Users, CheckCircle, UserCheck, Clock } from 'lucide-react';
import KpiCard from '../../custom-ui/kpi-card';

export default function UsersKpi() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
            <KpiCard label="Total Users" value="24,891" delta={12.4} icon={Users} />
            <KpiCard label="Paid Subscribers" value="12,261" delta={9.2} icon={CheckCircle} />
            <KpiCard label="Free Users" value="8,420" delta={3.1} icon={UserCheck} />
            <KpiCard label="Trial Users" value="4,210" delta={18.4} icon={Clock} />
        </div>
    );
}
