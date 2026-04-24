import { AllOnboardingResponse } from "@/types/onboarding";
import { Panel, PanelHeader } from "../dashboard/page";

interface onboardingDataProps {
    onboardingData: AllOnboardingResponse;
}

const OnboardingFunnel = ({ onboardingData }: onboardingDataProps) => {

    const getFunnelColor = (progress: number) => {
        if (progress >= 80) return '#10C456'; // green
        if (progress >= 50) return '#C7A24C'; // yellow
        return '#FF5A3C'; // red
    };

    const funnelRaw = (() => {
        try {
            return onboardingData?.onboardingFunnel
                ? JSON.parse(onboardingData.onboardingFunnel)
                : {};
        } catch {
            return {};
        }
    })();

    const survey1 = funnelRaw.survey1 ?? 0;
    const course = funnelRaw.courseCreationSurvey ?? 0;
    const video = funnelRaw.onboardingVideo ?? 0;
    const payment = funnelRaw.paymentPage ?? 0;

    const funnel = [
        {
            label: 'Survey 1',
            value: survey1,
            progress: 100,
        },
        {
            label: 'Course Creation',
            value: course,
            progress: survey1 ? (course / survey1) * 100 : 0,
        },
        {
            label: 'Onboarding Video',
            value: video,
            progress: course ? (video / course) * 100 : 0,
        },
        {
            label: 'Payment Page',
            value: payment,
            progress: video ? (payment / video) * 100 : 0,
        },
    ].map(item => ({
        ...item,
        fill: getFunnelColor(item.progress), // ✅ dynamic color
    }));
    return (
        <Panel>
            <PanelHeader title="Trial to Paid Conversion Funnel" subtitle="Last 30 days" />
            <div style={{ display: 'grid', gap: 12 }}>
                {funnel.map((item: any) => (
                    <div key={item.label} style={{ display: 'grid', gridTemplateColumns: '145px 1fr', alignItems: 'center', gap: 0 }}>
                        <span
                            style={{
                                color: '#6E7487',
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: 500,
                                fontSize: 27 / 2.1,
                            }}
                        >
                            {item.label}
                        </span>
                        <div style={{ height: 16, background: '#EFE4CA', borderRadius: 0, position: 'relative', overflow: 'hidden' }}>
                            <div style={{ width: `${item.progress}%`, height: '100%', background: item.fill, borderRadius: 0 }} />
                            <span
                                style={{
                                    position: 'absolute',
                                    right: 8,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    color: '#1F2937',
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontWeight: 600,
                                    fontSize: 27 / 2.1,
                                }}
                            >
                                {item.value}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </Panel>
    )
}


export default OnboardingFunnel;