

import SectionUserLookup from '@/components/pages/user-lookup/index';
import { getUsersStats } from '@/utils/graphql/users/action';
export const dynamic = 'force-dynamic';

export default async function UserLookupPage() {
  const data = await getUsersStats({ offset: 1, limit: 10 });
  return <SectionUserLookup data={data} />;
}



