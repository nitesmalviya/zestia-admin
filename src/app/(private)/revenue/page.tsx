
import SectionRevenue from '@/components/pages/revenue';
import { getAdminRevenueStatsAction } from '@/utils/graphql/revenue/action';

const RevenuePage = async () => {

  const revenueData = await getAdminRevenueStatsAction();
  return <SectionRevenue revenueData={revenueData?.adminGetRevenueStats || {}} />;
}


export default RevenuePage;