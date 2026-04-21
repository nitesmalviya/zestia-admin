
import SectionCoupons from '@/components/admin/coupons/section-coupons';
import { getCouponsData } from '@/utils/mock-data';

export default async function CouponsPage() {
  const data = await getCouponsData();
  return <SectionCoupons data={data} />;
}
