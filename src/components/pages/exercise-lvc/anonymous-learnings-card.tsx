import { AllReflectionsResponse } from "@/types/exercise-lvc";
import { Panel, PanelHeader } from "../dashboard";
import { safeParseJson } from "@/utils/parser/json";

const AnonymousLearnings = ({ reflectionsData }: { reflectionsData: AllReflectionsResponse | null }) => {

    const reflectionRaw = safeParseJson<
        { interventionId: string; learned: string; checkInAt: string }[]
    >(reflectionsData?.reflections, []);

    const anonymousLearnings = reflectionRaw
        .sort((a, b) => new Date(b.checkInAt).getTime() - new Date(a.checkInAt).getTime())
        .map(item => item.learned);

    return (
        <Panel>
            <PanelHeader
                title="Anonymous Learnings"
                subtitle="Running list from user reflections"
            />

            {anonymousLearnings.map((quote: string, index: number) => (
                <p
                    key={quote}
                    style={{
                        margin: 0,
                        padding: '14px 0',
                        borderTop: index ? '1px solid #EFE7D7' : 'none',
                        color: '#D6A944',
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        fontStyle: 'italic',
                        fontSize: 30 / 2.1,
                    }}
                >
                    {quote}
                </p>
            ))}
        </Panel>
    )
}
export default AnonymousLearnings;