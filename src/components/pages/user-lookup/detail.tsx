'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { Panel } from '@/components/pages/dashboard';
import { getUserDetail } from '@/utils/graphql/user-lookup/action';
import type { UserLookupResult } from '@/types/dashboard';
import { formatLabel } from '@/utils/constants';

function InitialBadge({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      style={{
        width: 54,
        height: 54,
        borderRadius: '50%',
        background: 'linear-gradient(180deg, #DFF5E7 0%, #CDEFD8 100%)',
        color: '#11723E',
        display: 'grid',
        placeItems: 'center',
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 700,
        fontSize: 31 / 2.1,
      }}
    >
      {initials}
    </div>
  );
}

export default function UserLookupDetail({ userId }: { userId: string }) {
  const router = useRouter();
  const [result, setResult] = useState<UserLookupResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const detail = await getUserDetail(decodeURIComponent(userId));
        setResult(detail);
      } catch (err) {
        toast.error('Failed to load user details.');
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [userId]);

  const statusStyles: Record<string, { color: string; bg: string }> = {
    Free: { color: '#D74A2F', bg: '#FBE8E1' },
    Trial: { color: '#7E8796', bg: '#EDF1F6' },
    'Monthly Paid': { color: '#10A34A', bg: '#DAF4E4' },
    'Annual Paid': { color: '#10A34A', bg: '#DAF4E4' },
  };

  const cardField = (label: string, value: string) => (
    <div
      key={label}
      style={{
        background: '#F8FBF4',
        border: '1px solid rgba(254, 189, 36, 0.25)',
        borderRadius: 10,
        padding: '10px 12px',
      }}
    >
      <div style={{ color: '#6E7487', fontSize: 12, fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>{label}</div>
      <div style={{ color: '#111827', fontSize: 31 / 2.1, marginTop: 2, fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>{value}</div>
    </div>
  );

  const skeletonCardField = (key: number) => (
    <div
      key={key}
      style={{
        background: '#F8FBF4',
        border: '1px solid rgba(254, 189, 36, 0.25)',
        borderRadius: 10,
        padding: '10px 12px',
      }}
    >
      <div style={{ width: 80, height: 14, background: '#e1e5ee', borderRadius: 4, animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
      <div style={{ width: 120, height: 18, background: '#d1d5db', borderRadius: 4, marginTop: 6 }} />
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Panel
        style={{
          padding: 0,
          overflow: 'hidden',
          minHeight: 600,
          background: '#FFFFFF',
          borderColor: 'rgba(254, 189, 36, 0.28)',
        }}
      >
        <div style={{ padding: 24 }}>
          <div style={{ marginBottom: 24 }}>
            <button
              onClick={() => router.push('/user-lookup')}
              style={{
                background: 'none',
                border: 'none',
                color: '#6E7487',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: 0,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back
            </button>
          </div>

          {loading ? (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 54, height: 54, borderRadius: '50%', background: '#e1e5ee' }} />
                <div>
                  <div style={{ width: 160, height: 22, background: '#d1d5db', borderRadius: 4 }} />
                  <div style={{ width: 220, height: 16, background: '#e1e5ee', borderRadius: 4, marginTop: 6 }} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 16 }}>
                {Array.from({ length: 8 }).map((_, i) => skeletonCardField(i))}
              </div>
            </div>
          ) : !result ? (
            <div style={{ height: 400, display: 'grid', placeItems: 'center', color: '#6E7487', fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
              User not found.
            </div>
          ) : (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <InitialBadge name={result.name} />
                <div>
                  <div style={{ color: '#111827', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 34 / 2.1 }}>{result.name}</div>
                  <div style={{ color: '#6E7487', fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: 13, marginTop: 2 }}>
                    {result.email} - {result.platform}
                  </div>
                  <span
                    style={{
                      display: 'inline-block',
                      marginTop: 8,
                      borderRadius: 6,
                      padding: '4px 8px',
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 12,
                      fontWeight: 600,
                      color: statusStyles[result.status]?.color || '#000',
                      background: statusStyles[result.status]?.bg || '#fff',
                    }}
                  >
                    {result.status}
                  </span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 16 }}>
                {cardField('Platform', result.platform)}
                {cardField('Joined', result.joined)}
                {cardField('Last Active', result.lastActive)}
                {cardField('Current Exercise', formatLabel(result.currentExercise))}
                {cardField('Last Completed', formatLabel(result.lastCompleted))}
                {cardField('Lovable Score', result.lovableScore)}
                {cardField('Valuable Score', result.valuableScore)}
                {cardField('Capable Score', result.capableScore)}
                {cardField('Subscriber Since', result.subscriberSince)}
              </div>
            </>
          )}
        </div>
      </Panel>
    </div>
  );
}
