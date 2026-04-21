import SectionExecutiveSnapshot from '@/components/pages/executive-snapshot/page';
import { getExecutiveSnapshotData } from '@/utils/mock-data';
import { getAdminUsersStatsAction } from '@/utils/graphql/users/action';

export default async function OverviewPage() {
  const data = await getExecutiveSnapshotData();

  const res = await getAdminUsersStatsAction();
  const userStatsData = res?.adminGetUserStats || [];

  return <SectionExecutiveSnapshot data={data} userStatsData={userStatsData} />;
}
