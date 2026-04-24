import { StatCardIcon12, StatCardIcon3 } from "@/components/icons/stat-card-icons";
import { StatCard } from "../dashboard/page";
import { AllLVCResponse } from "@/types/exercise-lvc";

const LvcStat = ({ lvcData }: { lvcData: AllLVCResponse | null }) => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
            <StatCard icon={<StatCardIcon12 />} label="Avg Lovable" value={lvcData?.avgLovable} delta={"+200"} />
            <StatCard icon={<StatCardIcon12 />} label="Avg Valuable" value={lvcData?.avgValuable} delta={"8.1%"} />
            <StatCard icon={<StatCardIcon3 />} label="Avg Capable" value={lvcData?.avgCapable} delta={"1.4%"} />
        </div>
    )
}

export default LvcStat;