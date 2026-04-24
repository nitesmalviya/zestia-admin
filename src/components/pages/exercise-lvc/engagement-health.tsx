import { Panel, PanelHeader } from "../dashboard";
import { KeyValueRow } from "../dashboard";
import { AllExerciseResponse } from "@/types/exercise-lvc";

const EngagementHealth = ({ exerciseData }: { exerciseData: AllExerciseResponse | null }) => {

    const safeParse = <T,>(data: string | undefined, fallback: T): T => {
        if (!data) return fallback;
        try {
            return JSON.parse(data);
        } catch {
            return fallback;
        }
    };

    const avgDays = (exerciseData?.avgDaysBetweenExercises * 7).toFixed(1);
    const engagementHealth = [
        {
            label: "Avg days between exercises",
            value: `${avgDays} days`,
            valueColor: "#6B7280",
        },
        {
            label: "Users stalled 21+ days",
            value: `${exerciseData.stalledUsers}`,
            valueColor: exerciseData.stalledUsers > 0 ? "#FF5A3C" : "#6B7280",
        },
        {
            label: "Stalled sent re-engage",
            value: `${exerciseData.stalledSentReengage}`,
            valueColor: "#6B7280",
        },
        {
            label: "Re-engaged (7D)",
            value: `${exerciseData.reengagedCount} (${exerciseData.reengagedPercent}%)`,
            valueColor: exerciseData.reengagedPercent > 0 ? "#10C456" : "#6B7280",
        },
    ];

    return (
        <Panel>
            <PanelHeader
                title="Engagement Health"
                subtitle="Exercise cadence signals"
            />

            {engagementHealth.map((item) => (
                <KeyValueRow
                    key={item.label}
                    label={item.label}
                    value={item.value}
                    valueColor={item.valueColor}
                />
            ))}
        </Panel>
    )
}

export default EngagementHealth;