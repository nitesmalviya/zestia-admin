import SectionExecutiveSnapshot from '@/components/pages/executive-snapshot/index';
import { getAdminUsersStatsAction } from '@/utils/graphql/users/action';

const ExecutiveSnapshotPage = async () => {

  const res = await getAdminUsersStatsAction();
  const userStatsData = res?.adminGetUserStats || [];

  return <SectionExecutiveSnapshot userStatsData={userStatsData} />;
}


export default ExecutiveSnapshotPage;