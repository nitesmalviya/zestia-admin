import SectionExecutiveSnapshot from '@/components/pages/executive-snapshot/page';
import { getAdminUsersStatsAction } from '@/utils/graphql/users/action';
import { getExecutiveSnapshotData } from '@/utils/mock-data';

const ExecutiveSnapshotPage = async () => {
  const data = await getExecutiveSnapshotData();

  const res = await getAdminUsersStatsAction();
  const userStatsData = res?.adminGetUserStats || [];


  return <SectionExecutiveSnapshot data={data} userStatsData={userStatsData} />;
}


export default ExecutiveSnapshotPage;