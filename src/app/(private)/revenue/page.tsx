
import SectionRevenue from '@/components/pages/revenue/page';
import { getAdminRevenueStatsAction } from '@/utils/graphql/revenue/action';
import { getRevenueData } from '@/utils/mock-data';

export default async function RevenuePage() {
  const data = await getRevenueData();

  const revenueData = await getAdminRevenueStatsAction();
  return <SectionRevenue data={data} revenueData={revenueData?.adminGetRevenueStats || {}} />;
}
