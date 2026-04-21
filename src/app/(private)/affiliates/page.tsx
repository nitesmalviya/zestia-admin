'use server';
import SectionAffiliates from '@/components/admin/affiliates/section-affiliates';
import { getAffiliatesData } from '@/utils/mock-data';

export default async function AffiliatesPage() {
  const data = await getAffiliatesData();
  return <SectionAffiliates data={data} />;
}
