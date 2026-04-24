import SectionOnboarding from '@/components/pages/onboarding/index';
import { getAdminOnboardingStatsAction } from '@/utils/graphql/onboarding/action';

const OnboardingPage = async () => {

  const res = await getAdminOnboardingStatsAction();
  const onboardingData = res?.adminGetOnboardingStats || null;

  return <SectionOnboarding onboardingData={onboardingData} />;
}

export default OnboardingPage;