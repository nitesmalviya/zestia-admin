import SectionUsers from '@/components/pages/users/page';
import { getAdminUsersListAction, getUsersStats } from '@/utils/graphql/users/action';
import { getUsersData } from '@/utils/mock-data';

export default async function UsersPage() {

  const userStatsRes = await getUsersStats();
  const userStatsData = userStatsRes?.adminGetUserStats || [];


  const res = await getAdminUsersListAction({
    input: { limit: 10 }
  });
  const userListData = res?.adminListUsers;


  return <SectionUsers

    userListData={userListData}
    userStatsData={userStatsData} />;
}
