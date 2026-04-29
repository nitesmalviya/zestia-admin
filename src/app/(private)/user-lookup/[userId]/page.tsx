import UserLookupDetail from '@/components/pages/user-lookup/detail';

export const dynamic = 'force-dynamic';

export default async function UserDetailPage({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params;
  return <UserLookupDetail userId={userId} />;
}
