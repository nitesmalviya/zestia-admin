import SectionOnboarding from '@/components/pages/onboarding/page';
import { getOnboardingData } from '@/utils/mock-data';

export default async function OnboardingPage() {
  const data = await getOnboardingData();
  return <SectionOnboarding data={data} />;
}
