'use client';
import { useState } from 'react';
import CouponModal from './coupon-modal';
import CouponsTables from './coupons-tables';
import CouponsKpi from './coupons-kpi';
import { CouponForm } from '@/types/marketing';

export default function SectionCoupons({ data }: { data?: any }) {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<CouponForm>({
    code: '', type: '% off', value: '', applies: 'Both',
    duration: 'One-time', expiry: '', maxUses: 100, perUser: 1,
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <CouponsKpi data={data} />
      <CouponsTables setShowModal={setShowModal} setForm={setForm} data={data} />
      {showModal && (
        <CouponModal setShowModal={setShowModal} form={form} setForm={setForm} />
      )}
    </div>
  );
}
