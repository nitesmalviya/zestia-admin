'use server';

import SectionUserLookup from '@/components/pages/user-lookup/page';
import { getUserLookupData } from '@/utils/mock-data';

export default async function UserLookupPage() {
  const data = await getUserLookupData();
  return <SectionUserLookup data={data} />;
}
