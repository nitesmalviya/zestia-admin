import { formatLabel } from "@/utils/constants";
import { Panel, PanelHeader, ProgressRow } from "../dashboard/page";
import { AllExerciseResponse } from "@/types/exercise-lvc";

const ExerciseCompletionCounts = ({ exerciseData }: { exerciseData: AllExerciseResponse | null }) => {

    const safeParse = <T,>(data: string | undefined, fallback: T): T => {
        if (!data) return fallback;
        try {
            return JSON.parse(data);
        } catch {
            return fallback;
        }
    };

    const completionRaw = safeParse<Record<string, number>>(
        exerciseData?.completionCountByExercise,
        {}
    );

    const completionArray = Object.entries(completionRaw).map(([key, value]) => ({
        label: key,
        count: value,
    }));

    const max = Math.max(...completionArray.map(item => item.count), 1);

    const getTone = (p: number) => {
        if (p >= 70) return 'green';
        if (p >= 40) return 'gold';
        return 'red';
    };

    const completionCounts = completionArray.map(item => {
        const progress = Math.round((item.count / max) * 100);

        return {
            label: item.label.replace(/^\d+-/, ''), // remove "1-" prefix
            value: item.count,
            progress,
            tone: getTone(progress),
        };
    });

    return (
        <Panel>
            <PanelHeader
                title="Exercise Completion Counts"
                subtitle="All time, by exercise name"
            />

            {completionCounts.map((item) => (
                <ProgressRow
                    key={item.label}
                    label={formatLabel(item.label)}
                    value={item.value}
                    progress={item.progress}
                    tone={item.tone}
                />
            ))}
        </Panel>
    )
}

export default ExerciseCompletionCounts;