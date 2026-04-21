import {
    BarChart, Bar, XAxis, YAxis,
    CartesianGrid, Tooltip, ResponsiveContainer, Cell,
} from 'recharts';
import { BarChart2 } from 'lucide-react';
import G from '../../../utils/design-tokens';
import { Card } from '../../custom-ui/card';
import SecHead from '../../custom-ui/sec-head';
import ChartTooltip from '../../custom-ui/chart-tooltip';
import { dauData } from '../../../utils/mock-data';

const OverviewBargraph = () => {
    return (
        <Card>
            <SecHead icon={BarChart2} title="Daily Active Users" subtitle="Last 7 days" />
            <ResponsiveContainer width="100%" height={180}>
                <BarChart data={dauData} barSize={38}>
                    <CartesianGrid strokeDasharray="3 3" stroke={G.borderL} vertical={false} />
                    <XAxis dataKey="d" tick={{ fontSize: 11, fill: G.slateL }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 10, fill: G.slateL }} axisLine={false} tickLine={false} tickFormatter={v => `${v / 1000}K`} />
                    <Tooltip content={<ChartTooltip />} />
                    <Bar dataKey="dau" name="DAU" radius={[6, 6, 0, 0]}>
                        {dauData.map((_, i) => <Cell key={i} fill={i === 2 ? G.goldD : G.goldL} />)}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </Card>
    )
}

export default OverviewBargraph