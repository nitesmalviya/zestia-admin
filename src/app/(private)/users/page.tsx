import Users from '@/components/pages/users/index';
import { getAdminUsersListAction, getUsersStats } from '@/utils/graphql/users/action';

export default async function UsersPage() {

  const userStatsRes = await getUsersStats();
  const userStatsData = userStatsRes?.adminGetUserStats || [];


  const res = await getAdminUsersListAction({
    input: { limit: 10 }
  });
  const userListData = res?.adminListUsers;


  return <Users
    userListData={userListData}
    userStatsData={userStatsData} />;
}
