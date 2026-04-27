import { safeParseJson } from "@/utils/parser/json";
import { Panel, PanelHeader } from "../dashboard";
import { KeyValueRow } from "../dashboard";
import { AllReflectionsResponse } from "@/types/exercise-lvc";


const ReflectionsCard = ({ reflectionsData }: { reflectionsData: AllReflectionsResponse | null }) => {

    const reflectionRaw = safeParseJson<
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