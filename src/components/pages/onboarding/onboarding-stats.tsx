import { AllOnboardingResponse } from "@/types/onboarding";
import { StatCard } from "../dashboard/page";
import { StatCardIcon12, StatCardIcon3, StatCardIcon45, StatCardIcon6 } from "@/components/icons/stat-card-icons";

interface onboardingDataProps {
    onboardingData: AllOnboardingResponse;
}

const OnboardingStats = ({ onboardingData }: onboardingDataProps) => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12 }}>
            <StatCard icon={<StatCardIcon12 />} label="Onboarding Started" value={onboardingData.onboardingStarted} delta="+200" />
            <StatCard icon={<StatCardIcon12 />} label="Onboarding Completed" value={onboardingData.onboardingCompleted} delta="8.1%" />
            <StatCard icon={<StatCardIcon3 />} label="Completion Rate" value={`${onboardingData.completionRate}%`} delta="1.4%" />
            <StatCard icon={<StatCardIcon45 />} label="Avg Completion Time" value={`${onboardingData.avgCompletionTimeMinutes} MIN`} delta="6.7%" />
            <StatCard icon={<StatCardIcon45 />} label="Drop-off Rate" value={`${onboardingData.dropOffRate}%`} delta="4.2%" />
            <StatCard icon={<StatCardIcon6 />} label="Completed + Active" value={`${onboardingData.completedToActivePercent}%`} delta="0.4%" />
        </div>
    )
}

export default OnboardingStats;