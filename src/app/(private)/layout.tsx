'use client';
import AdminLayout from '@/components/app-layout/admin-layout';

import { PrivateLayoutProps } from '@/types/common';

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
  return (
    <AdminLayout>
      {children}
    </AdminLayout>
  );
};

export default PrivateLayout;