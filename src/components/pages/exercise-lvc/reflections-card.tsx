import { Panel, PanelHeader } from "../dashboard/page";
import { KeyValueRow } from "../dashboard/page";
import { AllReflectionsResponse } from "@/types/exercise-lvc";


const ReflectionsCard = ({ reflectionsData }: { reflectionsData: AllReflectionsResponse | null }) => {

    const safeParse = <T,>(reflectionsData: string | undefined, fallback: T): T => {
        if (!reflectionsData) return fallback;

        try {
            return JSON.parse(reflectionsData);
        } catch {
            return fallback;
        }
    };

    const reflectionRaw = safeParse<
        { interventionId: string; total: number; saved: number }[]
    >(
        reflectionsData?.reflectionCountByExercise,
        []
    );

    const formatLabel = (text: string) => {
        return text
            .replace(/^\d+-/, '')
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (c) => c.toUpperCase());
    };

    const reflections = reflectionRaw.map((item) => ({
        label: formatLabel(item.interventionId),
        value: `${item.total} / ${item.saved}`,
    }));

    return (
        <Panel>
            <PanelHeader
                title="Reflections & Saved Entries"
                subtitle="Per exercise - Reflections / Saved"
            />

            {reflections.map((item) => (
                <KeyValueRow
                    key={item.label}
                    label={item.label}
                    value={item.value}
                />
            ))}
        </Panel>
    )
}

export default ReflectionsCard;