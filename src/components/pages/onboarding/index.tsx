import { AllOnboardingResponse } from '@/types/onboarding';
import OnboardingFunnel from './onboarding-funnel';
import OnboardingStats from './onboarding-stats';

interface onboardingDataProps {
  onboardingData: AllOnboardingResponse;
}

const SectionOnboarding = ({ onboardingData }: onboardingDataProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <OnboardingStats onboardingData={onboardingData} />
      <OnboardingFunnel onboardingData={onboardingData} />
      <div style={{ height: 220 }} />
    </div>
  );
}


export default SectionOnboarding;
